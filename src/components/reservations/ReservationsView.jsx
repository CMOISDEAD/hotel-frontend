import { useState, useEffect } from "react";
import useHotelStore from "../../store/store";
import moment from "moment";
import { AddReservation } from "./AddReservation";

export const ReservationsView = () => {
  const [reservationsList, setReservationsList] = useState([]);
  const reservations = useHotelStore((state) => state.reservations);

  useEffect(() => {
    setReservationsList(reservations);
  }, [reservations]);

  const handleAdd = () => {
    window.addReservation.showModal();
  };

  return (
    <>
      <h5 className="my-2 text-xl font-bold">Reservaciones</h5>
      <div className="overflow-x-auto">
        <table className="table">
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
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservationsList.map((reservation, i) => (
              <tr key={i}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={reservation.image}
                          alt={`reservation ${reservation.name}`}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{reservation.name}</div>
                      <div className="text-sm opacity-50">
                        {reservation.number}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div
                    className="tooltip"
                    data-tip={moment(reservation.checkIn).fromNow()}
                  >
                    {moment(reservation.checkIn).format("DD MMM YYYY")}
                  </div>
                  <br />
                  <span className="badge badge-ghost badge-sm truncate">
                    Dias pagados: {reservation.numberNights}
                  </span>
                </td>
                <td>Habitacion {reservation.room}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">Detalles</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddReservation />
    </>
  );
};
