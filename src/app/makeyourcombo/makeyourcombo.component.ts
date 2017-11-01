import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';

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
  public uboxitMenu:boolean = false;
  public starters = "starters";
  constructor( ) { 
     
  }
  
  ngOnInit() {
    
    
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");


  }
    stickyHeaderValue(scrolValue){
    if (scrolValue > 20 ){
        this.uboxitMenu = true;  
    }
    else if(this.uboxitMenu && scrolValue < 5 ){
        this.uboxitMenu = false; 
    } 
   

  }
   showSelectedValue(value){
        this.starters = value;
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


