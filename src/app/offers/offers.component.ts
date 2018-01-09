import { Component, OnInit, Injectable, Output, EventEmitter} from '@angular/core';
import { Offer } from '../shared/offers/offer';
import { OfferService } from '../shared/offers/offer.service';
export class cType{
  ctype:string
}
@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
 
})
export class OffersComponent implements OnInit {
  offers: Offer[];
  active:boolean = true;
  public body;
  activeyes:boolean = true;
  isActivedetails:boolean = true;
  isActiveingredients:boolean = false;
  selectedOffer: Offer;
  animation:boolean = false;
  constructor(private offerService:OfferService) {
    
  }

  ngOnInit() {
     this.body = document.getElementsByTagName('body')[0]; //top stop the scroll window
     this.getOffers();
  }
  getOffers():void{
   //this.offerService.getOffers1().subscribe(offers => this.offers = offers.offers);
   // this.offerService.getOffers2().subscribe(offers => this.offers = offers);
    this.offerService.getOffers2().subscribe(offers => this.offers = offers.offers);
   // this.offerService.getOffers().subscribe( (o) => console.log(o));
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
    this.activeyes = true;
    this.isActivedetails = true;
    this.isActiveingredients = false;


  }
  openingredients():void{

    this.activeyes = false;
    this.isActivedetails = false;
    this.isActiveingredients = true;
  }
  modelclose(event):void{ 
    //This Function is used to close the Model Window on clicking outstide of the screen.
    this.active = event;
    this.body.classList.remove("body-overflow");
}

}
