import { RoomModel } from "./room.model";

export interface BedModel {
  id?: string;
  type: string;
  room?:
    | {
        connect: RoomModel;
      }
    | RoomModel;
  roomId?: string;
  status: statusEnum;
  aviable: boolean;
}
