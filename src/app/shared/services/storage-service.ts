import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Cart } from '../../core/domain/cart';

const CART_KEY = 'cart';
const CART_UPDATED_TIME_KEY = 'cart_updated_at';

const CART_VALIDITY_TIME_IN_MINS = 1;

@Injectable()
export class StorageService {
  constructor(private localStorageService: LocalStorageService) {

  }

  storeCart(cart: Cart) {
    this.set(CART_KEY, cart);
    this.set(CART_UPDATED_TIME_KEY, new Date());
  }

  getStoredCart() {
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

  clearCart() {
    this.localStorageService.remove(CART_KEY, CART_UPDATED_TIME_KEY);
  }

  set(key: string, value: any) {
    this.localStorageService.set(key, value);
  }
}
