import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../../shoppingcart/services/cart.service';
import { LoginService } from '../../personal/services/login-service';
import { StorageService } from '../../../shared/services/storage-service';
import { PlatformLocation } from '@angular/common';

@Injectable()
export class PaymentService {

  origin: string;

  constructor(private http: HttpClient,
              private cartService: CartService,
              private loginService: LoginService,
              private storageService: StorageService,
              private platformLocation: PlatformLocation) {
    this.origin = (this.platformLocation as any).location.origin;
  }

  initiatePayment() {
    // Before payment just store the cart id, will be required for finalizing
    const cartId = this.cartService.cartId;
    this.storageService.storeCartId(cartId);
    return this.http.post('/order-api/order', {
      'shopId': cartId,
      'individualId': this.loginService.individual.id,
      'returnurl': `${this.origin}/finish`,
      'origin': this.origin,
      'deliveryAddress': {
        'area': 'Amstelveen',
        'houseNumber': '54A',
        'landMark': 'ABN Amro',
        'postalCode': '1143DE',
        'street': 'Gandhi Nagar'
      }
    });
  }

  finalizePayment(paymentPayload: string) {
    return this.http.post('/order-api/order/finalizeTransaction', {
      shopId: this.storageService.getCartId(),
      paymentPayload: paymentPayload
    });
  }
}
