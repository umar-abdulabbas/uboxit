import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertInvoker {

  get message(): Observable<string> {
    return this.subject.asObservable();
  }

  private subject = new Subject<string>();

  invokeNotification(message: string): void {
    this.subject.next(message);
  }
}
