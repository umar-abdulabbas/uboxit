import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
export class banner{
  id:string;
  imageurl:string;
  caption:string;
  
}
const BANNERS:banner[] = [
  {id:"1", imageurl:"assets/images/heroBanner.jpeg", caption:"Order delicious food online!"},
  {id:"2", imageurl:"assets/images/banner2.jpg", caption:"Make your own box!"},
  {id:"3", imageurl:"assets/images/banner3.jpg", caption:"Authentic Food"},
  {id:"4", imageurl:"assets/images/heroBanner.jpg", caption:"Lets ring in the festivities "},
  
];
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {
  banners = BANNERS;
  public carouselOne: NgxCarousel;
  constructor() { }

  ngOnInit() {
     this.carouselOne = {
      grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
      slide: 1,
      speed: 400,
      interval: 4000,
      point: {
        visible: true,
        pointStyles: `
        .ngxcarouselPoint {
            list-style-type: none;
            text-align: center;
            padding: 12px;
            margin: 0;
            white-space: nowrap;
            overflow: auto;
            position: absolute;
            width: 100%;
            bottom: 20px;
            left: 0;
            box-sizing: border-box;
          }
          .ngxcarouselPoint li {
            display: inline-block;
            border-radius: 999px;
            background: rgba(255, 255, 255, 0.55);
            padding: 5px;
            margin: 0 3px;
            transition: .4s ease all;
            cursor:pointer;
          }
          .ngxcarouselPoint li.active {
              background: #ff675c;
              width: 20px;
          }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    }
  }
 public myfunc(event: Event) {
     // carouselLoad will trigger this funnction when your load value reaches
     // it is helps to load the data by parts to increase the performance of the app
     // must use feature to all carousel
  }
}
