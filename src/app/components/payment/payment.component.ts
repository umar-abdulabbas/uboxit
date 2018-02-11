import { Component, OnInit } from '@angular/core';
import { PaymentService } from './services/payment-service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  sdkConfigObj = {
    context : 'test' // change it to `live` when going live.
  };
  constructor(private paymentService: PaymentService) { }

  ngOnInit() {
    this.paymentService.initiatePayment()
      .subscribe(res => {
        const adyenSdk = window['chckt'];
        adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
      });
  }

}
