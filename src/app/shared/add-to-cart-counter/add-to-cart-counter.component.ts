import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CounterService } from '../services/InteractionCounter/counter';
@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.css'],
  
})
export class AddToCartCounterComponent implements OnInit, OnDestroy {
  @Input() counterValue = 0;
  isActiveCart:boolean = true; 
  isActiveCounter:boolean;
  retrieveCounterValue:any = {
    count: 0 
  };
  subscription:Subscription;
  constructor(private counterService:CounterService ) { 
      this.subscription = this.counterService.getCountInfo().subscribe(retrieveCounterValue => { this.retrieveCounterValue = retrieveCounterValue}); 
  }
  increment(){
      this.counterValue++;
      this.counterService.updateCount(this.retrieveCounterValue.count + 1 );
      this.isActiveCounter = true; this.isActiveCart = false;
  }
  decrement()
  {
    if(this.counterValue == 1){      
      this.isActiveCounter = false; 
      this.isActiveCart = true;
      this.counterValue--;
      this.counterService.updateCount(this.retrieveCounterValue.count - 1 );
    }
    else{
      this.counterValue--;
      this.counterService.updateCount(this.retrieveCounterValue.count - 1 );
    }
  }
 

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
  addtoCart():void{
      this.counterValue = 1;
      this.isActiveCounter = true; this.isActiveCart = false;
  } 

}
