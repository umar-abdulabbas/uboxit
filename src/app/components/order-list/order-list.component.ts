import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort, MatSortable } from '@angular/material';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit, AfterViewInit, OnDestroy {

  displayedOrderColumns = ['id', 'order', 'orderTime', 'deliveryTime', 'customerName', 'mobileNumber', 'price', 'paymentStatus', 'paymentType', 'deliveryType', 'address', 'postalCode', 'emailId'];
  displayedItemColumns = ['no', 'name', 'items', 'count'];
  orders = [];
  items = [];
  selectedOrder: string;
  remarks: string;
  isModelActive = false;

  notificationAudio = new Audio('../../../assets/audio/slow-spring-board.mp3');

  refreshes = [{name: '1 min', value: 60000}, {name: '2 mins', value: 120000}, {name: '5 mins', value: 300000}];
  refreshRate = 6000000;

  dataSource = new MatTableDataSource<any>(undefined);
  itemDataSource = new MatTableDataSource<any>(undefined);

  subscription: Subscription;

  invoiceReceipt: string;
  kitchenReceipt: string;

  invoiceReceiptFrame: SafeResourceUrl;
  kitchenReceiptFrame: SafeResourceUrl;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('audioOption') audioPlayerRef: ElementRef;

  constructor(private http: HttpClient, private route: ActivatedRoute, private sanitizer: DomSanitizer) {
  }

  ngOnInit() {
    this.getOrders();
    this.sortById();

    this.subscription = Observable.interval(this.refreshRate).map(() => {
      this.getOrders();
    }).subscribe(() => console.log('refreshed'));
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

  loadOrder(shopId: string, orderId: string) {
    console.log('loading shop');
    this.selectedOrder = orderId;
    this.http.get(`order-api/order/${orderId}`).subscribe((order: any) => {
      console.log(order);
      const matchingOrder = this.orders.find(o => o.id === orderId);
      this.remarks = matchingOrder.remarks;
      let items = [];
      if (!!order.orderedItems) {
        items = [...order.orderedItems];
      }
      if (!!order.combos) {
        items = [...items, ...order.combos];
      }
      this.itemDataSource = new MatTableDataSource<any>(items);
      this.invoiceReceipt = order.invoiceReceipt;
      this.kitchenReceipt = order.kitchenReceipt;
    });
  }

  getItemNamesInCombo(itemsInCombo: any[]) {
    return itemsInCombo.map(i => i.name);
  }

  handleNewEntry(entry: any) {
    entry.newEntry = false;
  }

  closeModel(): void {
    this.isModelActive = false;
  }

  print() {
    this.isModelActive = true;
    this.kitchenReceiptFrame = this.sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${this.kitchenReceipt}`);
    this.invoiceReceiptFrame = this.sanitizer.bypassSecurityTrustResourceUrl(`data:application/pdf;base64,${this.invoiceReceipt}`);
    // const win = window.open();
    // win.document.write('<iframe src="data:application/pdf;base64,' + this.pdf + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px;
    // width:100%; height:100%;"allowfullscreen></iframe>');
    //
    // const win2 = window.open();
    // win2.document.write('<iframe src="data:application/pdf;base64,' + this.pdf + '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px;
    // width:100%; height:100%;"allowfullscreen></iframe>');

  }

  private async getOrders() {
    this.route.queryParams.subscribe(params => {
      const durationValue = params.durationValue;
      const durationUnit = params.durationUnit;

      let queryParams = durationValue ? `durationValue=${durationValue}` : '';
      queryParams = queryParams + (durationUnit ? `&durationUnit=${durationUnit}` : '');

      this.http.get(`order-api/order?${queryParams}`).subscribe((o: any[]) => {
        if (this.orders.length > 0) {
          if (o.length > this.orders.length) {
            this.notificationAudio.loop = true;
            this.notificationAudio.play();
            this.indicateNewEntries(this.orders, o);
            this.initializeSource(o);
          }
        } else {
          this.initializeSource(o);
        }
        this.initializePaginator();
      });
    });
  }

  private initializeSource(orders: any[]) {
    this.orders = orders;
    this.dataSource = new MatTableDataSource<any>(this.orders);
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

  private indicateNewEntries(oldList: any[], newList: any[]) {
    const newAdditions = newList.filter(n => !oldList.map(o => o.id).includes(n.id));
    newAdditions.forEach(n => n['newEntry'] = true);
  }
}
