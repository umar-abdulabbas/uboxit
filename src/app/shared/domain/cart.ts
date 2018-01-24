export interface ComboRequest {
  id?: string; // customised combo will not have id
  count: number;
  items?: ItemRequest[];
}

export interface ItemRequest {
  id: string;
  count: number;
}

export interface Cart {
  id?: string;
  items?: ItemRequest[];
  combos?: ComboRequest[];
  offerId: string;
}
