import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PaymentService {

  constructor(private http: HttpClient) {
  }

  initiatePayment() {
    return this.http.post('/order-api/order', {
      'shopId': '23525325532',
      'individualId': 'C1234',
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
