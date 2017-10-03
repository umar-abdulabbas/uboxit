import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  public barFixed:boolean = false;
  constructor() { }

  ngOnInit() {
  }



}
