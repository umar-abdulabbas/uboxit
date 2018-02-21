
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../../shared/services/storage-service';
import { Individual } from '../../../core/domain/individual';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  loggedIn = new BehaviorSubject<boolean>(false);
  individual: Individual;

  constructor(private http: HttpClient,
              private storageService: StorageService) {
  }

  signUp(req: any) {
    this.http.post<Individual>('customer-api/individual', req)
      .subscribe(res => {
        console.log(res);
        this.individual = res;
        // this.storageService.storeUser(username);
        // this.loggedIn.next(true);
      });
  }

  login(username: string, password: string) {
    this.http.post<Individual>('customer-api/individual', {username: username, password: password})
      .subscribe(res => {
        console.log(res);
        this.individual = res;
        this.storageService.storeUser(username);
        this.loggedIn.next(true);
      });
  }
}
