import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './services/cart.service';
import { Cart } from '../../core/domain/cart';
import { OfferService } from '../offers/services/offer.service';
import { LoginService } from '../personal/services/login-service';
import { FeatureSwitch } from '../../core/feature-switch/feature-switch';
import { UserExpStyleService } from '../../shared/UI/globalUI.service';
import { PaymentService } from '../payment/services/payment-service';

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
              private offerService: OfferService,
              private paymentService: PaymentService,
              private loginService: LoginService,
              private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    if (this.cartService.cartId) {
      this.adyenPaymentSupported = FeatureSwitch.isAdyenPaymentEnabled();
      this.uistyleservice.scrollToTop();
      this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
      // this.headerColor.classList.add('headerFixedShoppingCard');
      this.cartService.getCart().subscribe(res => {
        this.cart = this.cartService.cart;
      });

      this.loginEnabled = FeatureSwitch.isLoginFeatureEnabled();
      this.loginService.loggedIn.subscribe(val => this.loggedIn = val);
    } else {
      this.linkToHomePage();
    }
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

  isValidForPayment() {
    return this.paymentService.isValidForPayment();
  }

  // will be used once login feature is enabled
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
    this.offerService.getOffers(); // start new offers - to be moved to somewhere else
  }

  linkToHomePage() {
    this.router.navigateByUrl('/home');
  }
}
