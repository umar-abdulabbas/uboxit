import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
import { OfferService } from '../shared/offers/offer.service';
import { Item } from '../shared/offers/offer';

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

  }
  subFromMakeYourOwnCombo: Subscription;
  isActivestarters = true;
  isActiveMainDish: boolean;
  isActiveDessert: boolean;

  starters: Item[];
  mainCourses: Item[];
  deserts: Item[];

  constructor(private makeyourowncomboservice: MakeYourOwnComboService, private offerService: OfferService) {
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


  onselectedStarter(): void {
    this.makeyourowncomboservice.updateFields(false, true, false, 'd1');
  }

  onselectedMainDish(): void {
    this.makeyourowncomboservice.updateFields(false, false, true, 'd1');
  }

  onselectedDessert() {
    console.log('desert selected');
  }
}
