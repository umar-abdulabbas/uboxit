import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';



@Injectable()
export class MakeYourOwnComboService {
    private subject = new Subject<any>();

    updateFields(isActiveStarter: boolean, isActiveMainDish:boolean, isActiveDessert:boolean, selectedProductId:string){
            this.subject.next({
                starter:isActiveStarter, 
                maindish:isActiveMainDish, 
                dessert:isActiveDessert,
                productid:selectedProductId
                
            });
    }
  
    getUpdateFields():Observable<any>{
        return this.subject.asObservable();
    }
}