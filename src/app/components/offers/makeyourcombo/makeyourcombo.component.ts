import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../../../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { OfferService } from '../services/offer.service';
import { Item, ItemType } from '../../../core/domain/offer';
import { CartService } from '../../shoppingcart/services/cart.service';

import { UserExpStyleService } from '../../../shared/UI/globalUI.service';

@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.css'],

})
export class MakeyourcomboComponent implements OnInit, OnDestroy {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;
  msgFromMakeYourOwnCombo: any = {
    starter: true,
    maindish: false,
    dessert: false,
    itemId: '',
    itemType: undefined
  };

  subFromMakeYourOwnCombo: Subscription;

  public headerColor;
  public uboxitMenu = false;

  public startersCaption = 'Starters';
  public mainDishCaption = 'Main Dish';
  public dessertCaption = 'Dessert';

  public comboComplete: boolean;
  public comboHasMinimumContent: boolean;

  selectedStarter: Item;
  selectedMainDish: Item;
  selectedDessert: Item;

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService, private cartService: CartService, private uistyleservice: UserExpStyleService) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
    this.headerColor.classList.add('headerFixedShoppingCard');
    this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe(msgFromMakeYourOwnCombo => {
      this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;
      const selectedItemId = this.msgFromMakeYourOwnCombo.itemId;
      const selectedItemType = this.msgFromMakeYourOwnCombo.itemType;
      if (!!selectedItemId) {
        const selectedItem = this.offerService.getItemById(selectedItemId);
        if (selectedItemType === ItemType.Starters) {
          this.selectedStarter = selectedItem;
        } else if (selectedItemType === ItemType.MainDish) {
          this.selectedMainDish = selectedItem;
        } else if (selectedItemType === ItemType.Dessert) {
          this.selectedDessert = selectedItem;
        }
        console.log(selectedItem.id);
        console.log(selectedItem.description);
      }

      if (!!this.selectedStarter && !!this.selectedMainDish && !!this.selectedDessert) {
        this.comboComplete = true;
      }
      if (!!this.selectedStarter || !!this.selectedMainDish || !!this.selectedDessert) {
        this.comboHasMinimumContent = true;
      }
    });
  }

  starterPress(): void {
    this.makeyourowncomboservice.updateFields(true, false, false, '', ItemType.Starters);
    this.uistyleservice.scrollToTop();

  }

  mainDishPress(): void {
    this.makeyourowncomboservice.updateFields(false, true, false, '', ItemType.MainDish);
    this.uistyleservice.scrollToTop();
  }

  dessertPress(): void {
    this.makeyourowncomboservice.updateFields(false, false, true, '', ItemType.Dessert);
    this.uistyleservice.scrollToTop();
  }

  clearSelection() {
    this.selectedDessert = undefined;
    this.selectedMainDish = undefined;
    this.selectedStarter = undefined;
    this.starterPress(); // select starter again
    // disable buttons again
    this.comboHasMinimumContent = false;
    this.comboComplete = false;
  }

  addToCart(id: string, count: number) {
    // id is dummy
    console.log('add to cart');
    const itemIds = [this.selectedStarter, this.selectedMainDish, this.selectedDessert].map(item => item.id);
    this.cartService.prepareCustomisedCombo(itemIds, count);
  }

  ngOnDestroy() {
    this.headerColor.classList.remove('headerFixedShoppingCard');
    this.subFromMakeYourOwnCombo.unsubscribe();
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 50) {
      this.uboxitMenu = true;
    } else if (this.uboxitMenu && scrolValue < 5) {
      this.uboxitMenu = false;
    }
  }
}
