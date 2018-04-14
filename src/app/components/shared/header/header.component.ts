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
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Subscription } from 'rxjs/Subscription';

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
  // totalCount = this.cartService.totalCountObservable.distinctUntilChanged();
  totalCount: number;
  loggedIn: Observable<boolean>;
  showLoggedIn = false;
  shopFloat = false;
  findparentId;
  findSlideID;
  // features
  loginEnabled: boolean;
  locationEnabled: boolean;

  cart: Cart;
  public showMobile: boolean;

  subscriptions: Subscription[] = [];

  constructor(private headerservice: HeaderService, private _eref: ElementRef, private router: Router,
              private loginService: LoginService,
              private cartService: CartService, private uistyleservice: UserExpStyleService) {

  }


  ngOnInit() {
    this.showMobile = this.uistyleservice.getDeviceInformation();
    var findurl = this.uistyleservice.getPathURL();
    console.log(findurl);
    if(['about','terms','contact','privacy','error'].includes(findurl)){
      this.showMobile = false; console.log("um");
    }
    const shoppingCartPage = new BehaviorSubject(false);
    this.getHeaders();
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.findparentId = document.getElementById('uboxitwrapper');
    this.findSlideID = document.getElementById('slideRightNav');
    this.loggedIn = this.loginService.loggedIn;
    const loginSubscription = this.loginService.loggedIn.subscribe(v => {
      if (v) {
        this.closeLoginWindow();
      }
    });
    this.decideFeatures();

    const routerCountSubscription = Observable.combineLatest(this.cartService.totalCountObservable, shoppingCartPage).subscribe(params => {
      console.log('total count changed ' + params[0]);
      this.totalCount = params[0];
      if (this.totalCount > 0 && !params[1]) {
        this.showSlideNav();
        this.prepareCart();
      } else {
        this.closeSlideNav();
        this.shopFloat = false;
      }
    });

    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        if (event.url.includes('shoppingcart') || event.url.includes('finish')) {
          this.closeSlideNav();
          shoppingCartPage.next(true);
          this.shopFloat = false;
          this.showMobile = false;
        } else {
          shoppingCartPage.next(false);
          this.showMobile = true; 
        }
      }
    });

    this.subscriptions.push(...[loginSubscription, routerCountSubscription]);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(s => s.unsubscribe());
    this.showMobile;
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
      const cartSubscription = this.cartService.createCart().subscribe(res => {
        this.cart = this.cartService.cart;
      });
      this.subscriptions.push(cartSubscription);
    }
  }

  private showSlideNav() {
    this.findSlideID.style.width = '375px';
    this.findparentId.style.marginRight = '375px';
    this.shopFloat = true; // this line help to float the Shopping Cart in Mobile
  }

}
