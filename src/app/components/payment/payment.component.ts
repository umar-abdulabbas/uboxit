import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PaymentService } from './services/payment-service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../core/domain/cart';
import { Router } from '@angular/router';
import { NgZone } from '@angular/core';
import { FeatureSwitch } from '../../core/feature-switch/feature-switch';
import { CartService } from '../shoppingcart/services/cart.service';

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

  paymentNotPossible: boolean;
  adyenPaymentSupported: boolean;

  amount: number;

  showOrderError: boolean;
  orderErrorMessage: string;

  sdkConfigObj = {
    context: 'live' // change it to `live` when going live.
  };

  private adyenSdk = window['chckt'];

  payOnDeliveryRadioText: string;
  payOnDeliveryText: string;

  constructor(private paymentService: PaymentService,
              private cartService: CartService,
              private router: Router,
              private zone: NgZone) {
  }

  ngOnInit() {

    this.amount = this.cartService.cart.finalPrice.amount;

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

    if (this.paymentService.isPickUpAtStore()) {
      this.payOnDeliveryRadioText = 'Pay at store';
      this.payOnDeliveryText = 'You can pay by cash or card at our shop !!';
    } else {
      this.payOnDeliveryRadioText = 'Pay on delivery';
      this.payOnDeliveryText = 'You can pay by cash or card to our delivery person !!';
    }
  }

  loadPaymentWidget() {
    this.paymentService.initiatePayment(this.cartService.cartId)
      .subscribe((res: any) => {
        const inputForAdyen = res.paymentSession;
        if (inputForAdyen) {
          this.adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
          this.payOnDelivery.emit(false);
        } else {
          this.paymentNotPossible = true;
        }
        const orderError = res.error;
        if (orderError) {
          this.orderErrorMessage = orderError.description;
          this.showOrderError = true;
        }
      });
  }

  paymentOnDelivery() {
    this.payOnDelivery.emit(true);
  }

  closeModel() {
    this.showOrderError = false;
    if (this.paymentNotPossible) {
      this.router.navigate(['home']);
    }
  }

}
