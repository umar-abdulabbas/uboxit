import { Component, OnInit } from '@angular/core';
import { UserExpStyleService } from '../../shared/UI/globalUI.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { CHANNEL_ANDROID, CHANNEL_IOS, GenericService } from '../../core/services/generic-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public uboxitMenu = false;
  public updateCounter;
  public showMobile: boolean;

  constructor(private uistyleservice: UserExpStyleService, private titleService: Title,
              private route: ActivatedRoute, private genericService: GenericService) {
    this.route.queryParams.subscribe(params => {
      const channel = params['channel'];
      if (channel === CHANNEL_ANDROID || channel === CHANNEL_IOS) {
        this.genericService.setMobileChannel(channel);
      }
    });
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.titleService.setTitle('UBoxIT - Food delivery | Order food online in The Netherlands, Amsterdam, Amstelveen, Schiphol');
    this.showMobile = this.uistyleservice.getDeviceInformation();
  }
}
