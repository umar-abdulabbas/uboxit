export interface Product {
  id: string;
  image: string;
  title: string;
  description?: string;
  category: string;
  price: string;

  count: number; // for cart
}

export interface Combo extends Product {
  anySpecTitle: string;
  favourite: string;
}

export interface Item extends Product {
  type: string; // starter, main-course, dessert
}


