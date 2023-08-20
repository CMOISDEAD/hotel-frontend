import moment from "moment";
import { reservations } from "../../utils/reservations";

export const ReservationsView = () => {
  return (
    <>
      <h5 className="my-2 text-xl font-bold">Reservaciones</h5>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Habitacion</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {reservations.map((reservation, i) => (
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
          <tfoot>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Fecha</th>
              <th>Habitacion</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
