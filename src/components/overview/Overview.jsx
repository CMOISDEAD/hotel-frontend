import { BedsViews } from "./BedsView";
import { ReservationsView } from "./ReservationsView";
import { RoomsView } from "./RoomsView";

export const Overview = () => {
  return (
    <>
      <h3 className="text-3xl font-bold">Vista general</h3>
      <ReservationsView />
      <RoomsView />
      <BedsViews />
      <h5 className="my-2 text-xl font-bold">Clientes</h5>
    </>
  );
};
