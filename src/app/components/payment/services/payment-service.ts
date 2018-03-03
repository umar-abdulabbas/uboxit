import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CartService } from '../../shoppingcart/services/cart.service';
import { LoginService } from '../../personal/services/login-service';
import { StorageService } from '../../../shared/services/storage-service';
import { PlatformLocation } from '@angular/common';
import { Address } from '../../../core/domain/address';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';

@Injectable()
export class PaymentService {

  private origin: string;
  private address: Address;
  private userDetails: any;

  constructor(private http: HttpClient,
              private cartService: CartService,
              private loginService: LoginService, // LOGIN FEATURE
              private storageService: StorageService,
              private platformLocation: PlatformLocation) {
    this.origin = (this.platformLocation as any).location.origin;
  }

  initiatePayment() {
    // Before payment just store the cart id, will be required for finalizing
    const cartId = this.cartService.cartId;
    this.storageService.storeCartId(cartId);
    const request = {
      'shopId': cartId,
      'returnurl': `${this.origin}/finish`,
      'origin': this.origin,
      'deliveryAddress': this.address,
      'emailId': this.userDetails.email,
      'mobileNumber': this.userDetails.phone
    };
    if (FeatureSwitch.isLoginFeatureEnabled()) {
      request['individualId'] = this.loginService.individual.customerId;
    }
    return this.http.post('/order-api/order', request);
  }

  finalizePayment(paymentPayload: string) {
    return this.http.post('/order-api/order/finalizeTransaction', {
      shopId: this.storageService.getCartId(),
      paymentPayload: paymentPayload
    });
  }

  enrichAddress(address: Address) {
    this.address = address;
  }

  enrichUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }
}
