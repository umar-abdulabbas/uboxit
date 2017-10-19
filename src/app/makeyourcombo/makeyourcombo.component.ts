import { Component, OnInit, OnDestroy } from '@angular/core';

//import { OffersComponent } from '../offers/offers.component';
@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.css']
})
export class MakeyourcomboComponent implements OnInit, OnDestroy{
  public headerColor;
  isLinear = false;
  

  constructor() { }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");

  }
  ngOnDestroy(){
    this.headerColor.classList.remove("headerFixedShoppingCard");
  }

  left():void{
  // https://codepen.io/mahish/pen/RajmQw?q=scroll+menu+&limit=all&type=type-pens
  }
  right():void{

  }
}
