import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { RoomsModal } from "./RoomsModal";

export const Rooms = ({ room }) => {
  const { id, name, description, capacity, price, image, status, aviable } =
    room;
  const handleModal = () => {
    window[id].showModal();
  };

  return (
    <>
      <div className="card border border-base-200 shadow-xl" key={id}>
        <figure>
          <img src={image} alt={name} className="h-72 w-full object-cover" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <ul>
            <li className="flex content-center items-center gap-2">
              <p className="truncate">{description}</p>
            </li>
            <li className="flex content-center items-center gap-2">
              <BsPeople />
              {capacity}
            </li>
            <li className="flex content-center items-center gap-2">
              <IoPricetagOutline />
              {price} $
            </li>
            <li className="flex content-center items-center gap-2">
              {aviable ? (
                <AiOutlineCheckCircle className="text-green-600" />
              ) : (
                <AiOutlineCloseCircle className="text-red-500" />
              )}
              {status}
            </li>
          </ul>
          <div className="card-actions justify-end">
            <button className="btn btn-secondary" onClick={handleModal}>
              Detalles
            </button>
            <button className="btn btn-primary" disabled={!aviable}>
              Reservar
            </button>
          </div>
        </div>
      </div>
      <RoomsModal id={id} room={room} />
    </>
  );
};