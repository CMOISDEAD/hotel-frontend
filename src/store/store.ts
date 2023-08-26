import { create } from "zustand";
import { BedModel } from "../models/beds.model";
import { Room } from "../models/room.model";
import { UserModel } from "../models/users.model";
import { ReservationModel } from "../models/reservation.model";

interface HotelStore {
  beds: BedModel[];
  rooms: Room[];
  users: UserModel[];
  reservations: ReservationModel[];
}

const useHotelStore = create<HotelStore>((set) => ({
  beds: [],
  rooms: [],
  users: [],
  reservations: [],
}));

export default useHotelStore;
