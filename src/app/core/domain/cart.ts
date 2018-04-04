export interface Price {
  amount: number;
  currencyCode: string;
}

export interface Notification {
  code: string;
  name: string;
  description: string;
}

export interface Combo {
  id?: string; // customised combo will not have id
  count: number;
  name?: string;
  imageUrls?: string[];
  items?: Item[];
  discountedPrice?: Price;
  normalPrice?: Price;

  // from response
  price?: Price;

  // ui related
  itemNames?: string;
}

export interface Item {
  id: string;
  name?: string;
  count: number;
  imageUrls?: string[];
  discountedPrice?: Price;
  normalPrice?: Price;

  // from response
  price?: Price;
}

export interface Cart {
  id?: string;
  items?: Item[];
  combos?: Combo[];
  offerId?: string;
  normalPrice?: Price;

  // from response
  price?: Price;
  totalPrice?: Price;
  vatPrice?: Price;
  discountedTotalPrice?: Price;
  notification?: Notification;
}
