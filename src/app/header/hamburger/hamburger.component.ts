import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { HeaderService } from '../header.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.css']
})
export class HamburgerComponent implements OnInit {
  wasClicked = false;
  headers: Header[];
  mnuName = 'menu';

  constructor(private headerservice: HeaderService) {
  }

  ngOnInit() {
  }

  onClick() {
    this.wasClicked = !this.wasClicked;
    if (this.wasClicked) {
      this.mnuName = 'close';
    } else {
      this.mnuName = 'menu';
    }
    this.getHeaders();

  }

  getHeaders(): void {
    this.headerservice.getHeaders().then(headers => this.headers = headers);
  }
}
