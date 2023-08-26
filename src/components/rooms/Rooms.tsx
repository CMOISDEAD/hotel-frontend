import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { BiBed } from "react-icons/bi";
import { BsPeople } from "react-icons/bs";
import { IoPricetagOutline } from "react-icons/io5";

import { RoomModel } from "../../models/room.model";
import { EditRoom } from "./EditRoom";
import { RoomsModal } from "./RoomsModal";

type Props = {
  room: RoomModel;
};

export const Rooms = ({ room }: Props) => {
  const {
    id,
    number,
    description,
    capacity,
    price,
    image,
    status,
    aviable,
    beds,
  }: RoomModel = room;

  const handleModal = () => {
    window[`detailsRoom_${id}`].showModal();
  };

  const handleEdit = () => {
    window[`editRoom_${id}`].showModal();
  };

  return (
    <>
      <div className="card border border-base-200 shadow-xl" key={id}>
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
                Capacidades de camas:
              </span>
              {beds && beds.length > 0 ? beds.length : 0}
            </li>
          </ul>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={handleEdit}>
              Editar
            </button>
            <button className="btn btn-secondary" onClick={handleModal}>
              Detalles
            </button>
            <button className="btn btn-primary" disabled={!aviable}>
              Reservar
            </button>
          </div>
        </div>
      </div>
      <RoomsModal id={`detailsRoom_${id}`} room={room} />
      <EditRoom id={`editRoom_${id}`} oldRoom={room} />
    </>
  );
};
