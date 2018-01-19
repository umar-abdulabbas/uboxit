import { Component, OnInit, OnDestroy, Output, EventEmitter, ElementRef, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
//import { OffersComponent } from '../offers/offers.component';
import { OfferService } from '../shared/offers/offer.service';
import { Item, ItemType } from '../shared/domain/offer';
import { window } from 'rxjs/operators/window';



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

  public showButton: boolean;

  selectedStarter: Item;
  selectedMainDish: Item;
  selectedDessert: Item;

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService,) {
  }

  ngOnInit() {
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
    });
  }

  starterPress(): void {
    this.makeyourowncomboservice.updateFields(true, false, false, '', ItemType.Starters);
    this.scrollTarget();

  }

  mainDishPress(): void {
    this.makeyourowncomboservice.updateFields(false, true, false, '', ItemType.MainDish);
    this.scrollTarget();
  }

  dessertPress(): void {
    this.makeyourowncomboservice.updateFields(false, false, true, '', ItemType.Dessert);
    this.scrollTarget();
  }

  ngOnDestroy() {
    this.headerColor.classList.remove('headerFixedShoppingCard');
    this.subFromMakeYourOwnCombo.unsubscribe();
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 50) {
      this.uboxitMenu = true;
    }
    else if (this.uboxitMenu && scrolValue < 5) {
      this.uboxitMenu = false;
    }


  }

  scrollTarget(){
    var body = document.body; // For Safari
    var html = document.documentElement; // Chrome, Firefox, IE and Opera 
    body.scrollTop = 0;
    html.scrollTop = 0;
     }

}

