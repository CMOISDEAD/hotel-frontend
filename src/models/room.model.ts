import { Bed } from "./beds.model";

export interface Room {
  id: string;
  number: number;
  description: string;
  capacity: number;
  price: number;
  image: string;
  status: statusEnum;
  aviable: boolean;
  beds: Bed[];
}
