import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../../personal/services/login-service';
import { PlatformLocation } from '@angular/common';
import { Address } from '../../../core/domain/address';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';
import { StorageService } from '../../../shared/services/storage-service';
import { GenericService } from '../../../core/services/generic-service';

@Injectable()
export class PaymentService {

  private readonly origin: string;
  private address: Address;
  private pickupAtStore: boolean;
  private userDetails: any;

  constructor(private http: HttpClient,
              private loginService: LoginService, // LOGIN FEATURE
              private platformLocation: PlatformLocation,
              private storageService: StorageService,
              private genericService: GenericService) {
    this.origin = (this.platformLocation as any).location.origin;
  }

  initiatePayment(cartId: string) {
    // if shopping cart is loaded directly (in case of retry other payment during error), we can take it from local storage
    if (!this.userDetails) {
      this.userDetails = this.storageService.getDeliveryContact();
    }
    if (!this.address) {
      this.address = this.storageService.getDeliveryAddress();
    }

    return this.createOrder(cartId);
  }

  finalizePayment(paymentPayload: string, cartId: string, payInPerson: boolean) {
    const request = {shopId: cartId};
    if (paymentPayload) {
      request['paymentPayload'] = paymentPayload;
    } else if (payInPerson) {
      request['payInPerson'] = payInPerson;
    }
    return this.http.post('/order-api/order/finalizeTransaction', request);
  }

  enrichAddress(address: Address, pickupAtStore?: boolean) {
    this.address = address;
    this.pickupAtStore = pickupAtStore;
  }

  enrichUserDetails(userDetails: any) {
    this.userDetails = userDetails;
  }

  isValidForPayment() {
    return !!this.address && !!this.userDetails;
  }

  isPickUpAtStore() {
    return this.pickupAtStore;
  }

  private createOrder(cartId: string) {
    const request = {
      'shopId': cartId,
      'customerName': this.userDetails.name,
      'returnurl': `${this.origin}/finish?cartId=${cartId}`,
      'origin': this.origin,
      'emailId': this.userDetails.email,
      'mobileNumber': this.makePhoneNumberProper(this.userDetails.phone.toString()),
      'channel': this.genericService.getMobileChannel()
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

  private makePhoneNumberProper(phoneNumber: string) {
    if (phoneNumber.charAt(0) === '0') {
      phoneNumber = phoneNumber.substring(1);
    }
    return '+31' + phoneNumber;
  }
}
