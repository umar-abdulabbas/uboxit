import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.titleService.setTitle('Good food is good Mood!! We believe in providing tradition, aromatic food at your desk in innovative design of boxes.');
  }

}
