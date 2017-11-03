import { Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core'
@Directive({
    selector:'[modelCloseOnOverlay]',
    outputs:['modelClose']
})

export class modelCloseOverlay{
    modelClose = new EventEmitter();
    constructor(private el: ElementRef){

  }
  
  @HostListener('click') onClick() {
    this.modelClose.emit(false);
  }
  

}
