export interface Product {
  id: string;
  image: string;
  title: string;
  description?: string;
  category: string;
  discountedPrice: string;
  normalPrice: string;
  ingredients: string;
  dietType: DietType;

  count: number; // taken from the cart (while loading the page, need to show the selected count on the combo/item)
}

export interface Combo extends Product {
  anySpecTitle: string;
  favourite: string;
  items: Item[];

  // ui related
  itemNames: string;
}

export interface Item extends Product {
  type: string; // starter, main-course, dessert

  allowedForCustomCombo: boolean;
  allowedForIndividualSale: boolean;
}

export interface Offer {
  offerId: string;
  combos: Combo[];
  items: Item[];
  availableItemsForCustomCombo: boolean;
  availableItemsForIndividualSale: boolean;
}

export enum DietType {
  Veg = 'VEGETARIAN',
  NonVeg = 'NON_VEGETARIAN'
}

export enum ItemType {
  Starters = 1,
  MainDish,
  Dessert
}
