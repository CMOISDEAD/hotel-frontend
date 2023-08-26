import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { ReservationModel } from "../../models/reservation.model";
import useHotelStore from "../../store/store";
import checkStore from "../../utils/checkStore";
import { AddReservation } from "./AddReservation";

export const ReservationsView = () => {
  const [reservationsList, setReservationsList] = useState<ReservationModel[]>(
    [],
  );
  const reservations = useHotelStore((state) => state.reservations);

  useEffect(() => {
    setReservationsList(reservations);
  }, [reservations]);

  const handleAdd = () => {
    window.createReservation.showModal();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/reservations/${id}`);
    checkStore();
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-fixed">
          <thead>
            <tr>
              <th>
                <button
                  className="btn btn-circle btn-primary"
                  onClick={handleAdd}
                >
                  +
                </button>
              </th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Habitacion</th>
            </tr>
          </thead>
          <tbody>
            {reservationsList.length > 0 ? (
              reservationsList.map((reservation, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:cursor-pointer hover:bg-base-200"
                >
                  <th>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(reservation.id)}
                    >
                      <IoTrashOutline />
                    </button>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="font-bold">{reservation.user.name}</div>
                      <div className="text-sm opacity-50">
                        {reservation.user.lastname}
                      </div>
                    </div>
                  </td>
                  <td>
                    <div
                      className="tooltip"
                      data-tip={moment(
                        reservation.dateOut.toString(),
                      ).fromNow()}
                    >
                      {moment(reservation.dateIn.toString()).format(
                        "DD MMM YYYY",
                      )}
                    </div>
                    <br />
                    <span className="badge badge-ghost badge-sm truncate">
                      {moment(reservation.dateOut.toString()).format(
                        "DD MMM YYYY",
                      )}
                    </span>
                  </td>
                  <td>Habitacion {reservation.room.number}</td>
                  <td>
                    <Link to={`/reservaciones/${reservation.id}`}>
                      <button className="btn btn-ghost">detalles</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5} className="text-center">
                  No hay reservaciones registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddReservation />
    </>
  );
};
