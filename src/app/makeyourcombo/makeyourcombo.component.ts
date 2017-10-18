import { Component, OnInit, OnDestroy } from '@angular/core';
//import { OffersComponent } from '../offers/offers.component';
@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.css']
})
export class MakeyourcomboComponent implements OnInit, OnDestroy{
  public headerColor;
  constructor() { }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");
  }
  ngOnDestroy(){
    this.headerColor.classList.remove("headerFixedShoppingCard");
  }
}
