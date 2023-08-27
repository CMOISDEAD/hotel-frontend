import { Link } from "react-router-dom";

import { Layout } from "../components/layouts/Layout";
import { RoomsView } from "../components/rooms/RoomsView";
import useHotelStore from "../store/store";

export const Home = () => {
  const { rooms, account } = useHotelStore((state) => ({
    rooms: state.rooms,
    account: state.account,
  }));

  return (
    <Layout>
      <div className="min-h-[80vh] flex flex-wrap flex-col content-center items-center justify-center">
        <div className="flex flex-wrap justify-start gap-10">
          <img
            className="hidden lg:block w-72"
            src="https://www.svgrepo.com/show/196781/palm-tree-beach.svg"
            alt="avatar"
          />
          <h1 className="text-center md:text-start text-6xl md:text-7xl lg:text-8xl font-bold uppercase">
            <div>Bienvenido</div>
            <div>hotels</div>
            <div className="bg-clip-text text-transparent bg-gradient-to-tr from-primary via-accent-focus to-secondary font-extrabold">
              cocora
            </div>
          </h1>
        </div>
        <div className="my-8">
          <div className="join join-vertical md:join-horizontal">
            <select
              className="select select-bordered join-item w-60"
              defaultValue=""
            >
              <option disabled value="">
                Sede
              </option>
              <option value="armenia">Armenia</option>
              <option disabled>Salento</option>
              <option disabled>Pereira</option>
            </select>
            <select
              className="select select-bordered join-item w-60"
              defaultValue=""
            >
              <option disabled value="">
                Habitación
              </option>
              {rooms
                .filter((room) => room.aviable)
                .map((room) => (
                  <option key={room.id}>Habitacion {room.number}</option>
                ))}
            </select>
            <div className="indicator">
              <span className="indicator-item badge badge-secondary">new</span>
              <button className="btn join-item w-60" disabled={!account.auth}>
                <Link to="/reservacion">Reservar</Link>
              </button>
            </div>
          </div>
          <ul className="my-2">
            <li className="text-xs text-secondary">
              * Reserva ahora en alguna de nuestras sedes.
            </li>
            <li className="text-xs text-accent">
              * Necesitas estar en tu cuenta para reservar.
            </li>
          </ul>
        </div>
      </div>
      <RoomsView />
    </Layout>
  );
};
