import { Component, Inject, HostListener, Input, OnInit } from '@angular/core';
export class Offers{
    id:string;
    image:string;
    title:string;
    foodtype:string;
    rate:number;
}
const OFFERS: Offers[] =[
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
  { id:"1", image:"../../assets/images/indian-food-platter.jpg", title:"South Indian", foodtype:"Indian", rate:400},
]
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public headerFixed:boolean = false;
  public uboxitMenu:boolean = false;
  offers =OFFERS;
  @Input()
  backgroundColor
  constructor(){

  }
  ngOnInit() {
    this.backgroundColor = "blue"
  }

  @HostListener("window:scroll",['$event']) 
    onWindowScroll($event){
      let headerScroll = window.scrollY;
      if (headerScroll > 40 ){
        this.headerFixed = true;
      }
      else if(this.headerFixed && headerScroll < 5 ){
        this.headerFixed = false;
      }
      if(headerScroll > 270 ){
        this.uboxitMenu = true;
      }
      else if(this.headerFixed && headerScroll < 200 ){
        this.uboxitMenu = false;
      }
  }

}
