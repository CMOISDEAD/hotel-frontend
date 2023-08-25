import { Reservation } from "./reservation.model";

export interface User {
  id: string;
  role: roleEnum;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  reservation: Reservation[];
}
