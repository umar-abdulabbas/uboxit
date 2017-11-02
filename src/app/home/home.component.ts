import { Component, Inject, HostListener, Output, OnInit, EventEmitter }  from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public uboxitMenu:boolean = false;
  
  constructor() { }

  ngOnInit() {
      
  }
    stickyHeaderValue(scrolValue){
    if(scrolValue > 330 ){
      this.uboxitMenu = true;    
    }
    else if(this.uboxitMenu && scrolValue < 200 ){
      this.uboxitMenu = false;
    }
  }

}