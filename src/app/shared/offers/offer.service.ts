import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Offer } from './offer';
import { OFFERS } from './mock-offer';
import { HttpClient } from '@angular/common/http';

const TYPE_NAME_MAP = new Map([['NORTH_INDIAN', 'North Indian'], ['SOUTH_INDIAN', 'South Indian'], ['CONTINENTAL', 'Continental']])

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) {

  }

  getMockOffers(): Observable<Offer[]> {
    return of(OFFERS);
  }

  getOffers() {
    return this.http.get('/api/offer')
      .switchMap((offer: any) => {
        const offers: Offer[] = [];
        offer.categories.forEach(category => {
          category.combos.forEach(combo => {
            const res = <Offer> {
              id: combo.id,
              title: combo.name,
              description: combo.description,
              price: combo.normalPrice.amount,
              image: combo.imageUrls[0],
              types: this.getTypeName(category.categoryType)
            };
            console.log(res);
            offers.push(res);
          });
        });
        return Observable.of({
          offers
        });
      });
  }

  private getTypeName(typeFromApi: string) {
    return TYPE_NAME_MAP.get(typeFromApi);
  }
}
