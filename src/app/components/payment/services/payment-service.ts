import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../../shoppingcart/services/cart.service';
import { LoginService } from '../../personal/services/login-service';

const returnurl = 'http://localhost:8081/finish';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient,
              private cartService: CartService,
              private loginService: LoginService) {
  }

  initiatePayment() {
    return this.http.post('/order-api/order', {
      'shopId': this.cartService.cartId,
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
}
