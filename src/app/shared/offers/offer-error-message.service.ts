import { Injectable } from '@angular/core';

@Injectable()
export class OfferErrorMessageService {
  offerErrorMessages: string[] = ['Master'];

  addOfferErrorMessage(offerErrorMessage: string) {
    this.offerErrorMessages.push(offerErrorMessage);
  }

  clearOfferErrorMessage() {
    this.offerErrorMessages = [];
  }

}
