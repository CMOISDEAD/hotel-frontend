import { BedsViews } from "./beds/BedsView";
import { ReservationsView } from "./reservations/ReservationsView";
import { RoomsView } from "./rooms/RoomsView";

export const Overview = () => {
  return (
    <>
      <h3 className="text-3xl font-bold">Vista general</h3>
      <ReservationsView />
      <RoomsView />
      <BedsViews />
    </>
  );
};
