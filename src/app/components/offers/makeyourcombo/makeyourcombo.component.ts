import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../../../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { OfferService } from '../services/offer.service';
import { Item, ItemType } from '../../../core/domain/offer';
import { CartService } from '../../shoppingcart/services/cart.service';

import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { AlertInvoker } from '../../../core/services/alert-invoker.service';

const EMPTY_BOX_TEXT = 'Eager to know your box !';
const CLEAR_COMBO_TEXT = 'Clear your box';
const START_NEW_COMBO_TEXT = 'Start your next box !';

const DUPLICATE_BOX_NOTIFICATION = `You've made this box already, Just add as much as you want.                                   PS: Umar will fix styling & close button ;)`;

@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.scss'],

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

  clearOrAddNewText = EMPTY_BOX_TEXT;

  selectedStarter: Item;
  selectedMainDish: Item;
  selectedDessert: Item;

  comboCount = 0;

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService,
              private cartService: CartService, private uistyleservice: UserExpStyleService,
              private alertInvoker: AlertInvoker) {
  }

  ngOnInit() {
    this.uistyleservice.scrollToTop();
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
   // this.headerColor.classList.add('headerFixedShoppingCard');
    this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe(msgFromMakeYourOwnCombo => {
      this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;
      const selectedItemId = this.msgFromMakeYourOwnCombo.itemId;
      const selectedItemType = this.msgFromMakeYourOwnCombo.itemType;
      let duplicateSelection = false;
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
        const selectedCombination = [this.selectedStarter.id, this.selectedMainDish.id, this.selectedDessert.id];
        // if selected items are already in the cart, show the add to cart with existing value
        duplicateSelection = this.cartService.isCustomComboAlreadySelected(selectedCombination);
        if (duplicateSelection) {
          this.comboCount = this.cartService.getCustomeComboCountIfAlreadySelected(selectedCombination);
          this.alertInvoker.invokeNotification(DUPLICATE_BOX_NOTIFICATION);
          console.log(this.comboCount);
        } else {
          this.comboCount = 0;
        }
      }
      if ((!!this.selectedStarter || !!this.selectedMainDish || !!this.selectedDessert) && !duplicateSelection) {
        this.comboHasMinimumContent = true;
        this.clearOrAddNewText = CLEAR_COMBO_TEXT;
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
    this.clearOrAddNewText = EMPTY_BOX_TEXT;
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
    this.clearOrAddNewText = START_NEW_COMBO_TEXT;
    const itemIds = [this.selectedStarter, this.selectedMainDish, this.selectedDessert].map(item => item.id);
    this.cartService.prepareCustomisedCombo(itemIds, count);
    if (!!this.cartService.cartId) {
      this.cartService.updateCartWithCustomisedCombo();
    }
  }

  ngOnDestroy() {
    // this.headerColor.classList.remove('headerFixedShoppingCard');
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
