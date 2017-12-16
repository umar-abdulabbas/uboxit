import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.css'],
  outputs:['counterChange','incdecCounter']
})
export class AddToCartCounterComponent implements OnInit {
  @Input() counterValue = 0;
  counterChange = new EventEmitter();
  incdecCounter = new EventEmitter();
  isActiveCart:boolean = true; 
  isActiveCounter:boolean;
  constructor( private el:ElementRef) { }
  increment(){
      this.counterValue++;
      this.incdecCounter.emit("plus");
      this.counterChange.emit({
        value:this.counterValue
      });
      this.isActiveCounter = true; this.isActiveCart = false;
  }
  decrement()
  {
    console.log(this.counterValue);
    
    if(this.counterValue == 1){
      console.log("y");
      
      this.isActiveCounter = false; 
      this.isActiveCart = true;
      this.counterValue--;
      this.incdecCounter.emit("minus");
      console.log(this.counterValue);
    }
    else{
      console.log("n");
      this.counterValue--;
      this.incdecCounter.emit("minus");
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
