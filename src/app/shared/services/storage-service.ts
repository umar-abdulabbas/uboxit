import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { Cart } from '../../core/domain/cart';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Address } from '../../core/domain/address';

const USER_KEY = 'username';
const DELIVERY_ADDRESS_KEY = 'delivery_address';
const DELIVERY_ADDRESS_TYPE_KEY = 'delivery_address_type';
const DELIVERY_CONTACT_KEY = 'delivery_contact';

@Injectable()
export class StorageService {

  constructor(private localStorageService: LocalStorageService) {}

  storeUser(username: string) {
    this.set(USER_KEY, username);
  }

  storeDeliveryAddress(deliveryAddress: Address, addressType: string) {
    this.set(DELIVERY_ADDRESS_KEY, deliveryAddress);
    this.set(DELIVERY_ADDRESS_TYPE_KEY, addressType);
  }

  storeDeliveryContact(deliveryContact: any) {
    this.set(DELIVERY_CONTACT_KEY, deliveryContact);
  }

  getUser() {
    return this.localStorageService.get<string>(USER_KEY);
  }

  getDeliveryAddress(): Address {
    const address = <Address>this.localStorageService.get(DELIVERY_ADDRESS_KEY);
    return address ? address : <Address>{};
  }

  getDeliveryAddressType(): string {
    const addressType = <string>this.localStorageService.get(DELIVERY_ADDRESS_TYPE_KEY);
    return addressType ? addressType : '0';
  }

  getDeliveryContact() {
    const contact = <Address>this.localStorageService.get(DELIVERY_CONTACT_KEY);
    return contact ? contact : {};
  }

  clearUser() {
    this.localStorageService.remove(USER_KEY);
  }

  set(key: string, value: any) {
    this.localStorageService.set(key, value);
  }
}
