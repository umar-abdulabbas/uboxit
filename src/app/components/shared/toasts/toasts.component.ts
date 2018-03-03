import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toasts',
  templateUrl: './toasts.component.html',
  styleUrls: ['./toasts.component.scss']
})
export class ToastsComponent implements OnInit {
  public showToasts = true;
  constructor() { }

  ngOnInit() {
  }
  close() {
      this.showToasts = false;
  }
}
