import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('UBoxIT - Terms and Conditions');
    this.uistyleservice.scrollToTop();
  }

}
