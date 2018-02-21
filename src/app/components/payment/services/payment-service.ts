import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../../shoppingcart/services/cart.service';
import { LoginService } from '../../personal/services/login-service';
import { StorageService } from '../../../shared/services/storage-service';

const returnurl = 'http://localhost:8081/finish';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient,
              private cartService: CartService,
              private loginService: LoginService,
              private storageService: StorageService) {
  }

  initiatePayment() {
    // Before payment just store the cart id, will be required for finalizing
    const cartId = this.cartService.cartId;
    this.storageService.storeCartId(cartId);
    return this.http.post('/order-api/order', {
      'shopId': cartId,
      'individualId': this.loginService.individual.id,
      'returnurl': returnurl,
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
    return this.http.post('/order-api/order/payment', {
      shopId: this.storageService.getCartId(),
      paymentPayload: paymentPayload
    });
  }
}
