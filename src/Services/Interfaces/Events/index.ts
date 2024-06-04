import { Address } from "../Address";

export interface Events {
  id: number;
  name: string;
  date: string;
  area: string;
  address: Address;
  description: string;
  map: number[];
  attractions: string;
}
