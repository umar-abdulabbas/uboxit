import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService) { }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
  }

}
