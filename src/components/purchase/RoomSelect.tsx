import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";

import { RoomModel } from "../../models/room.model";
import useHotelStore from "../../store/store";

export const RoomSelect = ({ handleRoom, selected }: any) => {
  const rooms = useHotelStore((state) => state.rooms).filter(
    (room) => room.aviable,
  );

  return (
    <div className="grid grid-cols-1 grid-flow-row lg:grid-cols-3 lg:grid-rows-1 lg:overflow-x-auto gap-4 py-5">
      {rooms.length !== 0
        ? rooms.map((room, i) => (
            <Room
              room={room}
              key={i}
              callback={handleRoom}
              selected={selected}
            />
          ))
        : "no hay habitaciones disponibles"}
    </div>
  );
};

const Room = ({
  room,
  callback,
  selected,
}: {
  room: RoomModel;
  callback: any;
  selected: string;
}) => {
  const {
    id,
    number,
    description,
    capacity,
    price,
    aviable,
    status,
    beds,
    image,
  } = room;
  return (
    <div
      className={`card border ${
        selected === id ? "border-primary" : "border-base-200"
      } shadow-xl md:w-[30vw]`}
      key={id}
    >
      <figure>
        <img
          src={image}
          alt={`${number} image`}
          className="h-72 w-full object-cover"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Habitacion {number}</h2>
        <ul>
          <li className="flex content-center items-center gap-2">
            <p className="truncate">{description}</p>
          </li>
          <li className="flex content-center items-center gap-2">
            <span className="inline-flex content-center items-center gap-1">
              <BsPeople />
              Capacidad:
            </span>
            {capacity}
          </li>
          <li className="flex content-center items-center gap-2">
            <span className="inline-flex content-center items-center gap-1">
              <IoPricetagOutline />
              Precio:
            </span>
            {price} $
          </li>
          <li className="flex content-center items-center gap-2">
            <span className="inline-flex content-center items-center gap-1">
              {aviable ? (
                <AiOutlineCheckCircle className="text-green-600" />
              ) : (
                <AiOutlineCloseCircle className="text-red-500" />
              )}
              Estado:
            </span>
            {status}
          </li>
          <li className="flex content-center items-center gap-2">
            <span className="inline-flex content-center items-center gap-1">
              <BiBed />
              Cantidad de camas:
            </span>
            {beds && beds.length > 0 ? beds.length : 0}
          </li>
        </ul>
        <div className="card-actions justify-end">
          <button
            className="btn btn-primary"
            disabled={!aviable || selected === id}
            onClick={() => callback(room)}
          >
            {selected === id ? "Seleccionado" : "Seleccionar"}
          </button>
        </div>
      </div>
    </div>
  );
};
