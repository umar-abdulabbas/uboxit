import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Address } from '../../../core/domain/address';
import { PaymentService } from '../../payment/services/payment-service';
import { StorageService } from '../../../shared/services/storage-service';
import {} from '@types/googlemaps';
import Animation = google.maps.Animation;
import { CartService } from '../services/cart.service';

export class AddressList {
  id: string;
  name: string;
  address: string;
  housenumber: string;
  city: string;
  postalcode: string;
  email: string;
  phone: string;
  checked: string;
}

const ADDRESSLIST: AddressList[] = [
  {
    id: '004',
    name: 'Pickup at Store',
    address: 'Augustinuspark ',
    housenumber: '14',
    city: 'Amstelveen',
    postalcode: '1185CN',
    email: 'connect@uboxit.com',
    phone: '0645433592',
    checked: ''
  }
];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {
  addressList = ADDRESSLIST;
  public isActiveNewForm = false;
  public isActiveRadio;
  public valueSelcted;
  addressModel: Address = <Address>{};
  userModel: any = {};

  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  displayMap: boolean;

  private pickupAtStoreUpdatedToCart = false;

  @Output() addressUpdated = new EventEmitter<boolean>();
  @Output() newAddressSelected = new EventEmitter<boolean>();
  @Output() existingAddressSelected = new EventEmitter<boolean>();
  @Output() previousStepRequested = new EventEmitter<boolean>();

  constructor(private paymentService: PaymentService,
              private storageService: StorageService,
              private cartService: CartService) {
  }

  ngOnInit() {
    this.addressModel = this.storageService.getDeliveryAddress();
    this.userModel = this.storageService.getDeliveryContact();
    this.valueSelcted = this.storageService.getDeliveryAddressType();
  }

  showNewForm(checked: string) {
    console.log(this.isActiveNewForm);
    this.isActiveNewForm = !this.isActiveNewForm;
    console.log(checked);
    this.isActiveRadio = checked;
    this.isActiveRadio = !this.isActiveRadio;

    this.newAddressSelected.emit(true);
  }

  radioSelect(id: string) {
    this.addressList.filter(i => i.id !== id).forEach(i => i.checked = '');
    const addressCheck = this.addressList.find(i => i.id === id);
    addressCheck.checked = 'checked';

    this.existingAddressSelected.emit(true);
  }

  loadMap() {
    this.displayMap = !this.displayMap;
    const mapProp = {
      center: new google.maps.LatLng(52.2924628, 4.8586759),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProp);

    const location = new google.maps.LatLng(52.2924628, 4.8586759);

    const marker = new google.maps.Marker({
      position: location,
      animation: Animation.DROP,
      map: this.map
    });
  }

  selectDeliveryMode(data) {
    console.log(data);
    if (this.cartService.isDeliveryChargesApplicable()) {
      if (data === '1') {
        this.cartService.updateCart(this.cartService.cartId, {pickupAtStore: true}).subscribe(() => {
            console.log('no delivery charges');
            this.pickupAtStoreUpdatedToCart = true;
          },
          () => {
            console.log('error');
          });
      } else if (data === '2') {
        this.cartService.updateCart(this.cartService.cartId, {pickupAtStore: false}).subscribe(() => {
            console.log('delivery charges');
          },
          () => {
            console.log('error');
          });
      }
    }
  }

  addAddress() {
    if (this.valueSelcted === '1' && !this.pickupAtStoreUpdatedToCart) {
      this.cartService.updateCart(this.cartService.cartId, {pickupAtStore: true}).subscribe(() => {
          this.pickupAtStoreUpdatedToCart = true;
        },
        () => {
        }, () => {
          this.navigateToPayment();
        });
    } else {
      this.navigateToPayment();
    }
  }

  showPreviousStep() {
    this.previousStepRequested.next(true);
  }

  private navigateToPayment() {
    this.storageService.storeDeliveryAddress(this.addressModel, this.valueSelcted);
    this.storageService.storeDeliveryContact(this.userModel);

    this.paymentService.enrichAddress(this.addressModel, this.valueSelcted === '1');
    this.paymentService.enrichUserDetails(this.userModel);

    this.addressUpdated.emit(true);
  }


}
