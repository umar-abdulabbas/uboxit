import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../payment/services/payment-service';
import { CartService } from '../../shoppingcart/services/cart.service';
import { OfferService } from '../../offers/services/offer.service';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';

export enum OrderStatus {
  Authorised = 'authorised',
  Received = 'received',
  Pending = 'pending'
}

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  routerParamSubscription: Subscription = new Subscription();

  orderConfirmation: string;
  orderStatus: OrderStatus;

  OrderStatus = OrderStatus;

  constructor(private route: ActivatedRoute,
              private paymentService: PaymentService,
              private cartService: CartService,
              private offerService: OfferService,
              private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    console.log('finish loaded');
    if (FeatureSwitch.isAdyenPaymentEnabled()) {
      this.routerParamSubscription = this.route.queryParams.subscribe(params => {
        const payLoad = params.payload;
        const cartId = params.cartId;
        const payInPerson = params.payInPerson;
        console.log(payLoad);
        // const resultCode = params.resultCode;
        // console.log(resultCode);
        // if (resultCode === 'authorised') {
        this.paymentService.finalizePayment(payLoad, cartId, payInPerson)
          .subscribe((res: any) => {
            console.log(res);
            this.offerService.clearSelection();
            this.cartService.clearStoredCart();
            this.orderConfirmation = res.orderConfirmation;
            this.orderStatus = res.authResponse;
          });
        // } else {
        //   console.error('payment not success');
        // }
      });
    } else {
      this.offerService.clearSelection();
      this.cartService.clearStoredCart();
      this.orderStatus = OrderStatus.Authorised;
      this.orderConfirmation = '2BC0RECTD';
    }
  }

}
