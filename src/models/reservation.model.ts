import { Client } from "./client.model";
import { Room } from "./room.model";

export interface Reservation {
  id: string;
  room: Room;
  client: Client;
  dateIn: Date;
  dateOut: Date;
  price: number;
  status: "pendiente" | "pagada" | "cancelada";
}
