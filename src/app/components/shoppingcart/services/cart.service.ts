import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart, Combo } from '../../../core/domain/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { StorageService } from '../../../shared/services/storage-service';

@Injectable()
export class CartService {

  totalCount = 0;
  totalCountSubject = new BehaviorSubject<number>(this.totalCount);

  cartId: string;

  cart: Cart;

  private cartRequest: Cart;

  constructor(private http: HttpClient,
              private storageService: StorageService) {
  }

  getCart(): Observable<Cart> {
    const getCartObservable = this.http.get<Cart>(`shop-api/shop/${this.cartId}`)
      .publishReplay()
      .refCount();
    getCartObservable.subscribe((result: any) => {
      this.enrichDomainCart(result);
    });
    return getCartObservable;
  }

  createCart(): Observable<Cart> {
    const createCartObservable = this.http.post<Cart>('shop-api/shop', this.cartRequest)
      .publishReplay()
      .refCount();
    createCartObservable.subscribe((result: any) => {
      this.cartId = result.id;
      this.enrichDomainCart(result);
    });
    return createCartObservable;
  }

  // to update already defined combo - so the request can be already prepared @ component level
  updateCart(cartId: string, update: Cart): Observable<Cart> {
    const updateCartObservable = this.http.put<Cart>(`shop-api/shop/${cartId}`, update)
      .publishReplay()
      .refCount();
    updateCartObservable.subscribe((result: any) => {
      this.cartId = result.id;
      this.enrichDomainCart(result);
    });
    return updateCartObservable;
  }

  // to update custom combo - request will be prepare here - as it is complex
  // only to update make your own combo section if cart is already crated
  updateCartWithCustomisedCombo() {
    this.http.put<Cart>(`shop-api/shop/${this.cartId}`, this.cartRequest)
      .subscribe(res => console.log(res));
  }

  initializeCart(offerId: string) {
    if (!this.cartRequest) { // without this old cart will be reset
      this.cartRequest = {
        offerId: offerId,
        combos: [],
        items: []
      };
    }
    const cachedCart: Cart = this.storageService.getStoredCart();
    if (!!cachedCart) {
      this.cartRequest = cachedCart;
      this.addAllCountAndEmitValue();
    }
  }

  addComboToCart(productId: string, count: number) {
    // this.localStorageService.set(`product_${productId}`, count);
    let combo: Combo;
    if (!this.cartRequest) {
      throw new Error('please initialize cart');
    } else if (!!this.cartRequest && this.isProductAlreadyPresent(this.cartRequest.combos, productId)) {
      combo = this.cartRequest.combos.find(c => c.id === productId);
      combo.count = count;
    } else {
      combo = {
        id: productId,
        count: count
      };
      this.cartRequest.combos.push(combo);
    }
    console.log(combo);
    this.storageService.storeCart(this.cartRequest);
    this.addAllCountAndEmitValue();
  }

  prepareCustomisedCombo(itemIds: string[], count: number) {
    let combo: Combo;
    if (!this.cartRequest) {
      throw new Error('please initialize cart');
    } else if (!!this.cartRequest && this.isCustomisedComboAlreadyPresent(this.cartRequest.combos, itemIds)) {
      combo = this.getCustomisedComboIfAlreadyPresent(this.cartRequest.combos, itemIds);
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
      this.cartRequest.combos.push(combo);
    }
    this.storageService.storeCart(this.cartRequest);
    this.addAllCountAndEmitValue();
  }

  isCustomComboAlreadySelected(itemIds: string[]) {
    return this.isCustomisedComboAlreadyPresent(this.cartRequest.combos, itemIds);
  }

  getCustomeComboCountIfAlreadySelected(itemIds: string[]) {
    return this.getCustomisedComboIfAlreadyPresent(this.cartRequest.combos, itemIds).count;
  }

  private isProductAlreadyPresent(productList: any[], id: string) {
    return !!productList && !!productList.find(p => p.id === id);
  }

  private addAllCountAndEmitValue() {
    let itemCount = 0;
    let comboCount = 0;
    if (this.cartRequest.items.length > 0) {
      itemCount = this.cartRequest.items.map(i => i.count).reduce((accumulator, currentValue) => accumulator + currentValue);
    }
    if (this.cartRequest.combos.length > 0) {
      comboCount = this.cartRequest.combos.map(c => c.count).reduce((accumulator, currentValue) => accumulator + currentValue);
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

  private enrichDomainCart(cartRes: Cart) {
    if (cartRes.combos) {
      cartRes.combos.forEach(combo => {
        combo.itemNames = combo.items.map(i => i.name).join(' + ');
      });
      this.cart = cartRes;
    } else {
      this.cart = {};
    }
  }
}
