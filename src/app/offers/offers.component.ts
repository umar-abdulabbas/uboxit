import { Component, OnInit } from '@angular/core';
export class Offer{
  id:string;
  image:string;
  title:string;
  anySpecTitle:string;
  types:string;
  price:string;
  favourite:string;
}

const OFFERS:Offer[] = [
    {id:"1", image:"assets/images/banner1.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"2", image:"assets/images/banner2.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"3", image:"assets/images/banner3.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"4", image:"assets/images/banner4.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"5", image:"assets/images/banner1.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"6", image:"assets/images/banner2.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"7", image:"assets/images/banner3.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
    {id:"8", image:"assets/images/banner4.jpg", title:"Rajma Chawal", anySpecTitle:"Meal of the day", types:"Indian", price:"100", favourite:"5"},
];
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers = OFFERS;
  active:boolean = true;
  public body;
  details:boolean = false;
  ingredients:boolean = true;
  
  selectedOffer: Offer; 
  constructor() { }
 
  ngOnInit() {
     this.body = document.getElementsByTagName('body')[0]; //top stop the scroll window
    
  }
  onSelect(offer:Offer):void{
    console.log(offer);
    this.selectedOffer = offer;
    this.body.classList.add("body-overflow");
  }
  close():void{
      this.active = false;
      this.body.classList.remove("body-overflow");
  }
  opendetails():void{
      
    this.ingredients = true;
    this.details = false;
    
  }
  openingredients():void{
    this.details = true;
    this.ingredients = false;
   
  }
}
