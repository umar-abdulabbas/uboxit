import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';

@Component({
  selector: 'app-makeyourcombo-offer',
  templateUrl: './makeyourcombo-offer.component.html',
  styleUrls: ['./makeyourcombo-offer.component.css'],
  
})
export class MakeyourcomboOfferComponent implements OnInit, OnDestroy {
 
  msgFromMakeYourOwnCombo:any = {
      starter:true,
      maindish:false,
      dessert:false,

  }
  subFromMakeYourOwnCombo:Subscription;
  isActivestarters = true;
  isActiveMainDish:boolean;
  isActiveDessert:boolean;
  constructor( private makeyourowncomboservice:MakeYourOwnComboService) { 
      this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe( msgFromMakeYourOwnCombo => { this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;});
      if(this.msgFromMakeYourOwnCombo){
        console.log('dd',this.msgFromMakeYourOwnCombo.starter);
      }
     
  }
  ngOnInit() {
      
    
  }

  ngOnDestroy(){
     this.subFromMakeYourOwnCombo.unsubscribe();
  }

 
  onselectedStarter():void{
    this.makeyourowncomboservice.updateFields(false, true, false, 'd1');
  }
  onselectedMainDish():void{
    this.makeyourowncomboservice.updateFields(false, false, true, 'd1');
  }
}
