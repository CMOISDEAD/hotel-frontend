import { ReservationModel } from "./reservation.model";

export interface UserModel {
  id?: string;
  role?: roleEnum;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  reservations?: ReservationModel[];
}
