import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { CounterService } from './counter.service';

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

  constructor( private el: ElementRef, private counterService: CounterService) { }

  increment(){
      this.counterValue++;
      this.incdecCounter.emit("plus");
      this.counterChange.emit({
        value:this.counterValue
      });
      this.isActiveCounter = true; this.isActiveCart = false;

      this.counterService.add();
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

    this.counterService.reduce();
  }


  ngOnInit() {
  }
  addtoCart():void{
      this.counterValue = 1;
      this.isActiveCounter = true; this.isActiveCart = false;
  }

}
