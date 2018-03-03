import { Component, OnInit } from '@angular/core';
import { AlertInvoker } from '../../../core/services/alert-invoker.service';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  showToasts = true;
  message: string;

  constructor(private alertInvoker: AlertInvoker) { }

  ngOnInit() {
   this.alertInvoker.message.subscribe(m => {
     if (!!m) {
       console.log(m);
       this.showToasts = true;
       this.message = m;
     }
   });
  }

  close() {
      this.showToasts = false;
  }
}
