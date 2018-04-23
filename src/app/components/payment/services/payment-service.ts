import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../../personal/services/login-service';
import { PlatformLocation } from '@angular/common';
import { Address } from '../../../core/domain/address';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';
import { StorageService } from '../../../shared/services/storage-service';
import { CartService } from '../../shoppingcart/services/cart.service';
import { Observable } from 'rxjs/Observable';
import { Cart } from '../../../core/domain/cart';

@Injectable()
export class PaymentService {

  private readonly origin: string;
  private address: Address;
  private pickupAtStore: boolean;
  private userDetails: any;
  private cartId: string;

  private pickupAtStoreUpdatedToCart = false;

  constructor(private http: HttpClient,
              private loginService: LoginService, // LOGIN FEATURE
              private platformLocation: PlatformLocation,
              private storageService: StorageService,
              private cartService: CartService) {
    this.origin = (this.platformLocation as any).location.origin;
  }

  initiatePayment(cartId: string) {
    this.cartId = cartId;
    // if shopping cart is loaded directly (in case of retry other payment during error), we can take it from local storage
    if (!this.userDetails) {
      this.userDetails = this.storageService.getDeliveryContact();
    }
    if (!this.address) {
      this.address = this.storageService.getDeliveryAddress();
    }

    return this.updateCartWithDeliveryMode().switchMap(() => this.createOrder());
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

  private updateCartWithDeliveryMode() {
    let cartUpdateObservable = Observable.of(<Cart>{});
    if (this.cartService.isDeliveryChargesApplicable()) {
      if (this.pickupAtStore) {
        cartUpdateObservable = this.cartService.updateCart(this.cartId, {pickupAtStore: true});
        this.pickupAtStoreUpdatedToCart = this.pickupAtStore;
      } else if (this.pickupAtStoreUpdatedToCart) { // means already initiated payment without delivery charge & changed address now. so update it again
        cartUpdateObservable = this.cartService.updateCart(this.cartId, {pickupAtStore: false});
        this.pickupAtStoreUpdatedToCart = this.pickupAtStore;
      }
    }
    return cartUpdateObservable;
  }

  private createOrder() {
    const request = {
      'shopId': this.cartId,
      'customerName': this.userDetails.name,
      'returnurl': `${this.origin}/finish?cartId=${this.cartId}`,
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
}
