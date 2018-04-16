import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentService } from './services/payment-service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../core/domain/cart';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { FeatureSwitch } from '../../core/feature-switch/feature-switch';
import { CartService } from '../shoppingcart/services/cart.service';
import { MatRadioChange } from '@angular/material';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  public valueSelcted = 0;
  @Input() cart: Observable<Cart>;
  @Input() checked: boolean;
  @Output() payOnDelivery = new EventEmitter<boolean>();
  adyenPaymentSupported: boolean;

  sdkConfigObj = {
    context: 'test' // change it to `live` when going live.
  };

  private adyenSdk = window['chckt'];

  constructor(private paymentService: PaymentService,
              private cartService: CartService,
              private router: Router,
              private zone: NgZone) {
  }

  ngOnInit() {

    this.adyenPaymentSupported = FeatureSwitch.isAdyenPaymentEnabled();
    if (this.adyenPaymentSupported) {

      this.loadPaymentWidget();

      this.adyenSdk['hooks']['beforeRedirect'] = () => {
        console.log('before redirect');
        return true;
      };

      this.adyenSdk['hooks']['beforeComplete'] = (node, paymentData) => {
        console.log('before complete');
        console.log(node);
        console.log(paymentData);
        // hack as we have browseranimation module
        // https://github.com/angular/angular/issues/20290
        const queryParams = {
          payload: paymentData.payload,
          resultCode: paymentData.resultCode,
          cartId: this.cartService.cartId
        };
        this.zone.run(() => {
          this.router.navigate(['finish'], {queryParams: queryParams});
        });
        return true;
      };
    }
  }

  loadPaymentWidget() {
    // console.log(matRadioChange);
    this.paymentService.initiatePayment(this.cartService.cartId)
      .subscribe(res => {
        this.adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
        this.payOnDelivery.emit(false);
      });
  }

  paymentOnDelivery() {
    this.payOnDelivery.emit(true);
  }

}
