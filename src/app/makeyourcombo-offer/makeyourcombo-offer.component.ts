import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { OfferService } from '../shared/offers/offer.service';
import { Item, ItemType } from '../shared/domain/offer';
import { UserExpStyleService } from '../shared/UI/globalUI.service';

@Component({
  selector: 'app-makeyourcombo-offer',
  templateUrl: './makeyourcombo-offer.component.html',
  styleUrls: ['./makeyourcombo-offer.component.css'],
})
export class MakeyourcomboOfferComponent implements OnInit, OnDestroy {

  msgFromMakeYourOwnCombo: any = {
    starter: true,
    maindish: false,
    dessert: false,
    itemId: '',
    itemType: undefined
  };

  subFromMakeYourOwnCombo: Subscription;
  isActivestarters = true;
  isActiveMainDish: boolean;
  isActiveDessert: boolean;

  starters: Item[];
  mainCourses: Item[];
  deserts: Item[];

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService, private uistyleservice: UserExpStyleService) {
    this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe(msgFromMakeYourOwnCombo => {
      this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;
    });
  }

  ngOnInit() {
    this.starters = this.offerService.getStarters();
    this.mainCourses = this.offerService.getMainDishes();
    this.deserts = this.offerService.getDeserts();
  }

  ngOnDestroy() {
    this.subFromMakeYourOwnCombo.unsubscribe();
  }

  onselectedStarter(id: string): void {
    this.makeyourowncomboservice.updateFields(false, true, false, id, ItemType.Starters);
    this.uistyleservice.scrollToTop();
  }

  onselectedMainDish(id): void {
    this.makeyourowncomboservice.updateFields(false, false, true, id, ItemType.MainDish);
    this.uistyleservice.scrollToTop();
  }

  onselectedDessert(id) {
    this.makeyourowncomboservice.updateFields(false, false, true, id, ItemType.Dessert);
    this.uistyleservice.scrollToTop();
  }

}
