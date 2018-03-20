import { Component, Input, OnInit } from '@angular/core';
import { Cart } from '../../../core/domain/cart';
import { OfferService } from '../../offers/services/offer.service';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.scss']
})
export class OrderedItemsComponent implements OnInit {

  @Input() cart: Cart;

  constructor(private offerService: OfferService,
              private cartService: CartService,
              private router: Router) {
  }

  ngOnInit() {
  }

  updateOrder(productId: string, count: number) {
    // another hack
    if (!productId.toLowerCase().startsWith('c')) {
      this.cartService.addComboToCart(productId, count); // for cart @ header top right
      this.offerService.updateCountForCombo(productId, count); // just for UI - will not be used for processing cart - for couter with value
      const request: Cart = { combos: [ { id: productId, count: count } ] };
      this.cartService.updateCart(this.cart.id, request).subscribe((updatedCart) => {
        this.cart = updatedCart;
        const totalCount = this.cart.combos ? this.cart.combos.map(c => c.count).reduce((prev, cur) => prev + cur, 0) : 0;
        if (totalCount === 0) {
          console.log('All your orders are cancelled, you can start over again!!');
          this.router.navigate(['/home']);
        }
      });
    } else {
      const combo = this.cart.combos.find(c => c.id === productId);
      const itemIds = combo.items.map(i => i.id);
      this.cartService.prepareCustomisedCombo(itemIds, count);
      this.cartService.updateCartWithCustomisedCombo();
    }
  }

  removeOrder(productId: string) {
    this.updateOrder(productId, 0);
  }
  linkToHomePage() {
    this.router.navigateByUrl('/home');
  }

}
