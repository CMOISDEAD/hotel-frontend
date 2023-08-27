import { IoPricetagOutline } from "react-icons/io5";

export const PurchaseView = ({ reservation, handlePay }: any) => {
  return (
    <div className="card bg-base-200 p-5">
      <div className="card-body">
        <div className="flex flex-wrap gap-4 items-center justify-between content-center">
          <div>
            <ul>
              <li>
                <span className="inline-flex content-center items-center gap-1 text-xl lg:text-2xl font-semibold">
                  <IoPricetagOutline />
                  {`Habitacion ${reservation.room.connect.number}`}
                </span>
              </li>
              <li>
                <span className="inline-flex content-center items-center gap-1 text-xl lg:text-2xl font-semibold">
                  <IoPricetagOutline />
                  {`Descripcion: ${reservation.room.connect.description}`}
                </span>
              </li>
              <li>
                <span className="inline-flex content-center items-center gap-1 text-xl lg:text-2xl font-semibold">
                  <IoPricetagOutline />
                  {`Capacidad: ${reservation.room.connect.capacity} personas`}
                </span>
              </li>
              <li>
                <span className="inline-flex content-center items-center gap-1 text-xl lg:text-2xl font-semibold">
                  <IoPricetagOutline />
                  {`Precio: $ ${reservation.room.connect.price}`}
                </span>
              </li>
            </ul>
          </div>
          <div className="stats bg-primary text-primary-content">
            <div className="stat">
              <div className="stat-title">Precio de habitacion</div>
              <div className="stat-value">
                $ {reservation.room.connect.price}
              </div>
              <div className="stat-actions">
                <button className="btn btn-sm btn-success">Habitacion</button>
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Precio con gastos adicionales</div>
              <div className="stat-value">
                $ {reservation.room.connect.price} + $ 40
              </div>
              <div className="stat-actions">
                <button className="btn btn-sm">Habitacion</button>
                <button className="btn btn-sm">Camas extra</button>
              </div>
            </div>
          </div>
        </div>
        <button
          className="btn btn-primary w-full my-2"
          onClick={handlePay}
          disabled={
            !reservation.room.connect.id || !reservation.user.connect.id
          }
        >
          Pagar
        </button>
      </div>
    </div>
  );
};
