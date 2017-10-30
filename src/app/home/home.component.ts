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
  
  @HostListener("window:scroll",['$events']) 
  onWindowScroll($event){
    let headerScroll = window.scrollY;
  
    if(headerScroll > 330 ){
      this.uboxitMenu = true;
      //this.headerFixed = false;
    }
    else if(this.uboxitMenu && headerScroll < 200 ){
      this.uboxitMenu = false;
    }
}
}
