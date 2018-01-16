import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, ComboRequest } from '../domain/cart';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CartService {

  cart: Cart;

  totalCount = 0;
  totalCountSubject = new Subject<number>();

  constructor(private http: HttpClient) {
  }

  updateCart() {
    this.http.post('api/shop', this.cart).subscribe((res) => {
      console.log(res);
    });
  }

  initializeCart(offerId: string) {
    this.cart = {
      offerId: offerId,
      combos: [],
      items: []
    };
  }

  addComboToCart(productId: string, count: number) {
    let combo: ComboRequest;
    if (!this.cart) {
      throw new Error('please initialize cart');
    } else if (!!this.cart && this.isProductAlreadyPresent(this.cart.combos, productId)) {
      combo = this.cart.combos.find(c => c.id === productId);
      combo.count = count;
    } else {
      combo = {
        id: productId,
        count: count
      };
      this.cart.combos.push(combo);
    }
    console.log(combo);
    this.addAllCountAndEmitValue();
  }

  private isProductAlreadyPresent(productList: any[], id: string) {
    return !!productList && !!productList.find(p => p.id === id);
  }

  private addAllCountAndEmitValue() {
    let itemCount = 0;
    let comboCount = 0;
    if (this.cart.items.length > 0) {
      itemCount = this.cart.items.map(i => i.count).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    if (this.cart.combos.length > 0) {
      comboCount = this.cart.combos.map(c => c.count).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    this.totalCount = itemCount + comboCount;
    this.totalCountSubject.next(this.totalCount);
  }
}
