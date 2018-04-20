import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-to-cart-counter',
  templateUrl: './add-to-cart-counter.component.html',
  styleUrls: ['./add-to-cart-counter.component.scss'],

})
export class AddToCartCounterComponent {
  @Input() counterValue = 0;
  @Input() showEnlarged = false;

  @Output() updatedCount = new EventEmitter<number>();

  increment() {
    this.counterValue++;
    this.updatedCount.emit(this.counterValue);
  }

  decrement() {
    this.counterValue--;
    this.updatedCount.emit(this.counterValue);
  }
}
