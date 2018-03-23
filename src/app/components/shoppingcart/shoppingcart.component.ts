import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './services/cart.service';
import { Cart } from '../../core/domain/cart';
import { StorageService } from '../../shared/services/storage-service';
import { OfferService } from '../offers/services/offer.service';
import { LoginService } from '../personal/services/login-service';
import { FeatureSwitch } from '../../core/feature-switch/feature-switch';
import { UserExpStyleService } from '../../shared/UI/globalUI.service';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
  public headerColor;
  step = 0;

  cart: Cart;
  loggedIn: boolean;

  // features
  loginEnabled: boolean;
  adyenPaymentSupported: boolean;

  // hack
  displayActionRowForAddress = true;

  constructor(private cartService: CartService, private router: Router,
              private storageService: StorageService,
              private offerService: OfferService,
              private loginService: LoginService,
              private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.adyenPaymentSupported = FeatureSwitch.isAdyenPaymentEnabled();
    this.uistyleservice.scrollToTop();
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
    // this.headerColor.classList.add('headerFixedShoppingCard');
    this.cart = this.cartService.cart;

    this.loginEnabled = FeatureSwitch.isLoginFeatureEnabled();
    this.loginService.loggedIn.subscribe(val => this.loggedIn = val);
  }

  ngOnDestroy() {
    // this.headerColor.classList.remove('headerFixedShoppingCard');
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  forwardWithoutLoginStep() {
    this.step += 2;
  }

  backwardWithoutLoginStep() {
    this.step -= 2;
  }

  prevStep() {
    this.step--;
  }

  goToPayment() {
    this.nextStep();
    console.log('going to pay for the selection, hence clear the current selection');
    this.storageService.clearCart();
    this.offerService.getOffers(); // start new offers - to be moved to somewhere else
  }

  linkToHomePage() {
    this.router.navigateByUrl('/home');
  }
}
