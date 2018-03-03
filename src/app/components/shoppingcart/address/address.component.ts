import { Component, OnInit } from '@angular/core';
import { Address } from '../../../core/domain/address';
import { PaymentService } from '../../payment/services/payment-service';

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
  { id: '001', name: 'Umar Abbas', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: 'checked' },
  { id: '002', name: 'Prabhu', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: '' },
  { id: '003', name: 'Malai', address: 'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode: '1185SK', email: 'umar432@gmail.com', phone: '0649668445', checked: '' },
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

  constructor(private p: PaymentService) { }

  ngOnInit() {
  }

  showNewForm(checked: string) {
    console.log(this.isActiveNewForm);
    this.isActiveNewForm = !this.isActiveNewForm;
    console.log(checked);
    this.isActiveRadio = checked;
    this.isActiveRadio = !this.isActiveRadio;
  }

  radioSelect(id: string) {
    this.addressList.filter(i => i.id !== id).forEach(i => i.checked = '');
    const addressCheck = this.addressList.find(i => i.id === id );
    addressCheck.checked = 'checked';
  }

  addAddress() {
    console.log('added address');
    console.log(this.addressModel);
    console.log(this.userModel);

    this.p.enrichAddress(this.addressModel);
    this.p.enrichUserDetails(this.userModel);
  }
}
