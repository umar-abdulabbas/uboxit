import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  public barFixed:boolean = false;
  public isActive:boolean = false;
  public pathFinder:string;
  constructor() { }

  ngOnInit() {
      this.pathFinder = location.pathname.split('/').pop();
      if(this.pathFinder === "makeyourcombo"){
        this.isActive = true;
      }
  }

  


}
