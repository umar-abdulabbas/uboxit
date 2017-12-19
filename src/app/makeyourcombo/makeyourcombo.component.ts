import { Component, OnInit, OnDestroy, Output, EventEmitter} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { MakeYourOwnComboService } from '../shared/services/InteractionOfMakeYourOwnCombo/makeyourowncombo';
//import { OffersComponent } from '../offers/offers.component';



@Component({
  selector: 'app-makeyourcombo',
  templateUrl: './makeyourcombo.component.html',
  styleUrls: ['./makeyourcombo.component.css'],
  
})
export class MakeyourcomboComponent implements OnInit, OnDestroy{

  msgFromMakeYourOwnCombo:any;
  subFromMakeYourOwnCombo:Subscription;

  public headerColor;
  public MenuContainerWidth;
  public itemLengthid;
  isLinear = false;
  public uboxitMenu:boolean = false;
  public starters = "starters";
  public mainDish = "Main Dish";
  public dessert = "Dessert";
  public isActiveStarter:boolean=true;
  public isActiveMainDish:boolean;
  public isActiveDessert:boolean;
  public showButton:boolean;
  constructor( private makeyourowncomboservice:MakeYourOwnComboService) { 
    this.subFromMakeYourOwnCombo = this.makeyourowncomboservice.getUpdateFields().subscribe( msgFromMakeYourOwnCombo => { this.msgFromMakeYourOwnCombo = msgFromMakeYourOwnCombo;})
  }
  
  ngOnInit() {
    
    
    this.headerColor = document.getElementById('uboxitTopHeader'); //top stop the scroll window
    this.headerColor.classList.add("headerFixedShoppingCard");


  }
  setActiveColorForSelected(starter:boolean, maindish:boolean, dessert:boolean){
        this.isActiveStarter = starter;
        this.isActiveMainDish = maindish;
        this.isActiveDessert = dessert;
  }
  starterPress():void{
        this.makeyourowncomboservice.updateFields(true, false, false, '1');
        this.setActiveColorForSelected(this.msgFromMakeYourOwnCombo.starter, this.msgFromMakeYourOwnCombo.maindish, this.msgFromMakeYourOwnCombo.dessert);
  }
  mainDishPress():void{
        this.makeyourowncomboservice.updateFields(false, true, false, '2');
        this.setActiveColorForSelected(this.msgFromMakeYourOwnCombo.starter, this.msgFromMakeYourOwnCombo.maindish, this.msgFromMakeYourOwnCombo.dessert);
    }
  dessertPress():void{
        this.makeyourowncomboservice.updateFields(false, false, true, '3');
        this.setActiveColorForSelected(this.msgFromMakeYourOwnCombo.starter, this.msgFromMakeYourOwnCombo.maindish, this.msgFromMakeYourOwnCombo.dessert);
  }

  ngOnDestroy(){
    this.headerColor.classList.remove("headerFixedShoppingCard");
    this.subFromMakeYourOwnCombo.unsubscribe();
  }
    stickyHeaderValue(scrolValue){
    if (scrolValue > 50 ){
        this.uboxitMenu = true;  
    }
    else if(this.uboxitMenu && scrolValue < 5 ){
        this.uboxitMenu = false; 
    } 
   

  }
    
    



  
}

