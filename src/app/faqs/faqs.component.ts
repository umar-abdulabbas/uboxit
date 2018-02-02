import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../shared/UI/globalUI.service';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }

}
