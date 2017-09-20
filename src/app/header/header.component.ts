import { Component, OnInit } from '@angular/core';
import { Header } from './header';
import { HeaderService } from './header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers:[HeaderService]
})
export class HeaderComponent implements OnInit {
  headers: Header[];
  constructor( private headerservice:HeaderService) { }

  ngOnInit() {
    this.getHeaders();
  }

  getHeaders():void{
    this.headerservice.getHeaders().then(headers => this.headers = headers)
  }
}
