import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';

import { Offer } from './offer';
import { OFFERS } from './mock-offer';
import { HttpClient} from '@angular/common/http';
import { concat } from 'rxjs/operator/concat';



@Injectable()
export class OfferService {


constructor(private http: HttpClient) { }



  
  
  getOffers1() {
    return this.http.get('/api/SOFFERS')
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
       //.subscribe(res => console.log(res));
  }
   
  getOffers2() {
   
    return this.http.get('/api/SOFFERS')
      .switchMap((offer: any) => {
        let offers= [];
        const firstCategory = offer.categories;
        firstCategory.forEach( (firstCategoryArray, index) => {
            firstCategory[index].combos.forEach((data, index) => {
              offers.push({
                    id:data.id,
                    title: data.description,
                    price: data.normalPrice.amount,
                    image: data.imageUrls[0],
                    types: firstCategoryArray.categoryType
              });
                  
          });
        });
        //console.log("x",this.offers);
        return Observable.of({
          offers
         });
      });
       //.subscribe(res => console.log(res));
      
  }
  

}
