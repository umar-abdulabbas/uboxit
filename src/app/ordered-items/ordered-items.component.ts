import { Component, OnInit } from '@angular/core';

export class OrderedItems {
  id: string;
  image: string;
  title: string;
  anySpecTitle: string;
  types: string;
  price: string;
  favourite: string;
}

const ORDERED: OrderedItems[] = [
  {
    id: '1',
    image: 'assets/images/banner1.jpg',
    title: 'Rajma Chawal',
    anySpecTitle: 'Meal of the day',
    types: 'Indian',
    price: '100',
    favourite: '5'
  },
  {
    id: '2',
    image: 'assets/images/banner2.jpg',
    title: 'Rajma Chawal',
    anySpecTitle: 'Meal of the day',
    types: 'Indian',
    price: '100',
    favourite: '5'
  },
  {
    id: '3',
    image: 'assets/images/banner3.jpg',
    title: 'Rajma Chawal',
    anySpecTitle: 'Meal of the day',
    types: 'Indian',
    price: '100',
    favourite: '5'
  },
  {
    id: '4',
    image: 'assets/images/banner4.jpg',
    title: 'Rajma Chawal',
    anySpecTitle: 'Meal of the day',
    types: 'Indian',
    price: '100',
    favourite: '5'
  },

];

@Component({
  selector: 'app-ordered-items',
  templateUrl: './ordered-items.component.html',
  styleUrls: ['./ordered-items.component.css']
})
export class OrderedItemsComponent implements OnInit {
  ordered = ORDERED;

  constructor() {
  }

  ngOnInit() {
  }

}
