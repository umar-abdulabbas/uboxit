import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css', '../header/header.component.css']
})
export class PersonalComponent implements OnInit {
  isActiveNonRegUser:boolean = false; // based on customer not reg 
  isActiveRegUser:boolean = true; // based on customer logged in or not values 
  constructor() { }

  ngOnInit() {
  }
  showNonRegUser():void{
      this.isActiveNonRegUser = true;
      this.isActiveRegUser = false;
  }
  showRegUser():void{
      this.isActiveRegUser = true;
      this.isActiveNonRegUser = false;
  }
}