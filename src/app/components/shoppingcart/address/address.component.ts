import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Address } from '../../../core/domain/address';
import { PaymentService } from '../../payment/services/payment-service';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';

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

// const ADDRESSLIST: AddressList[] = [
//   { id: '001', name: 'Umar Abbas', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: 'checked' },
//   { id: '002', name: 'Prabhu', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: '' },
//   { id: '003', name: 'Malai', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: '' },
//   { id: '004', name: 'Pickup at Store', address: 'Augustinuspark ', housenumber: '14', city: 'Amstelveen', postalcode: '1185CN', email: 'connect@uboxit.com', phone: '0645433592', checked: '' }
// ];

const ADDRESSLIST: AddressList[] = [
  { id: '004', name: 'Pickup at Store', address: 'Augustinuspark ', housenumber: '14', city: 'Amstelveen', postalcode: '1185CN', email: 'connect@uboxit.com', phone: '0645433592', checked: '' }
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

  addressModel: Address = <Address>{};
  userModel: any = {};

  @Output() addressUpdated = new EventEmitter<boolean>();
  @Output() newAddressSelected = new EventEmitter<boolean>();
  @Output() existingAddressSelected = new EventEmitter<boolean>();
  @Output() previousStepRequested = new EventEmitter<boolean>();

  constructor(private p: PaymentService) { }

  ngOnInit() {
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
    const addressCheck = this.addressList.find(i => i.id === id );
    addressCheck.checked = 'checked';

    this.existingAddressSelected.emit(true);
  }

  addAddress() {
    // validation to be done
    console.log('added address');
    console.log(this.addressModel);
    console.log(this.userModel);

    this.p.enrichAddress(this.addressModel);
    this.p.enrichUserDetails(this.userModel);

    this.addressUpdated.emit(true);
  }

  showPreviousStep() {
    this.previousStepRequested.next(true);
  }
}
