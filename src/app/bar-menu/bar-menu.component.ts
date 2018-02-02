import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OfferService } from '../shared/offers/offer.service';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  public barFixed: boolean = false;
  public isActive: boolean = false;
  public pathFinder: string;

  @Input() availableTypes: string[] = [];
  @Output() filterType = new EventEmitter<string>();

  constructor(private offerServie: OfferService) {
  }

  ngOnInit() {
    this.pathFinder = location.pathname.split('/').pop();
    if (this.pathFinder === "makeyourcombo") {
      this.isActive = true;
    }
  }

  selectType(type: string) {
    console.log(type);
    this.filterType.emit(type);
  }

}