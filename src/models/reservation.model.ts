import { UserModel } from "./users.model";
import { RoomModel } from "./room.model";

export interface ReservationModel {
  id: string;
  room: { connect: RoomModel } | RoomModel;
  roomId?: string;
  user: { connect: UserModel } | UserModel;
  userId?: string;
  dateIn: String;
  dateOut: String;
  price: number;
  status: "pendiente" | "pagada" | "cancelada";
}
