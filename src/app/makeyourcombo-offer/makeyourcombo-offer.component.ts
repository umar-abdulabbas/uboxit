import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-makeyourcombo-offer',
  templateUrl: './makeyourcombo-offer.component.html',
  styleUrls: ['./makeyourcombo-offer.component.css'],
  outputs:['selectedValue']
})
export class MakeyourcomboOfferComponent implements OnInit {
  selectedValue:EventEmitter<any> = new EventEmitter<any>();
  
  constructor() { }

  ngOnInit() {
  }

  onselectedValue(value):void{
      this.selectedValue.emit(value);
     
  }

}
