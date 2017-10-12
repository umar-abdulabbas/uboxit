import { Component, OnInit, ElementRef } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[HeaderService]
})
export class HeaderComponent implements OnInit {
  headers: Header[];
  headerActive:boolean = false;
  public headerFixed:boolean = false;
  public body = document.getElementsByTagName('body')[0]; //top stop the scroll window
  constructor( private headerservice:HeaderService, private _eref:ElementRef) { }
  

  ngOnInit() {
    this.getHeaders();
    let body = document.getElementsByTagName('body')[0];
    console.log("email");
     
  }

  getHeaders():void{
    this.headerservice.getHeaders().then(headers => this.headers = headers)
  }

  openLoginWindow(event:any):void{
    this.headerActive = true;
    this.body.classList.add("body-overflow");
      
  }

  closeLoginWindow():void{
    this.headerActive = false;
    this.body.classList.remove("body-overflow");
  }

}
