import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OfferService } from '../../offers/services/offer.service';

@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.css']
})
export class BarMenuComponent implements OnInit {
  // public barFixed = false;
  public isActive = false;
  public isBtnActive = true;
  public pathFinder: string;
  public isActiveDropDown = false;

  @Input() availableTypes: string[] = [];
  @Output() filterType = new EventEmitter<string>();

  constructor(private offerServie: OfferService) {
  }

  ngOnInit() {
    this.pathFinder = location.pathname.split('/').pop();
    if (this.pathFinder === 'makeyourcombo') {
      this.isActive = true;
      this.isBtnActive = false;
    }
  }

  selectType(type: string): void {
    console.log(type);
    this.filterType.emit(type);
    
  }
  showDropDown(): void {
    this.isActiveDropDown = !this.isActiveDropDown;
  }

}
