import { Injectable } from '@angular/core';
import { Item, Combo } from '../../../core/domain/offer';
import { HttpClient } from '@angular/common/http';
import { Cart } from '../../../core/domain/cart';
import { StorageService } from '../../../shared/services/storage-service';

const CATEGORY_TYPE_NAME_MAP = new Map([['NORTH_INDIAN', 'North Indian'], ['SOUTH_INDIAN', 'South Indian'], ['CONTINENTAL', 'Continental']]);
const ITEM_TYPE_NAME_MAP = new Map([['STARTERS', 'Starters'], ['MAIN_COURSE', 'Main Course'], ['DESERT', 'Desert']]);

@Injectable()
export class OfferService {

  offerId: string;
  combos: Combo[] = [];
  items: Item[] = [];

  constructor(private http: HttpClient,
              private storageService: StorageService) {
  }

  getOffers() {
    // this clear is required, while re-requesting offer after payment is successful
    this.combos = [];
    this.items = [];
    this.offerId = '';
    const offerObservable = this.http.get('/offer-api/offer')
      .publishReplay(1)
      .refCount();
    offerObservable.subscribe((result: any) => {
      this.offerId = result.id;
      console.log(this.offerId);
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

  getItemById(itemId: string) {
    if (!this.items) {
      throw new Error('please wait.. items are not ready');
    }
    return this.items.find(item => item.id === itemId);
  }

  // just for UI purpose - this count will not be used to process the cart
  updateCountForCombo(id: string, count: number) {
    this.combos.find(c => c.id === id).count = count;
  }

  private getItems(itemType: string) {
    if (!this.items) {
      throw new Error('please wait.. offer not ready');
    }
    return this.items.filter(item => item.type === itemType);
  }

  private prepareDomainCombos(combo: any, categoryType: string) {
    console.log('combos ');
    return <Combo> {
      id: combo.id,
      title: combo.name,
      description: combo.description,
      normalPrice: combo.normalPrice.amount,
      discountedPrice: combo.discountedPrice.amount,
      image: combo.imageUrls[0],
      category: this.getCategoryTypeName(categoryType),
      count: this.getCountIfPresentInLocalStorage(combo.id),
      items: combo.items.map(i => this.prepareDomainItem(i, categoryType)),
      itemNames: combo.items.map(i => i.name).join(' + ')
    };
  }

  private prepareDomainItem(apiItem: any, categoryType: string) {
    console.log('items ');
    return <Item> {
      id: apiItem.id,
      title: apiItem.name,
      description: apiItem.description,
      normalPrice: apiItem.normalPrice.amount,
      discountedPrice: apiItem.discountedPrice.amount,
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

  private getCountIfPresentInLocalStorage(id: string) {
    const cart: Cart = this.storageService.getStoredCart();
    if (!!cart) {
      const cachedCombo = cart.combos.find(c => c.id === id);
      if (!!cachedCombo) {
        return cachedCombo.count;
      }
    }
    return 0;
  }
}
