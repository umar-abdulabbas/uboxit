import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { PaymentService } from '../../payment/services/payment-service';
import { StorageService } from '../../../shared/services/storage-service';

// export enum PaymentResultCode {
//   Authorised = 'authorised',
//   Pending = 'pending'
// }

@Component({
  selector: 'app-finish',
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.css']
})
export class FinishComponent implements OnInit {

  routerParamSubscription: Subscription = new Subscription();

  orderConfirmation: string;

  constructor(private route: ActivatedRoute,
              private paymentService: PaymentService,
              private storageService: StorageService) {
  }

  ngOnInit() {
    console.log('finish loaded');
    this.routerParamSubscription = this.route.queryParams.subscribe(params => {
      const payLoad = params.payload;
      console.log(payLoad);
      const resultCode = params.resultCode;
      console.log(resultCode);
      if (resultCode === 'authorised') {
        this.paymentService.finalizePayment(payLoad)
          .subscribe((res: any) => {
            console.log(res);
            this.storageService.clearCart();
            this.orderConfirmation = res.orderConfirmation;
          });
      } else {
        console.error('payment not success');
      }
    });
  }

}
