import { Directive, ElementRef, HostListener,Input, Output, EventEmitter} from '@angular/core';

@Directive({
    selector:'[counter]',
    outputs:['CounterValue','plus', 'minus']
})

export class counter {
    @Input() counterDefaultValue = 0;
    counterValue = new EventEmitter();
    plus = new EventEmitter();
    minus = new EventEmitter();

    constructor( private el:ElementRef) { }
    increment() {
        this.plus.emit(this.counterDefaultValue++);
        this.counterValue.emit({
          value: this.counterValue
        })
      }
      decrement() {
        this.minus.emit(this.counterDefaultValue--);
        this.counterValue.emit({
          value: this.counterValue
        })
      }

}