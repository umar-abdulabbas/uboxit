import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../shared/UI/globalUI.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public uboxitMenu = false;
  public updateCounter;

  constructor(private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }



}
