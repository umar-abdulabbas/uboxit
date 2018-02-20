import { Component, Input, OnInit } from '@angular/core';
import { PaymentService } from './services/payment-service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../core/domain/cart';
import { StorageService } from '../../shared/services/storage-service';

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

  constructor(private paymentService: PaymentService,
              private storageService: StorageService) { }

  ngOnInit() {

    const adyenSdk = window['chckt'];

    this.cart.subscribe((res1) => {
      console.log(res1);
      this.paymentService.initiatePayment()
        .subscribe(res => {
          adyenSdk['checkout'](res, '#checkout-div', this.sdkConfigObj);
        });

      adyenSdk['hooks']['beforeRedirect'] = () => {
        console.log('before redirect');
        this.storageService.clearCart();
        return true;
      };
    });
  }

}
