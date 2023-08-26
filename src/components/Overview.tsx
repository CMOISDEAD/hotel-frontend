import { BedsViews } from "./beds/BedsView";
import { ReservationsView } from "./reservations/ReservationsView";
import { RoomsView } from "./rooms/RoomsView";
import { UsersView } from "./users/UsersView";

export const Overview = () => {
  return (
    <>
      <RoomsView />
      <div className="divider" />
      <BedsViews />
      <div className="divider" />
      <UsersView />
      <div className="divider" />
      <ReservationsView />
    </>
  );
};
