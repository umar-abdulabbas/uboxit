import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  fburl = "https://www.facebook.com/uboxit.nl";
  instagram = "https://www.instagram.com/uboxit.nl";
  twitter = "https://twitter.com/uboxit_nl";
  target = "_blank";
  constructor(private uistyleservice: UserExpStyleService, private titleService: Title) {
  }
  
  ngOnInit() {
    this.titleService.setTitle('Event and Party Order, Contact us to get a better deal for events and party orders');
    this.uistyleservice.scrollToTop();
    if(this.uistyleservice.getDeviceInformation()) {
      this.fburl = "";
      this.instagram = "";
      this.twitter ="";
      this.target = "";
    }
  }

}
