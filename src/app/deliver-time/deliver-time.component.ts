import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deliver-time',
  templateUrl: './deliver-time.component.html',
  styleUrls: ['./deliver-time.component.css']
})
export class DeliverTimeComponent implements OnInit {
  isActiveDeliverNow:boolean = true;
  isActiveDeliverLater:boolean = false;
  active:boolean = false;
  constructor() { }

  ngOnInit() {
  }
  openDeliverNow():void{
    this.active = false;
    this.isActiveDeliverLater = false;
    this.isActiveDeliverNow = true;
  }
  openDeliverLater():void{
    this.active = true;
    this.isActiveDeliverLater = true;
    this.isActiveDeliverNow = false;
  }
}
