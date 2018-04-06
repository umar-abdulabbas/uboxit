import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from './shared/services/storage-service';
import { LoginService } from './components/personal/services/login-service';
import { UserExpStyleService } from './shared/UI/globalUI.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerFixed = false;
  // public uboxitMenu = false;
  public showMobile: boolean;
  constructor(private storageService: StorageService, private loginService: LoginService, private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.loginService.getUser(this.storageService.getUser());
    this.showMobile = this.uistyleservice.getDeviceInformation();
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
  madeforyou() {
    this.showMobile = false;
  }
  
}
