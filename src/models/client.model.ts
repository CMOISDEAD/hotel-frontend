import { Reservation } from "./reservation.model";

export interface Client {
  id: string;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  reservation: Reservation[];
}
