import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { Cart } from '../../../core/domain/cart';
import { OfferService } from '../../offers/services/offer.service';
import { CartService } from '../services/cart.service';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  @Input() cart: Cart;
  promoCode: string;
  showCheckout = false;
  showContinueShopping = false;

  constructor(private offerService: OfferService,
              private cartService: CartService,
              private _eref: ElementRef,
              private router: Router) {
  }

  ngOnInit() {
    this.cartService.cartObservable.subscribe(cart => {
      if (cart.id) {
        this.cart = cart;
      }
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('shoppingcart')) {
          this.showContinueShopping = true;
        } else {
          this.showCheckout = true;
        }
      }
    });
  }

  updateOrder(productId: string, count: number) {
    // another hack
    if (!productId.toLowerCase().startsWith('c')) {
      this.cartService.addComboToCart(productId, count); // for cart @ header top right
      this.offerService.updateCountForCombo(productId, count); // just for UI - will not be used for processing cart - for couter with value
      const request: Cart = {combos: [{id: productId, count: count}]};
      this.processUpdateResponse(this.cartService.updateCart(this.cart.id, request));
    } else {
      const combo = this.cart.combos.find(c => c.id === productId);
      const itemIds = combo.items.map(i => i.id);
      this.cartService.prepareCustomisedCombo(itemIds, count);
      this.processUpdateResponse(this.cartService.updateCartWithCustomisedCombo());
    }
  }

  applyPromoCode() {
    this.processUpdateResponse(this.cartService.applyPromoCode(this.promoCode));
  }

  removeOrder(productId: string) {
    this.updateOrder(productId, 0);
  }

  linkToHomePage() {
    this.router.navigateByUrl('/home');
  }

  proceedToCheckOut() {
    this.router.navigateByUrl('/shoppingcart');
  }

  private processUpdateResponse(updateObservalbe: Observable<Cart>) {
    updateObservalbe.subscribe((updatedCart) => {
      this.cart = updatedCart;
      const totalCount = this.cart.combos ? this.cart.combos.map(c => c.count).reduce((prev, cur) => prev + cur, 0) : 0;
      if (totalCount === 0) {
        console.log('All your orders are cancelled, you can start over again!!');
        this.router.navigate(['/home']);
      }
    });
  }

}
