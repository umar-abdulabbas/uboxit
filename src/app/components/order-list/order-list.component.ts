import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {

  displayedOrderColumns = ['id', 'order', 'orderTime', 'deliveryTime', 'customerName', 'mobileNumber', 'price', 'paymentStatus', 'paymentType', 'deliveryType', 'address', 'postalCode', 'emailId'];
  displayedItemColumns = ['no', 'name', 'items', 'count'];
  orders = [];
  items = [];
  selectedOrder: string;
  remarks: string;

  dataSource = new MatTableDataSource<any>(undefined);
  itemDataSource = new MatTableDataSource<any>(undefined);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('order-api/order').subscribe((o: any[]) => {
      this.orders = o;
      this.dataSource = new MatTableDataSource<any>(this.orders);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.sort.sort(<MatSortable>{
          id: 'id',
          start: 'desc'
        }
      );
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
      const orderedItems = [...s.items, ...s.combos];
      this.itemDataSource = new MatTableDataSource<any>(orderedItems);
    });
  }

  getItemNamesInCombo(itemsInCombo: any[]) {
    return itemsInCombo.map(i => i.name);
  }
}
