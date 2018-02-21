import { Component, OnInit } from '@angular/core';
export class AddressList{
    id:string;
    name:string;
    
    
}
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
