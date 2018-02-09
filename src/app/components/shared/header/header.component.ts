import { Component, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';
import { Router } from '@angular/router';
import { CartService } from '../../shoppingcart/services/cart.service';
import { Observable } from 'rxjs/Observable';
import { LoginService } from '../../personal/services/login-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: [HeaderService],
})
export class HeaderComponent implements OnInit, OnDestroy {
  headers: Header[];
  headerActive = false;
  body;
  isActiveNonRegUser = true;
  isActiveRegUser = false;
  notFromHome = false;
  forgetPwd = true;
  LoginLayoutModel = false;
  loginTitle = 'Login';
  totalCount: Observable<number>;
  loggedIn: Observable<boolean>;

  constructor(private headerservice: HeaderService, private _eref: ElementRef, private router: Router,
              private cartService: CartService,
              private loginService: LoginService) {

  }


  ngOnInit() {
    this.getHeaders();
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.totalCount = this.cartService.totalCountSubject;
    this.loggedIn = this.loginService.loggedIn;
    this.loginService.loggedIn.subscribe(v => {
      if (v) {
        this.closeLoginWindow();
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
    this.loginTitle = 'Login';
    this.isActiveNonRegUser = true;
    this.isActiveRegUser = false;
    this.notFromHome = false;
    this.forgetPwd = true;
    this.LoginLayoutModel = false;
  }

  openShoppingCart(): void {
    this.router.navigate(['/shoppingcart']);
  }

  goToHomePage(): void {
    this.router.navigate(['/home']);
  }

  openSignUp(): void {
    this.isActiveNonRegUser = false;
    this.isActiveRegUser = true;
    this.loginTitle = 'Register Form';
  }

  openForget(): void {
    this.isActiveNonRegUser = true;
    this.isActiveRegUser = true;
    this.forgetPwd = false;
    this.LoginLayoutModel = true;
    this.loginTitle = 'Forgot your password?';
  }

  modelclose(event): void {
    this.headerActive = event;
  }
}
