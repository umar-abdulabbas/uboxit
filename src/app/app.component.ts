import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from './shared/services/storage-service';
import { LoginService } from './components/personal/services/login-service';
import { UserExpStyleService } from './shared/UI/globalUI.service';
import { NgxCarousel } from 'ngx-carousel';
import { Router, NavigationStart } from '@angular/router';
import { ReferenceDataService } from './shared/services/reference-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerFixed = false;
  public checkNavigationStart;
  public showMobile: boolean;
  public carouselTileTwo: NgxCarousel;
  public carouselOne: NgxCarousel;
  public greet;

  showPromo = false;

  constructor(private storageService: StorageService, private loginService: LoginService,
              private uistyleservice: UserExpStyleService, private router: Router,
              private referenceDataService: ReferenceDataService) {
    router.events
      .filter(event => event instanceof NavigationStart)
      .subscribe((val) => {
        this.checkNavigationStart = val;
          if (['/home', '/choices', '/makeyourcombo'].includes(this.checkNavigationStart.url) && this.showMobile) {
          this.showMobile = true;
          console.log(this.checkNavigationStart.url);
        }  else {
          this.showMobile = false;
        }
      });
  }

  async ngOnInit() {
    await this.referenceDataService.getReferenceData();
    this.showMobile = this.uistyleservice.getDeviceInformation();
    const myDate = new Date();
    const hrs = myDate.getHours();
    if (hrs < 12) {
      this.greet = 'Good Morning';
    } else if (hrs >= 12 && hrs <= 17) {
      this.greet = 'Good Afternoon';
    } else if (hrs >= 17 && hrs <= 24) {
      this.greet = 'Good Evening';
    }
    this.loginService.getUser(this.storageService.getUser());
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
            transform:scale(1.2);
        }
        `
      },
      load: 2,
      touch: true,
      loop: true,
      custom: 'banner'
    };

    this.carouselTileTwo = {
      grid: {xs: 1, sm: 3, md: 4, lg: 6, all: 230},
      speed: 600,
      interval: 3000,
      point: {
        visible: false
      },
      load: 2,
      touch: true
    };

  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 50) {
      this.headerFixed = true;
    } else if (this.headerFixed && scrolValue < 5) {
      this.headerFixed = false;
    }
  }

  ngOnDestroy() {
    this.storageService.clearUser();
  }

  public myfunc(event: Event) {
    // carouselLoad will trigger this funnction when your load value reaches
    // it is helps to load the data by parts to increase the performance of the app
    // must use feature to all carousel
  }

  onmoveFn(data) {
    // console.log(data);
  }

  showMenu(url: string) {
    this.showMobile = false;
    if (url === 'home') {

    } else {
      this.router.navigateByUrl('/' + url);

    }
  }

}

