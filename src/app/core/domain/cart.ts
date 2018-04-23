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
  dietType?: string;

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
  dietType?: string;
}

export interface Cart {
  id?: string;
  items?: Item[];
  combos?: Combo[];
  offerId?: string;
  normalPrice?: Price;

  pickupAtStore?: boolean;

  // from response
  price?: Price;
  totalPrice?: Price;
  vatPrice?: Price;
  discountedTotalPrice?: Price;
  deliveryCharge?: Price;
  finalPrice?: Price;
  notification?: Notification;
}
