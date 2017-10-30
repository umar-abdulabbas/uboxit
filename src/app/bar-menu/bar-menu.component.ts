import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  public barFixed:boolean = false;
   @Output() showBanner:EventEmitter<boolean> = new EventEmitter<boolean>();
   @Output() donotshowBanner:EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }

  donotshowBanneron():void{
    this.showBanner.emit(false);
  }
  showBanneron():void{
    this.showBanner.emit(true);
  }


}
