import { Subject } from 'rxjs/Subject';

export class CounterService {

  get countValue() {
    return this.countSubject.asObservable();
  }

  private countSubject = new Subject<number>();
  private count = 0;

  constructor() {
    this.countSubject.next(this.count);
  }

  add() {
    this.count++;
    this.countSubject.next(this.count);
  }

  reduce() {
    this.count--;
    this.countSubject.next(this.count);
  }
}
