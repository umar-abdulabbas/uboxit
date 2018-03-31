import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../../personal/services/login-service';
import { PlatformLocation } from '@angular/common';
import { Address } from '../../../core/domain/address';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';
import { Router } from '@angular/router';

@Injectable()
export class PaymentService {

  private readonly origin: string;
  private address: Address;
  private pickupAtStore: boolean;
  private userDetails: any;

  constructor(private http: HttpClient,
              private loginService: LoginService, // LOGIN FEATURE
              private platformLocation: PlatformLocation) {
    this.origin = (this.platformLocation as any).location.origin;
  }

  initiatePayment(cartId: string) {
    const request = {
      'shopId': cartId,
      'returnurl': `${this.origin}/finish?cartId=${cartId}`,
      'origin': this.origin,
      'emailId': this.userDetails.email,
      'mobileNumber': this.userDetails.phone
    };
    if (FeatureSwitch.isLoginFeatureEnabled()) {
      request['individualId'] = this.loginService.individual.customerId;
    }
    if (this.pickupAtStore) {
      request['pickupAtStore'] = this.pickupAtStore;
    } else {
      request['deliveryAddress'] = this.address;
    }
    return this.http.post('/order-api/order', request);
  }

  finalizePayment(paymentPayload: string, cartId: string) {
    return this.http.post('/order-api/order/finalizeTransaction', {
      shopId: cartId,
      paymentPayload: paymentPayload
    });
  }

  enrichAddress(address: Address, pickupAtStore?: boolean) {
    this.address = address;
    this.pickupAtStore = pickupAtStore;
  }

  enrichUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }
}
