import { Component, OnInit, OnDestroy} from '@angular/core';

import { DeliverTimeComponent} from '../deliver-time/deliver-time.component';
import { OrderedItemsComponent } from '../ordered-items/ordered-items.component';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit, OnDestroy {
  public headerColor;
  constructor() { }

  ngOnInit() {
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");
  }
  ngOnDestroy(){
    this.headerColor.classList.remove("headerFixedShoppingCard");
  }
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
}
