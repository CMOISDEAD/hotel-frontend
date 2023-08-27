import { create } from "zustand";

import { BedModel } from "../models/beds.model";
import { ReservationModel } from "../models/reservation.model";
import { RoomModel } from "../models/room.model";
import { UserModel } from "../models/users.model";

interface HotelStore {
  beds: BedModel[];
  rooms: RoomModel[];
  users: UserModel[];
  reservations: ReservationModel[];
  account: any;
}

const useHotelStore = create<HotelStore>((set) => ({
  beds: [],
  rooms: [],
  users: [],
  reservations: [],
  account: {
    auth: false,
  },
}));

export default useHotelStore;
