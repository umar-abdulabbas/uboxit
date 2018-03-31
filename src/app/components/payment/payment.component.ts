import { Component, Input, OnInit } from '@angular/core';
import { PaymentService } from './services/payment-service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../core/domain/cart';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { FeatureSwitch } from '../../core/feature-switch/feature-switch';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public valueSelcted = 0;
  @Input() cart: Observable<Cart>;
  @Input() checked: boolean;
  adyenPaymentSupported: boolean;

  sdkConfigObj = {
    context: 'test' // change it to `live` when going live.
  };

  constructor(private paymentService: PaymentService,
              private router: Router,
              private zone: NgZone) {
  }

  ngOnInit() {

    this.adyenPaymentSupported = FeatureSwitch.isAdyenPaymentEnabled();
    if (this.adyenPaymentSupported) {

      const adyenSdk = window['chckt'];

      this.paymentService.initiatePayment()
        .subscribe(res => {
          adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
        });

      adyenSdk['hooks']['beforeRedirect'] = () => {
        console.log('before redirect');
        return true;
      };

      adyenSdk['hooks']['beforeComplete'] = (node, paymentData) => {
        console.log('before complete');
        console.log(node);
        console.log(paymentData);
        if (paymentData.resultCode === 'authorised') {
          // hack as we have browseranimation module
          // https://github.com/angular/angular/issues/20290
          this.zone.run(() => { this.router.navigate(['finish'], { queryParams: { payload: paymentData.payload, resultCode: paymentData.resultCode} }); });
        } else {
          console.error('payment not success');
        }
        return true;
      };
    }
  }

}
