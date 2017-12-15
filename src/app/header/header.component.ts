import { Component, OnInit, ElementRef } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';
import { Router,NavigationEnd,ActivatedRoute } from '@angular/router';
import { AddToCartCounterComponent } from '../shared/add-to-cart-counter/add-to-cart-counter.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[HeaderService], 
  
})
export class HeaderComponent implements OnInit {
  headers: Header[];
  headerActive:boolean = false;
  public headerFixed:boolean = false;
  public body;
  isActiveNonRegUser:boolean = true;
  isActiveRegUser:boolean = false;
  notFromHome:boolean = false;
  forgetPwd:boolean = true;
  LoginLayoutModel:boolean = false;
  loginTitle = "Login";
  public count = 1;
  constructor( private headerservice:HeaderService, private _eref:ElementRef, private router:Router) { }
  

  ngOnInit() {
    this.getHeaders();
    this.body = document.getElementsByTagName('body')[0]; //top stop the scroll window
    
  }

  getHeaders():void{
    this.headerservice.getHeaders().then(headers => this.headers = headers)
  }

  openLoginWindow():void{
    this.headerActive = true;
    this.body.classList.add("body-overflow");
      
  }
 
  closeLoginWindow():void{
    this.headerActive = false;
    this.body.classList.remove("body-overflow");
    this.loginTitle = "Login";
    this.isActiveNonRegUser = true;
    this.isActiveRegUser = false;
    this.notFromHome = false;
    this.forgetPwd = true;
    this.LoginLayoutModel = false;
  
   
  }
  openShoppingCart():void{
    
    this.router.navigate(['/shoppingcart']);
  }
  goToHomePage():void{
    
    this.router.navigate(['/home']);
  }
  openSignUp():void{
    this.isActiveNonRegUser = false;
    this.isActiveRegUser = true;
    this.loginTitle = "Register Form";
  }
 openForget():void{
    this.isActiveNonRegUser = true;
    this.isActiveRegUser = true;
    this.forgetPwd = false;
    this.LoginLayoutModel = true;
    this.loginTitle = "Forgot your password?";
 }
 modelclose(event):void{
  
  this.headerActive = event;
}


}
