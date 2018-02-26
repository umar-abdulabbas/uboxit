import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './services/cart.service';
import { Cart } from '../../core/domain/cart';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../../shared/services/storage-service';
import { OfferService } from '../offers/services/offer.service';
import { LoginService } from '../personal/services/login-service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.scss']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
  public headerColor;
  step = 0;

  cart: Observable<Cart>;
  loggedIn: boolean;

  constructor(private cartService: CartService, private router: Router,
              private storageService: StorageService,
              private offerService: OfferService,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
    // this.headerColor.classList.add('headerFixedShoppingCard');
    if (!this.cartService.cartId) {
      this.cart = this.cartService.createCart();
      /* tslint:disable */
       // this.cart = Observable.of({'items':[],'combos':[{'id':'23458','count':2},{'id':'23461','count':2}],'offerId':'1dda4b04-2372-4b3f-8eb5-79461c83969a','normalPrice':{'amount':140,'currencyCode':'EUR'},'discountedPrice':{'amount':128,'currencyCode':'EUR'},'_links':{'self':{'href':'http://localhost:8085/shop-api/shop/a1bc9134-b9e3-4075-b840-441818b5a627'}},'id':'a1bc9134-b9e3-4075-b840-441818b5a627'}); //add cmd for deployment
    } else {
      this.cart = this.cartService.getCart();
    }
    this.loginService.loggedIn.subscribe(val => this.loggedIn = val);
  }

  ngOnDestroy() {
    //this.headerColor.classList.remove('headerFixedShoppingCard');
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
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
