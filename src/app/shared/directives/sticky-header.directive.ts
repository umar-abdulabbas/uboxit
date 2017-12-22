import { Directive, ElementRef, HostListener, Output, EventEmitter} from '@angular/core'

@Directive({
    selector:'[stickyHeader]',
    outputs:['stickyHeaderValue']
})

export class stickyHeaderDirective{
  stickyHeaderValue = new EventEmitter();
  constructor(private el: ElementRef){
   
  }
  
  
   @HostListener("window:scroll",['$events']) 
    onWindowScroll($event){
       this.el.nativeElement = window.scrollY;

      this.stickyHeaderValue.emit(this.el.nativeElement);

      
  }

} 

