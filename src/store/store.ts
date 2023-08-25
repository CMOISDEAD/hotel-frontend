import { create } from "zustand";
import { BedModel } from "../models/beds.model";
import { Room } from "../models/room.model";
import { User } from "../models/users.model";
import { Reservation } from "../models/reservation.model";

interface HotelStore {
  beds: BedModel[];
  rooms: Room[];
  users: User[];
  reservations: Reservation[];
}

const useHotelStore = create<HotelStore>((set) => ({
  beds: [],
  rooms: [],
  users: [],
  reservations: [],
}));

export default useHotelStore;
