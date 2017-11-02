import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-makeyourcombo-offer',
  templateUrl: './makeyourcombo-offer.component.html',
  styleUrls: ['./makeyourcombo-offer.component.css'],
  outputs:['selectedStarter','selectedMainDish', 'selectedDessert']
})
export class MakeyourcomboOfferComponent implements OnInit {
 
  selectedStarter:EventEmitter<any> = new EventEmitter<any>();
  selectedMainDish:EventEmitter<any> = new EventEmitter<any>();
  selectedDessert:EventEmitter<any> = new EventEmitter<any>();
 
  isActivestarters:boolean = true;
  isActiveMainDish:boolean;
  isActiveDessert:boolean;
  constructor() { }

  ngOnInit() {
  }

  onselectedValue(value:string):void{
      console.log(value);
      this.selectedStarter.emit(value);
      this.isActivestarters = false;
      this.isActiveMainDish = true;
     
  }
  onselectedMainDish(value:string):void{
    console.log(value);
    this.selectedMainDish.emit(value);
    this.isActiveMainDish = false;
    this.isActiveDessert = true;
  }
  onselectedDessert(value:string):void{
    console.log(value);
    this.selectedDessert.emit(value);
   
  }

  outputsstartersshow(event){
    console.log(event);
    this.isActivestarters = event;
  }
 
}
