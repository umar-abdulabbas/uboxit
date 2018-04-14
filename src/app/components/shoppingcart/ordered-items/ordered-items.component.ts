import { Component, Input, OnInit, ElementRef, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Cart } from '../../../core/domain/cart';
import { OfferService } from '../../offers/services/offer.service';
import { CartService } from '../services/cart.service';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit, OnDestroy {

  @Input() cart: Cart;
  @Input() showCheckout = false;
  @Input() showContinueShopping = false;
  @Input() disableFullCart = false;

  @Output() madeEditable = new EventEmitter(false);

  promoCode: string;
  finishPage: boolean; // if finish page, dont do anything for (total count = 0) redirection

  subscriptions: Subscription[] = [];

  constructor(private offerService: OfferService,
              private cartService: CartService,
              private _eref: ElementRef,
              private router: Router) {
  }

  ngOnInit() {
    const cartSubscription = this.cartService.cartObservable.subscribe(cart => {
      if (cart.id) {
        this.cart = cart;
      }
    });

    this.subscriptions.push(cartSubscription);

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('finish')) {
          this.finishPage = true;
        }
      }
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
  }

  updateOrder(productId: string, count: number) {
    // another hack
    if (!productId.toLowerCase().startsWith('c')) {
      const productType = this.cartService.getProductType(productId);
      if (productType === 'COMBO') {
        this.cartService.addComboToCart(productId, count); // for cart @ header top right
        this.offerService.updateCountForCombo(productId, count); // just for UI - will not be used for processing cart - for couter with value
        const request: Cart = {combos: [{id: productId, count: count}]};
        this.processUpdateResponse(this.cartService.updateCart(this.cart.id, request));
      } else if (productType === 'ITEM') {
        this.cartService.addItemToCart(productId, count); // for cart @ header top right
        this.offerService.updateCountForItem(productId, count); // just for UI - will not be used for processing cart - for couter with value
        const request: Cart = {items: [{id: productId, count: count}]};
        this.processUpdateResponse(this.cartService.updateCart(this.cart.id, request));
      }
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

  makeEditable() {
    this.disableFullCart = false;
    this.madeEditable.emit(true);
  }

  private processUpdateResponse(updateObservalbe: Observable<Cart>) {
    const updateSubscription = updateObservalbe.subscribe((updatedCart) => {
      this.cart = updatedCart;
    });
    this.subscriptions.push(updateSubscription);

    const countSubscription = this.cartService.totalCountObservable.subscribe((totalCount) => {
      if (totalCount === 0 && !this.finishPage) {
        console.log('All your orders are cancelled, you can start over again!!');
        this.router.navigate(['/home']);
      }
    });
    this.subscriptions.push(countSubscription);
  }

}
