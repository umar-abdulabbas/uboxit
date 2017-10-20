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
    
    let padLeft = document.getElementById('LeftPad');
    let widthpadLeft = window.getComputedStyle(padLeft, null).getPropertyValue('width'); 
    console.log(widthpadLeft);

    let rightPad = document.getElementById('rightPad');
    let widthrightPad = window.getComputedStyle(padLeft, null).getPropertyValue('width'); 
    console.log(widthrightPad);


    let ItemLengtth = document.getElementsByClassName('item').length; 
    console.log(ItemLengtth);   
   
    let itemSize = document.getElementsByClassName('item')[0];
    let widthElem = window.getComputedStyle(itemSize, null).getPropertyValue('width'); 
    console.log(widthElem);   

    function findMenuItemLength(classNames){
        let ItemLengtth = document.getElementsByClassName(classNames).length; 
        //return console.log(ItemLengtth);
        var storeValue = [];
        function getSum(total, num) {
            return total + num;
        }
        for(let i=0; i < ItemLengtth; i++){
          let count:any = 0;
          let totalWidth =  document.getElementsByClassName('item')[i];
          let widthElem = window.getComputedStyle(itemSize, null).getPropertyValue('width');
          var reg = widthElem.replace('px','');    
          storeValue.push(reg);
        }
        var b = storeValue.map(Number);  
       // console.log(b);
        return b.reduce(getSum);
    }
     var z =  findMenuItemLength('item'); 
    console.log(z);

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


