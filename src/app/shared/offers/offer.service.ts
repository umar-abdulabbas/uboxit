import { Injectable} from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { of } from 'rxjs/observable/of';
import { Offer } from './offer';
import { OFFERS } from './mock-offer';

@Injectable()
export class OfferService{
     constructor(){

     }
     getOffers():Observable<Offer[]>{
        return of (OFFERS);
     }
}