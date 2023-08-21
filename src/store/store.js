import { create } from "zustand";

const useHotelStore = create((set) => ({
  beds: [],
  rooms: [],
  clients: [],
  reservations: [],
  setBeds: (beds) => set({ beds }),
  setRooms: (rooms) => set({ rooms }),
  setClients: (clients) => set({ clients }),
  setReservations: (reservations) => set({ reservations }),
}));

export default useHotelStore;
