import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedOrderColumns = ['id', 'order', 'orderTime', 'deliveryTime', 'customerName', 'mobileNumber', 'price', 'paymentStatus', 'paymentType', 'deliveryType', 'address', 'postalCode', 'emailId'];
  displayedItemColumns = ['no', 'name', 'items', 'count'];
  orders = [];
  items = [];
  selectedOrder: string;
  remarks: string;

  notificationAudio = new Audio('../../../assets/audio/slow-spring-board.mp3');

  refreshes = [{name : '1 min', value: 60000}, {name : '2 mins', value: 120000}, {name : '5 mins', value: 300000}];
  refreshRate = 60000;

  dataSource = new MatTableDataSource<any>(undefined);
  itemDataSource = new MatTableDataSource<any>(undefined);

  subscription: Subscription;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getOrders();
    this.sortById();

    this.subscription = Observable.interval(this.refreshRate).map(() => {
      this.getOrders();
    }).subscribe(() =>  console.log('refreshed'));
  }

  ngAfterViewInit() {
    this.initializePaginator();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('click')
  onClick() {
    this.notificationAudio.pause();
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  loadShop(shopId: string, orderId: string) {
    console.log('loading shop');
    this.selectedOrder = orderId;
    this.http.get(`shop-api/shop/${shopId}`).subscribe((s: any) => {
      console.log(s);
      const matchingOrder = this.orders.find(o => o.shopId === shopId);
      this.remarks = matchingOrder.remarks;
      const orderedItems = [...s.items, ...s.combos].filter(e => e); // filter to remove undefined items/combos
      this.itemDataSource = new MatTableDataSource<any>(orderedItems);
    });
  }

  getItemNamesInCombo(itemsInCombo: any[]) {
    return itemsInCombo.map(i => i.name);
  }

  private getOrders() {
    this.http.get('order-api/order').subscribe((o: any[]) => {
      if (this.orders.length > 0) {
        if (o.length > this.orders.length) {
          this.notificationAudio.loop = true;
          this.notificationAudio.play();
        }
      }
      this.orders = o;
      this.dataSource = new MatTableDataSource<any>(this.orders);

      this.initializePaginator();
    });
  }

  private initializePaginator() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  private sortById() {
    this.sort.sort(<MatSortable>{
        id: 'id',
        start: 'desc'
      }
    );
  }
}
