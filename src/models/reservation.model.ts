import { User } from "./users.model";
import { Room } from "./room.model";

export interface Reservation {
  id: string;
  room: Room;
  client: User;
  dateIn: Date;
  dateOut: Date;
  price: number;
  status: "pendiente" | "pagada" | "cancelada";
}
