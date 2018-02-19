import { Component, Input, OnInit } from '@angular/core';
import { PaymentService } from './services/payment-service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../core/domain/cart';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  @Input() cart: Observable<Cart>;

  sdkConfigObj = {
    context : 'test' // change it to `live` when going live.
  };

  constructor(private paymentService: PaymentService) { }

  ngOnInit() {

    const adyenSdk = window['chckt'];

    this.cart.subscribe((res1) => {
      console.log(res1);
      this.paymentService.initiatePayment()
        .subscribe(res => {
          adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
        });

      adyenSdk['hooks']['beforeComplete'] = (node, paymentData) => {
        console.log(node);
        console.log(paymentData);
        return false;
      };
    });
  }

}
