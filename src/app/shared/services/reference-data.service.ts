import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject } from 'rxjs/ReplaySubject';

@Injectable()
export class ReferenceDataService {

  private referenceDataSubject = new ReplaySubject<any>();

  get referenceData() {
    return this.referenceDataSubject.asObservable();
  }

  constructor(private http: HttpClient) {
  }

  async getReferenceData() {
    const referenceData = await this.http.get('/offer-api/referencedata').toPromise();
    this.referenceDataSubject.next(referenceData);
  }
}
