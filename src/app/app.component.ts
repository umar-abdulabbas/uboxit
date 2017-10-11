import { Component, Inject, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public headerFixed:boolean = false;
  public uboxitMenu:boolean = false;
  

  constructor(){

  }
  ngOnInit() {
   
  }

  @HostListener("window:scroll",['$events']) 
    onWindowScroll($event){
      let headerScroll = window.scrollY;
      if (headerScroll > 50 ){
        this.headerFixed = true;
      }
      else if(this.headerFixed && headerScroll < 5 ){
        this.headerFixed = false;
      }
      if(headerScroll > 330 ){
        this.uboxitMenu = true;
        //this.headerFixed = false;
      }
      else if(this.headerFixed && headerScroll < 200 ){
        this.uboxitMenu = false;
      }
  }

}
