import axios from "axios";
import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import { RoomModel } from "../../models/room.model";
import checkStore from "../../utils/checkStore";

type Props = {
  id: string;
  room: RoomModel;
};

export const RoomsModal = ({ id, room }: Props) => {
  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/rooms/${id}`);
    checkStore();
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Habitacion {room.number}</h3>
        <div className="py-4">
          <ul>
            <li className="flex content-center items-center gap-2">
              <p className="truncate">{room.description}</p>
            </li>
            <li className="flex content-center items-center gap-2">
              <BsPeople />
              {room.capacity}
            </li>
            <li className="flex content-center items-center gap-2">
              <IoPricetagOutline />
              {room.price} $
            </li>
            <li className="flex content-center items-center gap-2">
              {room.aviable ? (
                <AiOutlineCheckCircle className="text-green-600" />
              ) : (
                <AiOutlineCloseCircle className="text-red-500" />
              )}
              {room.status}
            </li>
            <li>
              {room.reservations && room.reservations.length > 0 ? (
                <span>Reservada por: {room.reservations[0].user.name}</span>
              ) : (
                "no hay reservas"
              )}
            </li>
          </ul>
          <button className="btn btn-error mt-4 w-full" onClick={handleDelete}>
            delete
          </button>
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
