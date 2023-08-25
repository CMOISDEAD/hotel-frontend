import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";
import axios from "axios";
import useHotelStore from "../../store/store";
import { RoomModel } from "../../models/room.model";

type Props = {
  id: string;
  room: RoomModel;
};

export const RoomsModal = ({ id, room }: Props) => {
  const { number, description, capacity, price, status, aviable } = room;

  const handleDelete = async () => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/rooms/${id}`);
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/rooms`);
    useHotelStore.setState({ rooms: data });
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">{number}</h3>
        <div className="py-4">
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
