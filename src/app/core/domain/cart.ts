export interface Price {
  amount: number;
  currencyCode: string;
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
}

export interface Item {
  id: string;
  count: number;
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
  discountedPrice?: Price;
  normalPrice?: Price;

  // from response
  price?: Price;
  totalPrice?: Price;
  vatPrice?: Price;
}
