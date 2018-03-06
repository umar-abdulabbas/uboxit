import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../payment/services/payment-service';
import { CartService } from '../../shoppingcart/services/cart.service';
import { OfferService } from '../../offers/services/offer.service';

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
              private offerService: OfferService) {
  }

  ngOnInit() {
    console.log('finish loaded');
    this.routerParamSubscription = this.route.queryParams.subscribe(params => {
      const payLoad = params.payload;
      console.log(payLoad);
      // const resultCode = params.resultCode;
      // console.log(resultCode);
      // if (resultCode === 'authorised') {
      this.paymentService.finalizePayment(payLoad)
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
  }

}
