import { Component, OnInit } from '@angular/core';
import { Combo } from '../../core/domain/offer';
import { OfferService } from './services/offer.service';
import { CartService } from '../shoppingcart/services/cart.service';

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

  constructor(private offerService: OfferService, private cartService: CartService) {
  }

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0]; // top stop the scroll window
    this.getOffers();
    this.cartService.initializeCart(this.offerService.offerId);
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

  addProductToCart(productId: string, count: number) {
    this.cartService.addComboToCart(productId, count);
    this.offerService.updateCountForCombo(productId, count); // just for UI - will not be used for processing cart
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
