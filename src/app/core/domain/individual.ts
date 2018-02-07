export interface MemberShip {
  name: string;
  number: string;
  points: number;
}

export interface Individual {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  mobileNumber: string;
  customerId: string;
  membership: MemberShip;
}
