import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

@Component({
  selector: 'app-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService) { }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }

}
