import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OfferService } from '../../offers/services/offer.service';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

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
  {id: '001', name: 'Combo', link: '/home', icon: 'restaurant_menu', filter: true, menuActive: false},
  {id: '002', name: 'Make Combo', link: '/makeyourcombo', icon: 'room_service', filter: false, menuActive: false},
  {id: '003', name: 'Choices', link: '/choices', icon: 'restaurant', filter: false, menuActive: false}
];

/* Menu End */
@Component({
  selector: 'app-bar-menu',
  templateUrl: './bar-menu.component.html',
  styleUrls: ['./bar-menu.component.scss']
})
export class BarMenuComponent implements OnInit {
  // public barFixed = false;
  public isBtnActive = true;
  public pathFinder: string;
  public isActiveDropDown = false;
  public menuActive: boolean;
  menuList: MenuList[] = [];
  totalCount: Observable<any>;
  public showMobile: boolean;
  @Input() availableTypes: string[] = [];
  @Output() filterType = new EventEmitter<string>();

  constructor(private offerServie: OfferService, private router: Router, private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.showMobile = this.uistyleservice.getDeviceInformation();
    const findPathUrl = window.location.href.split('/').pop();

    const offer = this.offerServie.offer;

    if (offer.combos.length > 0) {
      this.menuList.push(Object.assign({}, MENULIST[0]));
      if (findPathUrl === 'home') {
        this.updateMenuList('001', true);
      }
    }
    if (offer.availableItemsForCustomCombo) {
      this.menuList.push(Object.assign({}, MENULIST[1]));
      if (findPathUrl === 'makeyourcombo') {
        this.updateMenuList('002', true);
      }
    }
    if (offer.availableItemsForIndividualSale) {
      this.menuList.push(Object.assign({}, MENULIST[2]));
      if (findPathUrl === 'choices') {
        this.updateMenuList('003', true);
      }
    }
  }

  selectType(type: string): void {
    this.filterType.emit(type);
    this.isActiveDropDown = false;
  }

  openMenu(link: string): void {
    this.router.navigate([link]);
  }

  closeDropDown(): void {
    this.isActiveDropDown = false;
  }

  showDropDown(id: string, mActive: boolean): void {
    this.isActiveDropDown = !this.isActiveDropDown;
    this.updateMenuList(id, mActive);

  }

  updateMenuList(id: string, menuActive: boolean): void {
    const menuItem = this.menuList.find(item => item.id === id);
    menuItem.menuActive = menuActive;
    this.menuList.filter(item => item.id !== id).forEach(i => i.menuActive = false);
  }
}
