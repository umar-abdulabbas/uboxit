import { Component, OnInit } from '@angular/core';
import { NgxCarousel } from 'ngx-carousel';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

@Component({
  selector: 'app-advertisement',
  templateUrl: './advertisement.component.html',
  styleUrls: ['./advertisement.component.scss']
})
export class AdvertisementComponent implements OnInit {
  public carouselOne: NgxCarousel;
  constructor(private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
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
          position: relative!important;
          top: -50px;
        }
        .ngxcarouselPoint li {
          display: inline-block;
          border-radius: 999px;
          background:#fff;
          padding: 5px;
          margin: 0 3px;
          transition: .4s ease all;
        }
        .ngxcarouselPoint li.active {
            background:#FF655A;
            width: 10px;
            transform:scale(1.8);
        }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };
  }
  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
 }

}
