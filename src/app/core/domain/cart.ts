export interface Price {
  amount: number;
  currencyCode: string;
}

export interface Combo {
  id?: string; // customised combo will not have id
  count: number;
  items?: Item[];
  discountedPrice?: Price;
  normalPrice?: Price;
}

export interface Item {
  id: string;
  count: number;
  discountedPrice?: Price;
  normalPrice?: Price;
}

export interface Cart {
  id?: string;
  items?: Item[];
  combos?: Combo[];
  offerId?: string;
  discountedPrice?: Price;
  normalPrice?: Price;
}
