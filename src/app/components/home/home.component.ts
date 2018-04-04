import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public uboxitMenu = false;
  public updateCounter;

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.titleService.setTitle('UBoxIT - Food delivery | Order food online in The Netherlands, Amsterdam, Amstelveen, Schiphol');

  }
}
