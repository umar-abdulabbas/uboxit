import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { CartService } from '../shared/offers/cart.service';

@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
  public headerColor;
  step = 0;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
    this.headerColor.classList.add('headerFixedShoppingCard');
    this.cartService.updateCart();
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

  linkToHomePage() {
      this.router.navigateByUrl('/home');
  }
}
