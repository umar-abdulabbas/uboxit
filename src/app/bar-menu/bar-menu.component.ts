import { Component, OnInit, HostListener} from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  public barFixed:boolean = false;
  constructor() { }

  ngOnInit() {
  }

  @HostListener("window:scroll",['$event']) 
  onWindowScroll($event){
    console.log($event);
    let headerScroll = window.scrollY;
    if (headerScroll > 120 ){
      this.barFixed = true;
     
    }
    else if(this.barFixed && headerScroll < 5 ){
      this.barFixed = false;
    }
   
}

}
