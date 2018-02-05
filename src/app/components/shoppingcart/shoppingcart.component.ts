import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from './services/cart.service';
import { Cart } from '../../core/domain/cart';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../../shared/services/storage-service';
import { OfferService } from '../offers/services/offer.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
  public headerColor;
  step = 0;

  cart: Observable<Cart>;

  constructor(private cartService: CartService, private router: Router,
              private storageService: StorageService,
              private offerService: OfferService) {
  }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
    this.headerColor.classList.add('headerFixedShoppingCard');
    this.cart = this.cartService.createCart();
    // .subscribe((cart) => {
    //   this.cart = cart;
    // });
  }

  ngOnDestroy() {
    this.headerColor.classList.remove('headerFixedShoppingCard');
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
