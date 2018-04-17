import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute, Router } from '@angular/router';
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

  pageTitle: string;
  mainMessage: string;
  nextActionMessage: string;

  paymentSuccess: boolean;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private paymentService: PaymentService,
              private cartService: CartService,
              private offerService: OfferService,
              private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    if (FeatureSwitch.isAdyenPaymentEnabled()) {
      this.routerParamSubscription = this.route.queryParams.subscribe(params => {
        const payLoad = params.payload;
        const cartId = params.cartId;
        const payInPerson = params.payInPerson;
        console.log(payLoad);
        this.paymentService.finalizePayment(payLoad, cartId, payInPerson)
          .subscribe((res: any) => {
            console.log(res);
            if (payInPerson || res.authResponse.toLowerCase() === OrderStatus.Authorised || res.authResponse.toLowerCase() === OrderStatus.Received) {
              this.paymentSuccess = true;
              this.offerService.clearSelection();
              this.cartService.clearStoredCart();
              this.pageTitle = 'Thank you for your purchase !!!';
              this.mainMessage = `Thanks for ordering with UBoxIT, Your Order confirmation is: ${res.orderConfirmation}.`;
              this.nextActionMessage = `We are processing the order and will be delivered shortly.`;
            } else {
              console.error('payment not success');
              this.paymentSuccess = false;
              this.pageTitle = 'Sorry!! something went wrong, Please contact our help desk with the below order number.';
              this.mainMessage = `Thanks for trying UBoxIT, Unfortunately the payment is failed or unknown.`;
              this.nextActionMessage = `Please use Order confirmation: ${res.orderConfirmation} for further queries.`;
            }
          });
      });
    } else {
      this.offerService.clearSelection();
      this.cartService.clearStoredCart();
      this.pageTitle = 'Thank you for your purchase !!!';
      this.mainMessage = `Thanks for ordering with UBoxIT, Your Order confirmation is: 2BC0RECTD.`;
      this.nextActionMessage = `We are processing the order and will be delivered shortly.`;
    }
  }

  retryPayment() {
    this.router.navigate(['/shoppingcart'], {queryParams: {retryPayment: true}});
  }
}
