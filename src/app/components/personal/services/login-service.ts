
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StorageService } from '../../../shared/services/storage-service';
import { Individual } from '../../../core/domain/individual';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class LoginService {

  loggedIn = new BehaviorSubject<boolean>(!!this.storageService.getUser());

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

  // if browser cookie has email get user details
  getUser(email: string) {
    if (email) {
      this.http.get<Individual>(`customer-api/individual/${email}`)
        .subscribe(res => {
          this.individual = res;
          // this.storageService.storeUser(username);
          // this.loggedIn.next(true);
        });
    }
  }

  logout() {
    this.storageService.clearUser();
    this.loggedIn.next(false);
  }
}
