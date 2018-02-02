import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, ComboRequest } from '../../../core/domain/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class CartService {

  cart: Cart;

  totalCount = 0;
  totalCountSubject = new BehaviorSubject<number>(this.totalCount);

  constructor(private http: HttpClient) {
  }

  updateCart() {
    this.http.post('api/shop', this.cart).subscribe((res) => {
      console.log(res);
    });
  }

  initializeCart(offerId: string) {
    if (!this.cart) { // without this old cart will be reset
      this.cart = {
        offerId: offerId,
        combos: [],
        items: []
      };
    }
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

  prepareCustomisedCombo(itemIds: string[], count: number) {
    let combo: ComboRequest;
    if (!this.cart) {
      throw new Error('please initialize cart');
    } else if (!!this.cart && this.isCustomisedComboAlreadyPresent(this.cart.combos, itemIds)) {
      combo = this.getCustomisedComboIfAlreadyPresent(this.cart.combos, itemIds);
      combo.count = count;
    } else {
      const items = [];
      itemIds.forEach(id => {
        items.push({
          id: id
        });
      });
      combo = {
        items: items,
        count: count
      };
      this.cart.combos.push(combo);
    }
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

  private isCustomisedComboAlreadyPresent(productList: any[], itemIds: string[]) {
    return !!productList && !!productList.find(p => {
      if (!!p.items) { // there will be products without items, ready made combos
        const existingIdKey = p.items.map(item => item.id).join('-');
        const newIdKey = itemIds.join('-');
        return existingIdKey === newIdKey;
      }
      return false;
    });
  }

  private getCustomisedComboIfAlreadyPresent(productList: any[], itemIds: string[]) {
    return productList.find(p => {
      if (!!p.items) {
        const existingIdKey = p.items.map(item => item.id).join('-');
        const newIdKey = itemIds.join('-');
        return existingIdKey === newIdKey;
      }
      return false;
    });
  }
}
