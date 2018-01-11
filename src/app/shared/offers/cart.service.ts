import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../domain/cart';

@Injectable()
export class CartService {

  constructor(private http: HttpClient) {
    this.updateCart({
      combos: [{
        id: '23458',
        count: 100
      }],
      offerId: 'feb5f133-8ec4-43cb-adf7-deac9e83dfd6'
    });
  }

  updateCart(cart: Cart) {
    this.http.post('api/shop', cart).subscribe((res) => {
      console.log(res);
    });
  }
}
