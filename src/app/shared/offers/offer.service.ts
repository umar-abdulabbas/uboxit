import { Injectable } from '@angular/core';
import { Item, Combo } from '../domain/offer';
import { HttpClient } from '@angular/common/http';

const CATEGORY_TYPE_NAME_MAP = new Map([['NORTH_INDIAN', 'North Indian'], ['SOUTH_INDIAN', 'South Indian'], ['CONTINENTAL', 'Continental']]);
const ITEM_TYPE_NAME_MAP = new Map([['STARTERS', 'Starters'], ['MAIN_COURSE', 'Main Course'], ['DESERT', 'Desert']]);

@Injectable()
export class OfferService {

  offerId: string;
  combos: Combo[] = [];
  items: Item[] = [];

  constructor(private http: HttpClient) {
  }

  getOffers() {
    const offerObservable = this.http.get('/api/offer')
      .publishReplay(1)
      .refCount();
    offerObservable.subscribe((result: any) => {
      this.offerId = '12345';
      result.categories.forEach(category => {
        console.log(category.categoryType);
        category.items.forEach(item => {
          const res = this.prepareDomainItem(item, category.categoryType);
          this.items.push(res);
        });
        category.combos.forEach(combo => {
          const res = this.prepareDomainCombos(combo, category.categoryType);
          this.combos.push(res);
        });
      });
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
      throw new Error('please wait.. combos are not ready');
    }
    return this.items.filter(item => item.type === itemType);
  }

  private prepareDomainCombos(combo: any, categoryType: string) {
    console.log('combos ');
    return <Combo> {
      id: combo.id,
      title: combo.name,
      description: combo.description,
      price: combo.normalPrice.amount,
      image: combo.imageUrls[0],
      category: this.getCategoryTypeName(categoryType)
    };
  }

  private prepareDomainItem(apiItem: any, categoryType: string) {
    console.log('items ');
    return <Item> {
      id: apiItem.id,
      title: apiItem.name,
      description: apiItem.description,
      price: apiItem.normalPrice.amount,
      image: apiItem.imageUrls[0],
      // type: this.getItemTypeName(apiItem.itemType),
      type: apiItem.itemType,
      category: this.getCategoryTypeName(categoryType)
    };
  }

  private getCategoryTypeName(typeFromApi: string) {
    return CATEGORY_TYPE_NAME_MAP.get(typeFromApi);
  }

  private getItemTypeName(typeFromApi: string) {
    return ITEM_TYPE_NAME_MAP.get(typeFromApi);
  }
}
