import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CounterService } from '../services/InteractionCounter/counter';

@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.css'],

})
export class AddToCartCounterComponent implements OnInit, OnDestroy {
  @Input() counterValue = 0;

  @Output() updatedCount = new EventEmitter<number>();

  isActiveCart = true;
  isActiveCounter: boolean;
  findCurrentShopPath:boolean = true;
  findCurrentMCPath:boolean = false;
  retrieveCounterValue: any = {
    count: 0
  };
  subscription: Subscription;

  constructor(private counterService: CounterService) {
    this.subscription = this.counterService.getCountInfo().subscribe(retrieveCounterValue => {
      this.retrieveCounterValue = retrieveCounterValue;
    });
  }

  increment() {
    this.counterValue++;
    this.isActiveCounter = true;
    this.isActiveCart = false;
    this.updatedCount.emit(this.counterValue);
  }

  decrement() {
    if (this.counterValue === 1) {
      this.isActiveCounter = false;
      this.isActiveCart = true;
    }
    this.counterValue--;
    this.updatedCount.emit(this.counterValue);
  }


  ngOnInit() {
    let findcurrentpath = location.pathname.split('/').pop();
    if(findcurrentpath === "shoppingcart"){
        this.findCurrentShopPath = false;
      } 
    if(findcurrentpath === "makeyourcombo"){
        this.findCurrentMCPath = true; 
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  addtoCart(): void {
    this.counterValue = 1;
    this.isActiveCounter = true;
    this.isActiveCart = false;
  }
 
}
