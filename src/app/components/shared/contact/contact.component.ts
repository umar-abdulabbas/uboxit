import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle("Event and Party Order, Contact us to get a better deal for events and party orders");
    this.uistyleservice.scrollToTop();
  }

}
