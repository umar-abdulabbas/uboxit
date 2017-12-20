import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class CounterService{
    private subject = new Subject<any>();

    updateCount(addCount: number){
        this.subject.next({count:addCount});
    }


    getCountInfo():Observable<any>{
            return this.subject.asObservable();
    }
}