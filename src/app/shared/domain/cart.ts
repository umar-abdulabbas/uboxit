export interface ComboRequest {
  id: string;
  count: number;
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
