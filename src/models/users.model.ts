import { ReservationModel } from "./reservation.model";

export interface UserModel {
  id?: string;
  rol?: roleEnum;
  name: string;
  lastname: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  username: string;
  password: string;
  reservations?: ReservationModel[];
}
