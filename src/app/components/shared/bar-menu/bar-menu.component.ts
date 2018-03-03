import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { OfferService } from '../../offers/services/offer.service';
import { Observable } from 'rxjs/Observable';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
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
  menuList = MENULIST;
  totalCount: Observable<any>;
  @Input() availableTypes: string[] = [];
  @Output() filterType = new EventEmitter<string>();

  constructor(private offerServie: OfferService, private router: Router) {
  }

  ngOnInit() {
    let findPathUrl = window.location.href.split('/').pop();
    if (findPathUrl === 'home') {
        this.updateMenuList('001', true);
    }
    if (findPathUrl === 'makeyourcombo') {
      this.updateMenuList('002', true);
    }
    if (findPathUrl === 'choices') {
      this.updateMenuList('003', true);
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
