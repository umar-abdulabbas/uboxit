import { Component, OnInit, OnDestroy } from '@angular/core';
import { StorageService } from './shared/services/storage-service';
import { LoginService } from './components/personal/services/login-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerFixed = false;
  // public uboxitMenu = false;

  constructor(private storageService: StorageService, private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginService.getUser(this.storageService.getUser());
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

}
