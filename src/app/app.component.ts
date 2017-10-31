import { Component, Inject, HostListener, Input, OnInit,  OnDestroy  } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit, OnDestroy {
  public headerFixed:boolean = false;
  public uboxitMenu:boolean = false;
  showBanner:boolean = true;
 
  public findCurrentPath;
  constructor(){

  }
  ngOnInit() {
     
  }
  onChangeBanner1(showBanner:boolean){
    console.log(showBanner);
    this.showBanner = showBanner;
  }
  onChangeBanner2(showBanner:boolean){
    console.log(showBanner);
    this.showBanner = showBanner;
  }
  ngOnDestroy() {  }
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
    else if(this.uboxitMenu && headerScroll < 200 ){
      this.uboxitMenu = false;
    }
  }

}
