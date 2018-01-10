import { Component, OnInit } from '@angular/core';
import { Combo } from '../shared/domain/offer';
import { OfferService } from '../shared/offers/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {
  offers: Combo[];
  offersToDisplay: Combo[];
  uboxitMenu = false;
  active = true;
  body;
  activeyes = true;
  isActivedetails = true;
  isActiveingredients = false;
  selectedOffer: Combo;

  availableTypes: string[] = [];
  selectedType: string;

  constructor(private offerService: OfferService) {
  }

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.getOffers();
  }

  getOffers(): void {
    this.offers = this.offerService.combos;
    this.getAvailableTypes();
    this.offersToDisplay = this.offers;
  }

  filterOffers(typeToFilter: string) {
    this.selectedType = typeToFilter;
    this.offersToDisplay = this.offers.filter(offer => offer.category === typeToFilter);
  }

  onSelect(offer: Combo): void {
    console.log(offer);
    this.selectedOffer = offer;
    this.body.classList.add('body-overflow');
  }

  close(): void {
    this.active = false;
    this.body.classList.remove('body-overflow');
  }

  opendetails(): void {
    this.activeyes = true;
    this.isActivedetails = true;
    this.isActiveingredients = false;
  }

  openingredients(): void {
    this.activeyes = false;
    this.isActivedetails = false;
    this.isActiveingredients = true;
  }

  modelclose(event): void {
    // This Function is used to close the Model Window on clicking outstide of the screen.
    this.active = event;
    this.body.classList.remove('body-overflow');
  }

  private getAvailableTypes() {
    this.offers.forEach(offer => {
      if (!this.availableTypes.some(type => type === offer.category)) {
        this.availableTypes.push(offer.category);
      }
    });
    console.log(this.availableTypes);
  }

  stickyHeaderValue(scrolValue) {
    if (scrolValue > 330) {
      this.uboxitMenu = true;
    } else if (this.uboxitMenu && scrolValue < 200) {
      this.uboxitMenu = false;
    }
  }
}
