import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Cart } from '../../core/domain/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

const CART_KEY = 'cart';
const USER_KEY = 'username';
const CART_ID_KEY = 'cart_id';
const CART_UPDATED_TIME_KEY = 'cart_updated_at';

const CART_VALIDITY_TIME_IN_MINS = 1;

@Injectable()
export class StorageService {

  totalCount = 0;
  totalCountSubject = new BehaviorSubject<number>(this.totalCount);

  constructor(private localStorageService: LocalStorageService) {

  }

  storeCart(cart: Cart) {
    this.set(CART_KEY, cart);
    this.set(CART_UPDATED_TIME_KEY, new Date());
    this.addAllCountAndEmitValue();
  }

  storeCartId(cartId: string) {
    this.set(CART_ID_KEY, cartId);
  }

  storeUser(username: string) {
    this.set(USER_KEY, username);
  }

  getUser() {
    return this.localStorageService.get<string>(USER_KEY);
  }

  getStoredCart(): Cart {
    const cartUpdatedAt: string = <string> this.localStorageService.get(CART_UPDATED_TIME_KEY);
    if (!!cartUpdatedAt) {
      const diff = Math.abs(new Date(cartUpdatedAt).getTime() - new Date().getTime()) / (60 * 1000);
      console.log(diff);
      if (diff < CART_VALIDITY_TIME_IN_MINS) {
        return this.localStorageService.get(CART_KEY);
      } else {
        console.log('cache_expired');
        this.clearCart();
      }
    }
    return undefined;
  }

  getCartId() {
    return this.localStorageService.get(CART_ID_KEY);
  }

  clearCart() {
    this.localStorageService.remove(CART_KEY, CART_UPDATED_TIME_KEY, CART_ID_KEY);
    this.totalCountSubject.next(0);
  }

  clearUser() {
    this.localStorageService.remove(USER_KEY);
  }

  set(key: string, value: any) {
    this.localStorageService.set(key, value);
  }

  private addAllCountAndEmitValue() {
    let itemCount = 0;
    let comboCount = 0;
    const cart = this.getStoredCart();
    if (cart) {
      if (cart.items.length > 0) {
        itemCount = cart.items.map(i => i.count).reduce((accumulator, currentValue) => accumulator + currentValue);
      }
      if (cart.combos.length > 0) {
        comboCount = cart.combos.map(c => c.count).reduce((accumulator, currentValue) => accumulator + currentValue);
      }
    }
    this.totalCount = itemCount + comboCount;
    this.totalCountSubject.next(this.totalCount);
  }
}
