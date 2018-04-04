import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private titleService: Title) {
  }

  ngOnInit() {
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }
}
