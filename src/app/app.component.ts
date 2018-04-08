import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from './shared/services/storage-service';
import { LoginService } from './components/personal/services/login-service';
import { UserExpStyleService } from './shared/UI/globalUI.service';
import { NgxCarousel } from 'ngx-carousel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerFixed = false;
  public showMobile: boolean; //Show to Mobile or Desktop
  public advertDoNotShow = true; // Advertisment not show for Destkop, when onChange Event Fired
  constructor(private storageService: StorageService, private loginService: LoginService, private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.loginService.getUser(this.storageService.getUser());
    this.showMobile = this.uistyleservice.getDeviceInformation();
    if( ['terms', 'privacy', 'about', 'contact'].includes(this.uistyleservice.getPathURL())){
      this.showMobile = false;
      this.advertDoNotShow = false; 
    }
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

  public onChange(event: string) {
    this.advertDoNotShow = false; 
    if (event === 'Combo'){
      this.showMobile = false;
    }
    if (event === 'Make Your Combo'){

    }
    if (event === 'Choices'){
      
    }
  }

onmoveFn(data) {
    // console.log(data);
  }



}

