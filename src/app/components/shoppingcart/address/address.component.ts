import { Component, OnInit } from '@angular/core';

export class AddressList{
    id: string;
    name: string;
    address: string;
    housenumber: string;
    city: string;
    postalcode:string
    email: string;
    phone: string;    
}

const ADDRESSLIST: AddressList[] = [ 
  { id: '001', name: 'Umar Abbas', address:'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode:'1185SK', email: 'umar432@gmail.com', phone: '0649668445' },
  { id: '002', name: 'Prabhu', address:'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode:'1185SK', email: 'umar432@gmail.com', phone: '0649668445' },
  { id: '003', name: 'Malai', address:'Populierenlaan', housenumber: '219', city: 'Amstelveen', postalcode:'1185SK', email: 'umar432@gmail.com', phone: '0649668445' }
];

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  addressList = ADDRESSLIST;
  public isActiveNewForm = false;
  constructor() { }

  ngOnInit() {
  }
  showNewForm() {
    console.log(this.isActiveNewForm);
    this.isActiveNewForm = !this.isActiveNewForm;
  }
}
