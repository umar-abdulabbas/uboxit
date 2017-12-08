import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export class Offer {
  id: string;
  image: string;
  title: string;
  anySpecTitle: string;
  types: string;
  price: string;
  favourite: string;
}

@Injectable()
class OfferService {

  offers: Offer[];

  constructor(private http: HttpClient) {

  }

  getOffers() {
    this.http.get('offer-url').subscribe((res: Offer[]) => {
      this.offers = res;
    });
    // TODO invoke the real API & return value
  }
}
