import { Directive, ElementRef, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[stickyHeader]'
})

export class StickyHeaderDirective {

  @Output()
  stickyHeaderValue = new EventEmitter();

  constructor(private el: ElementRef) {

  }

  @HostListener('window:scroll', ['$events'])
  onWindowScroll($event) {
    this.el.nativeElement = window.scrollY;

    this.stickyHeaderValue.emit(this.el.nativeElement);
  }
}
