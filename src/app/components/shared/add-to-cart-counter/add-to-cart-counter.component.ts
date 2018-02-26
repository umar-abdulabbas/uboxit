import { Component, OnInit, Input, OnDestroy, EventEmitter, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { CounterService } from '../../../shared/services/InteractionCounter/counter';

@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.scss'],

})
export class AddToCartCounterComponent implements OnInit, OnDestroy {
  @Input() counterValue = 0;
  @Input() showAddToCartWhenZero = true; // on the cart page, when count reduced to zero no need to change the button to 'add to cart'

  @Output() updatedCount = new EventEmitter<number>();

  isActiveCart = true;
  isActiveCounter: boolean;
  findCurrentShopPath = true;
  findCurrentMCPath = false;
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
    const findcurrentpath = location.pathname.split('/').pop();
    if (findcurrentpath === 'shoppingcart') {
      this.findCurrentShopPath = false;
    }
    if (findcurrentpath === 'makeyourcombo') {
      this.findCurrentMCPath = true;
    }
    if (!!this.counterValue) {
      this.isActiveCounter = true;
      this.isActiveCart = false;
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
