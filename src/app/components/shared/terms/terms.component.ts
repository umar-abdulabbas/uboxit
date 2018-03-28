import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService) { }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }

}
