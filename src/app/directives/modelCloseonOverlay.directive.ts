import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
  selector: '[appModelCloseOnOverlay]'
})

export class ModelCloseOverlayDirective {

  @Output()
  modelClose = new EventEmitter();

  constructor(private el: ElementRef) {

  }

  @HostListener('click')
  onClick() {
    this.modelClose.emit(false);
  }
}
