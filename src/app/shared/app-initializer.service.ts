import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { OfferService } from '../components/offers/services/offer.service';

export function AppLoader(appInitializer: AppInitializerService) {
  return () => appInitializer.initialize();
}

@Injectable()
export class AppInitializerService {
  constructor(private offerService: OfferService) {
  }

  initialize(): Promise<any> {
    return new Promise((resolve) => {
      Observable.from(this.offerService.getOffers())
        .subscribe(resolve);
    });
  }
}
