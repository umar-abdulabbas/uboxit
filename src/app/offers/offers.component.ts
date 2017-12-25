import { Component, OnInit, Injectable, Output, EventEmitter } from '@angular/core';
import { Offer } from '../shared/offers/offer';
import { OfferService } from '../shared/offers/offer.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css'],
  outputs: ['incdecCounter']
})
export class OffersComponent implements OnInit {
  offers: Offer[];
  offersToDisplay: Offer[];

  active: boolean = true;
  public body;
  incdecCounter = new EventEmitter();
  activeyes: boolean = true;
  isActivedetails: boolean = true;
  isActiveingredients: boolean = false;
  selectedOffer: Offer;
  parentcount: any;
  updatecount = 0;
  animation: boolean = false;

  availableTypes: string[] = [];
  selectedType: string;

  constructor(private offerService: OfferService) {
    this.parentcount;
  }

  ngOnInit() {
    this.body = document.getElementsByTagName('body')[0]; //top stop the scroll window
    this.getOffers();
  }

  getOffers(): void {
    this.offerService.getOffers().subscribe(result => {
      this.offers = result.offers;
      this.getAvailableTypes();
      this.filterOffers(this.availableTypes[0]);
    });
  }

  filterOffers(typeToFilter: string) {
    this.selectedType = typeToFilter;
    this.offersToDisplay = this.offers.filter(offer => offer.types === typeToFilter);
  }

  onSelect(offer: Offer): void {
    console.log(offer);
    this.selectedOffer = offer;
    this.body.classList.add("body-overflow");
  }

  close(): void {
    this.active = false;
    this.body.classList.remove("body-overflow");
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
    console.log(event);
    this.active = event;
  }

  private getAvailableTypes() {
    this.offers.forEach(offer => {
      if (!this.availableTypes.some(type => type === offer.types)) {
        this.availableTypes.push(offer.types);
      }
    });
    console.log(this.availableTypes);
  }
}
