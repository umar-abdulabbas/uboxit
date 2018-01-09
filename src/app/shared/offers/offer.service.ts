import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Item, Offer } from './offer';
import { OFFERS } from './mock-offer';
import { HttpClient } from '@angular/common/http';

const OFFER_TYPE_NAME_MAP = new Map([['NORTH_INDIAN', 'North Indian'], ['SOUTH_INDIAN', 'South Indian'], ['CONTINENTAL', 'Continental']]);
const TYPE_NAME_MAP = new Map([['STARTERS', 'Starters'], ['MAIN_COURSE', 'Main Course'], ['DESERT', 'Desert']]);

@Injectable()
export class OfferService {

  offers: Offer[];

  items: Item[];

  constructor(private http: HttpClient) {
  }

  getMockOffers(): Observable<Offer[]> {
    return of(OFFERS);
  }

  getOffers() {
    const offerObservable = this.http.get('/api/offer')
      .publishReplay(1)
      .refCount();
    offerObservable.subscribe((result: any) => {
      const offers: Offer[] = [];
      const items: Item[] = [];
      result.categories.forEach(category => {
        console.log(category.categoryType);
        console.log('items ')
        category.items.forEach(item => {
          const res = this.prepareDomainItem(item, category.categoryType);
          console.log(res);
          items.push(res);
        });
        console.log('combos ');
        category.combos.forEach(combo => {
          const res = this.prepareDomainOffer(combo, category.categoryType);
          console.log(res);
          offers.push(res);
        });
      });
      this.offers = offers;
      this.items = items;
    });
    return offerObservable;
  }

  getStarters() {
    return this.getItems('STARTERS');
  }

  getMainDishes() {
    return this.getItems('MAIN_COURSE');
  }

  getDeserts() {
    return this.getItems('DESERT');
  }

  private getItems(itemType: string) {
    if (!this.items) {
      throw new Error('please wait.. offers are not ready');
    }
    return this.items.filter(item => item.type === itemType);
  }

  private prepareDomainOffer(combo: any, categoryType: string) {
    return <Offer> {
      id: combo.id,
      title: combo.name,
      description: combo.description,
      price: combo.normalPrice.amount,
      image: combo.imageUrls[0],
      types: this.getTypeName(categoryType)
    };
  }

  private prepareDomainItem(apiItem: any, categoryType: string) {
    return <Item> {
      id: apiItem.id,
      title: apiItem.name,
      description: apiItem.description,
      price: apiItem.normalPrice.amount,
      image: apiItem.imageUrls[0],
      type: apiItem.itemType,
      category: this.getTypeName(categoryType)
    };
  }

  private getTypeName(typeFromApi: string) {
    return OFFER_TYPE_NAME_MAP.get(typeFromApi);
  }
}
