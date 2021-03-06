import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class CounterService {
  private subject = new Subject<any>();

  updateCount(addSubCount: number, prodId: string) {
    this.subject.next({count: addSubCount, productId: prodId});
  }

  getCountInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
