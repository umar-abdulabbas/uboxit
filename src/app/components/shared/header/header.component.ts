import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../personal/services/login-service';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';
import { StorageService } from '../../../shared/services/storage-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [HeaderService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  headers: Header[];
  headerActive = false;
  body;
  showLocationPanel = false;
  loginTitle = 'Login';
  totalCount: Observable<number>;
  loggedIn: Observable<boolean>;
  showLoggedIn = false;
  shopFloat = false;

  // features
  loginEnabled: boolean;
  locationEnabled: boolean;

  constructor(private headerservice: HeaderService, private _eref: ElementRef, private router: Router,
              private loginService: LoginService,
              private storageService: StorageService) {

  }


  ngOnInit() {
    this.getHeaders();
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.totalCount = this.storageService.totalCountSubject;
    this.loggedIn = this.loginService.loggedIn;
    this.loginService.loggedIn.subscribe(v => {
      if (v) {
        this.closeLoginWindow();
      }
    });
    this.decideFeatures();

  }

  ngOnDestroy() {

  }

  getHeaders(): void {
    this.headerservice.getHeaders().then(headers => this.headers = headers);
  }

  openLoginWindow(): void {
    this.headerActive = true;
    this.body.classList.add('body-overflow');
  }

  closeLoginWindow(): void {
    this.headerActive = false;
    this.body.classList.remove('body-overflow');
  }

  logout() {
    this.loginService.logout();
    this.logoutPanel();
  }

  logoutPanel() {
    this.showLoggedIn = !this.showLoggedIn;
  }

  openShoppingCart(): void {
    this.router.navigate(['/shoppingcart']);
  }

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }

  modelclose(event): void {
    this.headerActive = event;
    this.showLoggedIn = event;
  }

  private decideFeatures() {
    this.loginEnabled = FeatureSwitch.isLoginFeatureEnabled();
    this.locationEnabled = FeatureSwitch.isLocationFeatureEnabled();
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 250) {
      this.shopFloat = true;
    } else if (this.shopFloat && scrolValue < 250) {
      this.shopFloat = false;
    }
  }
}
