import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public showMobile: boolean;
  constructor(private titleService: Title, private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.showMobile = this.uistyleservice.getDeviceInformation();
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
