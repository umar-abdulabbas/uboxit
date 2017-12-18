import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()

export class CounterService{
    private subject = new Subject<any>();

    sendPlus(addCount: string){
        this.subject.next({count:addCount});
    }
    sendMinus(subCount:string){
        this.subject.next({count:subCount});

    }

    getCountInfo():Observable<any>{
            return this.subject.asObservable();
    }
}