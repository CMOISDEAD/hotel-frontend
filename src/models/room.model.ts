import { BedModel } from "./beds.model";

export interface RoomModel {
  id?: string;
  number: number;
  description: string;
  capacity: number;
  price: number;
  image: string;
  status: statusEnum;
  aviable: boolean;
  beds: {
    create: BedModel[];
  };
}
