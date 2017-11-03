import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.css']
})
export class AddToCartCounterComponent implements OnInit {
  @Input() counterValue = 0;
  @Output('change') counterChange = new EventEmitter();
  isActiveCart:boolean = true; 
  isActiveCounter:boolean;
  constructor( private el:ElementRef) { }
  increment(){
     
      this.counterValue++;
      this.counterChange.emit({
        value:this.counterValue
      })
  }
  decrement()
  {
    console.log(this.counterValue);
    
    if(this.counterValue == 1){
      this.isActiveCounter = false; 
      this.isActiveCart = true;
    }
    else{
      this.counterValue--;
      this.counterChange.emit({
      value:this.counterValue
    })
    }
  }
 

  ngOnInit() {
  }
  addtoCart():void{
      this.counterValue = 1;
      this.isActiveCounter = true; this.isActiveCart = false;
  } 

}
