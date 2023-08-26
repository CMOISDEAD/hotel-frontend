import { BedModel } from "./beds.model";
import { ReservationModel } from "./reservation.model";

export interface RoomModel {
  id?: string;
  number: number;
  description: string;
  capacity: number;
  price: number;
  image: string;
  status: statusEnum;
  aviable: boolean;
  beds?: BedModel[];
  reservations?: ReservationModel[];
}
