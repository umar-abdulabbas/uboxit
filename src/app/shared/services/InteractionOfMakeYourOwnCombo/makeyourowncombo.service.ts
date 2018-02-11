import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';
import { ItemType } from '../../../core/domain/offer';


@Injectable()
export class MakeYourOwnComboService {
  private subject = new Subject<any>();

  updateFields(isActiveStarter: boolean, isActiveMainDish: boolean, isActiveDessert: boolean, selectedItemId: string, selectedItemType: ItemType) {
    this.subject.next({
      starter: isActiveStarter,
      maindish: isActiveMainDish,
      dessert: isActiveDessert,
      itemId: selectedItemId,
      itemType: selectedItemType

    });
  }

  getUpdateFields(): Observable<any> {
    return this.subject.asObservable();
  }
}
