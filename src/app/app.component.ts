import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  public headerFixed = false;
  // public uboxitMenu = false;

  constructor() {

  }

  ngOnInit() {

  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 50) {
      this.headerFixed = true;
    } else if (this.headerFixed && scrolValue < 5) {
      this.headerFixed = false;
    }
  }

  ngOnDestroy() {
  }

}
