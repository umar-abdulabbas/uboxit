import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../shared/UI/globalUI.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }

}
