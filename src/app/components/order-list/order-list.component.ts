import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { MatTableDataSource, MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit, AfterViewInit {

  displayedOrderColumns = ['id', 'order', 'customerName', 'mobileNumber', 'emailId', 'price', 'paymentStatus', 'paymentType', 'deliveryType', 'street', 'area', 'postalCode'];
  displayedItemColumns = ['no', 'name', 'count'];
  orders = ORDERS;
  items = ITEMS;
  selectedOrder: string;

  dataSource: MatTableDataSource<any>;
  itemDataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource<any>(this.orders);
    this.itemDataSource = new MatTableDataSource<any>(this.items);
    // this.http.get('order').subscribe((o: any[]) => {
    //   this.orders = o;
    //   console.log(this.orders);
    //   // o.forEach(obj => {
    //   //   const ordersMap = new Map<string, string>();
    //   //   Object.keys(obj).forEach(key => {
    //   //     ordersMap.set(key, obj[key]);
    //   //   });
    //   //   console.log(ordersMap)
    //   //   this.orders.push(ordersMap);
    //   // });
    //   console.log(this.orders);
    // });
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
    this.http.get(`shop/${shopId}`).subscribe(s => console.log(s));
  }
}

const ITEMS = [
  {
    "id": "60002",
    "name": "Maaza Mango",
    "count": 3,
    "imageUrls": [
      "https://res.cloudinary.com/your-delicacy-bv/image/upload/Maaza%20Mango"
    ],
    "description": "Maaza, the Indian word for enjoy, is worlds largest brand of tropical fruit drinks.",
    "price": {
      "amount": 10.5,
      "currencyCode": "EUR"
    },
    "allowedForCustomCombo": false,
    "allowedForIndividualSale": false
  },
  {
    "id": "60002",
    "name": "Idli",
    "count": 5,
    "imageUrls": [
      "https://res.cloudinary.com/your-delicacy-bv/image/upload/Maaza%20Mango"
    ],
    "description": "Maaza, the Indian word for enjoy, is worlds largest brand of tropical fruit drinks.",
    "price": {
      "amount": 10.5,
      "currencyCode": "EUR"
    },
    "allowedForCustomCombo": false,
    "allowedForIndividualSale": false
  },
  {
    "id": "60002",
    "name": "Biryani",
    "count": 5,
    "imageUrls": [
      "https://res.cloudinary.com/your-delicacy-bv/image/upload/Maaza%20Mango"
    ],
    "description": "Maaza, the Indian word for enjoy, is worlds largest brand of tropical fruit drinks.",
    "price": {
      "amount": 10.5,
      "currencyCode": "EUR"
    },
    "allowedForCustomCombo": false,
    "allowedForIndividualSale": false
  },
  {
    "id": "60002",
    "name": "Dosa",
    "count": 5,
    "imageUrls": [
      "https://res.cloudinary.com/your-delicacy-bv/image/upload/Maaza%20Mango"
    ],
    "description": "Maaza, the Indian word for enjoy, is worlds largest brand of tropical fruit drinks.",
    "price": {
      "amount": 10.5,
      "currencyCode": "EUR"
    },
    "allowedForCustomCombo": false,
    "allowedForIndividualSale": false
  },
  {
    "id": "60002",
    "name": "Vada",
    "count": 8,
    "imageUrls": [
      "https://res.cloudinary.com/your-delicacy-bv/image/upload/Maaza%20Mango"
    ],
    "description": "Maaza, the Indian word for enjoy, is worlds largest brand of tropical fruit drinks.",
    "price": {
      "amount": 10.5,
      "currencyCode": "EUR"
    },
    "allowedForCustomCombo": false,
    "allowedForIndividualSale": false
  }
];


const ORDERS = [
  {
    "id": 11,
    "orderConfirmation": "5RSC0J",
    "shopId": "26d9dfb0-b4fe-4f02-972f-5c0a8f09029b",
    "customerName": "Helllo ",
    "deliveryAddress": {
      "id": null,
      "area": "Amstelveen",
      "houseNumber": "12B",
      "landMark": "asdf asdf adsflkja dsfoi ",
      "postalCode": "123dd",
      "street": "asdf adsf asdf asdf jafdjlakj fadf"
    },
    "emailId": "sb.prabu@gmail.com",
    "mobileNumber": "3453453",
    "pickupAtStore": false,
    "payInPerson": false,
    "paymentStatus": "INITIATED",
    "paymentType": "IN_PERSON",
    "price": 10.5
  },
  {
    "id": 12,
    "shopId": "26d9dfb0-b4fe-4f02-972f-5c0a8f09029c",
    "customerName": "Helllo ",
    "deliveryAddress": {
      "id": null,
      "area": "Amstelveen",
      "houseNumber": "12B",
      "landMark": "asdf asdf adsflkja dsfoi ",
      "postalCode": "123dd",
      "street": "asdf adsf asdf asdf jafdjlakj fadf"
    },
    "emailId": "sb.prabu@gmail.com",
    "mobileNumber": "3453453",
    "pickupAtStore": false,
    "payInPerson": false,
    "paymentStatus": "INITIATED",
    "price": 0
  },
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342@gmail.com","mobileNumber":"12341234","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.34e2@gmail.com","mobileNumber":"17682341234","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342r@gmail.com","mobileNumber":"1234761234","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.34r2@gmail.com","mobileNumber":"1234541234","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.3f42@gmail.com","mobileNumber":"1234341234","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.t42@gmail.com","mobileNumber":"1234127434","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342@gmail.com","mobileNumber":"1234123454","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342@gmail.com","mobileNumber":"1234123490","pickupAtStore":true,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342@gmail.com","mobileNumber":"1234122334","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0},
  {"id":12,"shopId":"26d9dfb0-b4fe-4f02-972f-5c0a8f09029d","customerName":"asdf ","deliveryAddress":{"id":null,"area":"Amstelveen","houseNumber":"12B","landMark":"asdf asdf adsflkja dsfoi ","postalCode":"1234FR","street":"asdf fadf"},"emailId":"sb.342@gmail.com","mobileNumber":"12341224334","pickupAtStore":false,"payInPerson":true,"paymentStatus":"INITIATED","price":0}
];
