import { RoomsView } from "./RoomsView";

export const Overview = () => {
  return (
    <>
      <h3 className="text-3xl font-bold">Vista general</h3>
      <h5 className="my-2 text-xl font-bold">Reservaciones</h5>
      <RoomsView />
      <h5 className="my-2 text-xl font-bold">Camas</h5>
      <h5 className="my-2 text-xl font-bold">Clientes</h5>
    </>
  );
};
