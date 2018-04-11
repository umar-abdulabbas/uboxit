import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../../../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { OfferService } from '../services/offer.service';
import { Item, ItemType, Offer } from '../../../core/domain/offer';
import { CartService } from '../../shoppingcart/services/cart.service';

import { UserExpStyleService } from '../../../shared/UI/globalUI.service';
import { AlertInvoker } from '../../../core/services/alert-invoker.service';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

const EMPTY_BOX_TEXT = 'Eager to know your box !';
const CLEAR_COMBO_TEXT = 'Clear your box';
const START_NEW_COMBO_TEXT = 'Start your next box !';

const DUPLICATE_BOX_NOTIFICATION = `You've made this box already)`;

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
  totalCountSubscription: Subscription;

  public headerColor;
  public uboxitMenu = false;
  public startersCaption = 'Appetizers';
  public mainDishCaption = 'Main Course';
  public dessertCaption = 'Desserts, Salads & Drinks';

  availableTypes: string[] = [];

  public comboComplete: boolean;
  public comboHasMinimumContent: boolean;

  clearOrAddNewText = EMPTY_BOX_TEXT;

  loadMenu = new BehaviorSubject(false);

  private starters: Item[];
  private mainCourses: Item[];
  private deserts: Item[];

  startersToDisplay: Item[];
  mainCoursesToDisplay: Item[];
  desertsToDisplay: Item[];

  selectedStarter: Item;
  selectedMainDish: Item;
  selectedDessert: Item;

  currentVisibleType: ItemType;

  comboCount = 0;

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService,
              private cartService: CartService, private uistyleservice: UserExpStyleService,
              private router: Router, private alertInvoker: AlertInvoker, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Want to make your own combo from a different category? Then choose custom combo.');
    this.uistyleservice.scrollToTop();
    this.headerColor = document.getElementById('uboxitTopHeader'); // top stop the scroll window
   // this.headerColor.classList.add('headerFixedShoppingCard');

    let offer = this.offerService.offer;

    if (offer) {
      this.initialize(offer);
    } else {
      this.offerService.getOffers().subscribe(res => {
        offer = this.offerService.offer;
        if (offer.availableItemsForCustomCombo) {
          this.initialize(offer);
          this.cartService.initializeCart(offer.offerId);
        } else {
          this.router.navigate(['/home']);
        }
      });
    }
  }

  initialize(offer: Offer) {
    this.loadMenu.next(true);

    this.getAvailableTypes(offer);

    this.starters = this.startersToDisplay = this.offerService.getStarters();
    this.mainCourses = this.mainCoursesToDisplay =  this.offerService.getMainDishes();
    this.deserts = this.desertsToDisplay = this.offerService.getDessertsAndOthers();

    this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe(msgFromMakeYourOwnCombo => {
      this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;
      const selectedItemId = this.msgFromMakeYourOwnCombo.itemId;
      const selectedItemType = this.msgFromMakeYourOwnCombo.itemType;
      let duplicateSelection = false;
      if (!!selectedItemId) {
        const selectedItem = this.offerService.getItemById(selectedItemId);
        if (selectedItemType === ItemType.Starters) {
          this.selectedStarter = selectedItem;
          this.currentVisibleType = ItemType.MainDish;
        } else if (selectedItemType === ItemType.MainDish) {
          this.selectedMainDish = selectedItem;
          this.currentVisibleType = ItemType.Dessert;
        } else if (selectedItemType === ItemType.Dessert) {
          this.selectedDessert = selectedItem;
          this.currentVisibleType = ItemType.Dessert;
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

    // if + or - done at left slide nave, then that needs to be updated
    // but only if that combo is selected
    // & also change the text
    this.totalCountSubscription = this.cartService.totalCountObservable.subscribe(() => {
      if (!!this.selectedStarter && !!this.selectedMainDish && !!this.selectedDessert) {
        this.comboCount = this.cartService.getCustomeComboCountIfAlreadySelected([this.selectedStarter.id, this.selectedMainDish.id, this.selectedDessert.id]);
        this.clearOrAddNewText = START_NEW_COMBO_TEXT;
      }
    });
  }

  starterPress(): void {
    this.makeyourowncomboservice.updateFields(true, false, false, '', ItemType.Starters);
    this.currentVisibleType = ItemType.Starters;
    this.uistyleservice.scrollToTop();

  }

  mainDishPress(): void {
    this.makeyourowncomboservice.updateFields(false, true, false, '', ItemType.MainDish);
    this.currentVisibleType = ItemType.MainDish;
    this.uistyleservice.scrollToTop();
  }

  dessertPress(): void {
    this.makeyourowncomboservice.updateFields(false, false, true, '', ItemType.Dessert);
    this.currentVisibleType = ItemType.Dessert;
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

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 50) {
      this.uboxitMenu = true;
    } else if (this.uboxitMenu && scrolValue < 5) {
      this.uboxitMenu = false;
    }
  }

  filterByType(type: string) {
    if (this.currentVisibleType === ItemType.Starters) {
      this.startersToDisplay = this.starters.filter(offer => offer.category === type);
    } else if (this.currentVisibleType === ItemType.MainDish) {
      this.mainCoursesToDisplay = this.mainCourses.filter(offer => offer.category === type);
    } else if (this.currentVisibleType === ItemType.Dessert) {
      this.desertsToDisplay = this.deserts.filter(offer => offer.category === type);
    }
  }

  clearFilter() {
    if (this.currentVisibleType === ItemType.Starters) {
      this.startersToDisplay = this.starters;
    } else if (this.currentVisibleType === ItemType.MainDish) {
      this.mainCoursesToDisplay = this.mainCourses;
    } else if (this.currentVisibleType === ItemType.Dessert) {
      this.desertsToDisplay = this.deserts;
    }
  }

  ngOnDestroy() {
    // this.headerColor.classList.remove('headerFixedShoppingCard');
    if (this.subFromMakeYourOwnCombo) {
      this.subFromMakeYourOwnCombo.unsubscribe();
    }
    this.totalCountSubscription.unsubscribe();
  }

  private getAvailableTypes(offer) {
    offer.combos.forEach(combo => {
      if (!this.availableTypes.some(type => type === combo.category)) {
        this.availableTypes.push(combo.category);
      }
    });
    console.log(this.availableTypes);
  }
}
