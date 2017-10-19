import { Component, OnInit, OnDestroy, Injectable} from '@angular/core';

//import { OffersComponent } from '../offers/offers.component';



@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.css'],
   
})
export class MakeyourcomboComponent implements OnInit, OnDestroy{
  public headerColor;
  public MenuContainerWidth;
  public itemLengthid;
  isLinear = false;
   
 public x:any;
  constructor( ) { 
     
  }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");

    this.MenuContainerWidth = document.getElementById('MenuWrapper');
    let width = window.getComputedStyle(this.MenuContainerWidth, null).getPropertyValue('width'); 
    console.log(width);
    
   let ItemLengtth = document.getElementsByClassName('item').length; 
    console.log(ItemLengtth);   
   
    let itemSize = document.getElementsByClassName('item')[0].clientWidth;
     console.log(itemSize);   
  }
  ngOnDestroy(){
    this.headerColor.classList.remove("headerFixedShoppingCard");
  }
   
  left():void{
  // https://codepen.io/mahish/pen/RajmQw?q=scroll+menu+&limit=all&type=type-pens
  }
  right():void{

  }
  //this.greeter = new Greeter("world", 6);
 // console.log(greeter.greet());
 // this.greeter.Greeter("World", 6);

}


