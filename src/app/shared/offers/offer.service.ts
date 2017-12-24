import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Offer } from './offer';
import { OFFERS } from './mock-offer';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfferService {

  constructor(private http: HttpClient) {

  }

  getOffers(): Observable<Offer[]> {
    return of(OFFERS);
  }

  getOffers1() {
    return this.http.get('/api/offer')
      .switchMap((offer: any) => {
        const firstCategory = offer.categories[0];
        const offers: Offer[] = firstCategory.combos.map(combo => {
          return {
            id: combo.id,
            title: combo.description,
            price: combo.normalPrice.amount,
            image: combo.imageUrls[0],
            types: firstCategory.categoryType
          };
        });
        return Observable.of({
          offers
        });
      });
      // .subscribe(res => console.log(res));
  }
}
