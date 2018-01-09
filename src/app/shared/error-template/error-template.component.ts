import { Component, OnInit } from '@angular/core';
import { OfferErrorMessageService } from '../offers/offer-error-message.service';
@Component({
  selector: 'app-error-template',
  templateUrl: './error-template.component.html',
  styleUrls: ['./error-template.component.css']
})
export class ErrorTemplateComponent implements OnInit {

  constructor(public offerErrorMessageService:OfferErrorMessageService) { }

  ngOnInit() {
  }

}
