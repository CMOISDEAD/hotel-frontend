import { AiOutlineCheckCircle, AiOutlineCloseCircle } from "react-icons/ai";
import { IoPricetagOutline } from "react-icons/io5";
import { BsPeople } from "react-icons/bs";

export const RoomsModal = ({ id, room }) => {
  const { name, description, capacity, price, image, status, aviable } = room;
  return (
    <dialog id={id} className="modal">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">{name}</h3>
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
        </div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
