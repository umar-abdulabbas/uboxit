export interface Product {
  id: string;
  image: string;
  title: string;
  description?: string;
  category: string;
  discountedPrice: string;
  normalPrice: string;
}

export interface Combo extends Product {
  anySpecTitle: string;
  favourite: string;
}

export interface Item extends Product {
  type: string; // starter, main-course, dessert
}

export enum ItemType {
  Starters = 1,
  MainDish,
  Dessert
}
