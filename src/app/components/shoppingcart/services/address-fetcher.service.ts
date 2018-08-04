import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class AddressFetcherService {

  constructor(private httpClient: HttpClient) {}

  fetchAddress(postalCode: string, houseNumber: string) {
    return this.httpClient.post(
      `/address-api/address`,
      {postalCode: postalCode, houseNumber: houseNumber}).pipe(
        map((res: any) => {
          if (!res.error && !!res._embedded.addresses[0]) {
            const address = res._embedded.addresses[0];
            return { city: address.city.label, street: address.street};
          } else {
            return { city: '', street: ''};
          }
      })
    );
  }
}
