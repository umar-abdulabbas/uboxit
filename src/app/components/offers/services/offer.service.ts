import { Injectable } from '@angular/core';
import { Item, Combo, Offer } from '../../../core/domain/offer';
import { HttpClient } from '@angular/common/http';

const CATEGORY_TYPE_NAME_MAP = new Map([['NORTH_INDIAN', 'North Indian'], ['SOUTH_INDIAN', 'South Indian'], ['CONTINENTAL', 'Continental']]);
const ITEM_TYPE_NAME_MAP = new Map([['STARTERS', 'Starters'], ['MAIN_COURSE', 'Main Course'], ['DESERT', 'Desert']]);

@Injectable()
export class OfferService {

  offer: Offer;

  private combos: Combo[] = [];
  private items: Item[] = [];
  private offerId: string;

  constructor(private http: HttpClient) {
  }

  getOffers() {
    // this clear is required, while re-requesting offer after payment is successful
    this.combos = [];
    this.items = [];
    this.offerId = '';
    // const offerObservable = this.http.get('/api/offer')
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
      this.offer = {
        offerId: result.id,
        availableItemsForCustomCombo: result.availableItemsForCustomCombo,
        availableItemsForIndividualSale: result.availableItemsForIndividualSale,
        combos: this.combos,
        items: this.items
      };
    });
    return offerObservable;
  }

  getStarters() {
    return [...this.getItemsForCustomCombo('STARTERS'), ...this.getItemsForCustomCombo('SOUP')];
  }

  getMainDishes() {
    return this.getItemsForCustomCombo('MAIN_COURSE');
  }

  getDessertsAndOthers() {
    return [...this.getItemsForCustomCombo('DESERT'), ...this.getItemsForCustomCombo('DRINKS'), ...this.getItemsForCustomCombo('SALAD')];
  }

  getItemsForIndividualSale() {
    return this.items.filter(item => item.allowedForIndividualSale);
  }

  getItemById(itemId: string) {
    if (!this.items) {
      throw new Error('please wait.. items are not ready');
    }
    return this.items.find(item => item.id === itemId);
  }

  // just for UI purpose (to show the count between - & + (counter component)
  // - this count will not be used to process the cart
  updateCountForCombo(id: string, count: number) {
    this.combos.find(c => c.id === id).count = count;
  }
  // just for UI purpose (to show the count between - & + (counter component)
  // - this count will not be used to process the cart
  updateCountForItem(id: string, count: number) {
    this.items.find(c => c.id === id).count = count;
  }

  // to clear the value displayed in counter component
  clearSelection() {
    this.combos.forEach(c => c.count = 0);
    this.items.forEach(i => i.count = 0);
  }

  private getItemsForCustomCombo(itemType: string) {
    if (!this.items) {
      throw new Error('please wait.. offer not ready');
    }
    return this.items.filter(item => item.allowedForCustomCombo && item.type === itemType);
  }

  private prepareDomainCombos(combo: any, categoryType: string) {
    console.log('combos ');
    return <Combo> {
      id: combo.id,
      title: combo.name,
      normalPrice: combo.normalPrice.amount,
      discountedPrice: combo.discountedPrice.amount,
      image: combo.imageUrls[0],
      category: this.getCategoryTypeName(categoryType),
      dietType: combo.dietType,
      count: 0,
      items: combo.items.map(i => this.prepareDomainItem(i, categoryType)),
      itemNames: combo.items.map(i => i.name).join(' + '),
      description: combo.items.map(i => i.description).join(' '),
      ingredients: combo.items.map(i => i.ingredients.map(ing => ing.name))[0].join(', ')
    };
  }

  private prepareDomainItem(apiItem: any, categoryType: string) {
    console.log('items ');
    return <Item> {
      id: apiItem.id,
      title: apiItem.name,
      description: apiItem.description,
      ingredients: apiItem.ingredients.map(ing => ing.name).join(', '),
      normalPrice: apiItem.normalPrice.amount,
      discountedPrice: apiItem.discountedPrice.amount,
      image: apiItem.imageUrls[0],
      // type: this.getItemTypeName(apiItem.itemType),
      type: apiItem.itemType,
      category: this.getCategoryTypeName(categoryType),
      dietType: apiItem.dietType,
      allowedForCustomCombo: apiItem.allowedForCustomCombo,
      allowedForIndividualSale: apiItem.allowedForIndividualSale
    };
  }

  private getCategoryTypeName(typeFromApi: string) {
    return CATEGORY_TYPE_NAME_MAP.get(typeFromApi);
  }

  private getItemTypeName(typeFromApi: string) {
    return ITEM_TYPE_NAME_MAP.get(typeFromApi);
  }
}
