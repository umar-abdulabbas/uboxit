import { Component, OnInit, OnDestroy, OnChanges } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
@Component({
  selector: 'app-makeyourcombo-offer',
  templateUrl: './makeyourcombo-offer.component.html',
  styleUrls: ['./makeyourcombo-offer.component.css'],
  
})
export class MakeyourcomboOfferComponent implements OnInit, OnChanges, OnDestroy {
 
  msgFromMakeYourOwnCombo:any;
  subFromMakeYourOwnCombo:Subscription;
  isActivestarters = true;
  isActiveMainDish:boolean;
  isActiveDessert:boolean;
  constructor( private makeyourowncomboservice:MakeYourOwnComboService) { 
      this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe( msgFromMakeYourOwnCombo => { this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo; console.log(this.msgFromMakeYourOwnCombo)});
    
     
  }
  ngOnInit() {
      
    
  }

  ngOnDestroy(){

  }

  ngOnChanges(){
    if(this.msgFromMakeYourOwnCombo){
      console.log('dd',this.msgFromMakeYourOwnCombo)
      this.isActivestarters = this.msgFromMakeYourOwnCombo.starter;
      this.isActiveMainDish = this.msgFromMakeYourOwnCombo.maindish;
      this.isActiveDessert = this.msgFromMakeYourOwnCombo.dessert;
    }
  }
  onselectedValue():void{
    this.makeyourowncomboservice.updateFields(false, false, false, 'umar');
  }
}
