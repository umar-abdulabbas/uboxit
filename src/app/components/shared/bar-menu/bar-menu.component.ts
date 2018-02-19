import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OfferService } from '../../offers/services/offer.service';
import { Observable } from 'rxjs/Observable';

/* Menu Start */
export class MenuList {
  id: string;
  name: string;
  link: string;
  icon: string;
  filter: boolean;
  menuActive: boolean;
}

const MENULIST: MenuList[] = [
  {id: '001', name: 'Combo', link: '/home', icon: 'restaurant_menu', filter: true, menuActive: true},
  {id: '002', name: 'Make Combo', link: '/home', icon: 'room_service', filter: false, menuActive: false},
  {id: '003', name: 'Items', link: '/home', icon: 'restaurant', filter: true, menuActive: false}
];

/* Menu End */
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
  public showTwoCol = false;
  public showThreeCol = false;
  menuList = MENULIST;
  totalCount: Observable<any>;
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
    this.showHideColClass();
  }

  showHideColClass() {
    if (this.menuList.length === 2) {
      return this.showTwoCol = true;
    }
    if (this.menuList.length === 3) {
      return this.showThreeCol = true;
    }
  }

  selectType(type: string): void {
    console.log(type);
    this.filterType.emit(type);
    this.isActiveDropDown = false;
  }

  showDropDown(): void {
    this.isActiveDropDown = !this.isActiveDropDown;
  }

}
