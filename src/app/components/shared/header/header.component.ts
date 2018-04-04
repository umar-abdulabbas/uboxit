import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';
import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../personal/services/login-service';
import { FeatureSwitch } from '../../../core/feature-switch/feature-switch';
import { CartService } from '../../shoppingcart/services/cart.service';
import { Cart } from '../../../core/domain/cart';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

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
  totalCount = this.cartService.totalCountObservable;
  loggedIn: Observable<boolean>;
  showLoggedIn = false;
  shopFloat = false;
  findparentId;
  findSlideID;
  // features
  loginEnabled: boolean;
  locationEnabled: boolean;

  cart: Cart;
  public showMobile:boolean;
  constructor(private headerservice: HeaderService, private _eref: ElementRef, private router: Router,
              private loginService: LoginService,
              private cartService: CartService, private uistyleservice: UserExpStyleService) {

  }


  ngOnInit() {
    this.showMobile = this.uistyleservice.getDeviceInformation();
    let shoppingCartPage: boolean;
    this.getHeaders();
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.findparentId = document.getElementById('uboxitwrapper');
    this.findSlideID = document.getElementById('slideRightNav');
    // this.totalCount = this.cartService.totalCountObservable;
    this.loggedIn = this.loginService.loggedIn;
    this.loginService.loggedIn.subscribe(v => {
      if (v) {
        this.closeLoginWindow();
      }
    });
    this.decideFeatures();

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('shoppingcart') || event.url.includes('finish')) {
          this.closeSlideNav();
          shoppingCartPage = true;
          this.shopFloat = false;
          this.showMobile = false;
        } else {
          shoppingCartPage = false;
          // TODO malai - SUBSCRIBING TWICE
          this.totalCount.distinctUntilChanged().subscribe(c => {
            console.log('total count changed' + c)
            if (c > 0 && !shoppingCartPage) {
              this.showSlideNav();
              this.prepareCart();
            } else {
              this.closeSlideNav();
              this.shopFloat = false;
            }
          });
        }
      }
    });
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

  closeSlideNav() {
    this.findSlideID.style.width = '0px';
    this.findparentId.style.marginRight = '0px';
  }

  private decideFeatures() {
    this.loginEnabled = FeatureSwitch.isLoginFeatureEnabled();
    this.locationEnabled = FeatureSwitch.isLocationFeatureEnabled();
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 250) {
      // this.shopFloat = true;
    } else if (this.shopFloat && scrolValue < 250) {
      // this.shopFloat = false;
    }
  }

  private prepareCart() {
    if (!this.cartService.cartId) {
      this.cartService.createCart().subscribe(res => {
        this.cart = this.cartService.cart;
      });
    }
  }

  private showSlideNav() {
    this.findSlideID.style.width = '375px';
    this.findparentId.style.marginRight = '375px';
    this.shopFloat = true; // this line help to float the Shopping Cart in Mobile
  }

}
