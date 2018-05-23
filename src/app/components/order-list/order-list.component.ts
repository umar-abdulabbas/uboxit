import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders = [];
  // ordersMap = new Map<string, string>();

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('local/order').subscribe((o: any[]) => {
      this.orders = o;
      console.log(this.orders);
      // o.forEach(obj => {
      //   const ordersMap = new Map<string, string>();
      //   Object.keys(obj).forEach(key => {
      //     ordersMap.set(key, obj[key]);
      //   });
      //   console.log(ordersMap)
      //   this.orders.push(ordersMap);
      // });
      console.log(this.orders);
    });
  }

  loadShop(shopId: string) {
    this.http.get(`shop/${shopId}`).subscribe(s => console.log(s));
  }
}
