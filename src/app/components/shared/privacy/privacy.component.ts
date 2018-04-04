import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) { }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.titleService.setTitle("UBoxIT - Privacy Policies");
  }

}
