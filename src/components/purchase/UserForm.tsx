import React from "react";

export const UserForm = ({ reservation, setReservation }: any) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation({
      ...reservation,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-wrap gap-4">
      <div className="flex-grow">
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Nombre Completo</span>
          </label>
          <input
            type="text"
            placeholder="Nombre Completo"
            className="input input-bordered w-full"
            value={`${reservation.user.connect?.name} ${reservation.user.connect?.lastname}`}
            disabled
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Correo</span>
          </label>
          <input
            type="email"
            placeholder="Correo"
            className="input input-bordered w-full"
            value={reservation.user.connect?.email}
            disabled
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Telefono</span>
          </label>
          <input
            type="number"
            placeholder="Telefono"
            className="input input-bordered w-full"
            value={reservation.user.connect?.phone}
            disabled
          />
        </div>
      </div>
      <div className="flex-grow">
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Pais</span>
          </label>
          <input
            type="text"
            placeholder="Pais"
            className="input input-bordered w-full"
            value={reservation.user.connect?.country}
            disabled
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Ciudad</span>
          </label>
          <input
            type="text"
            placeholder="Ciudad"
            className="input input-bordered w-full"
            value={reservation.user.connect?.city}
            disabled
          />
        </div>
        <div className="form-control w-full my-4">
          <label className="label">
            <span className="label-text">Fecha incial</span>
            <span className="label-text">Fecha final</span>
          </label>

          <div className="join">
            <input
              type="date"
              name="dateIn"
              className="join-item input input-bordered w-1/2"
              onChange={handleChange}
            />
            <input
              type="date"
              name="dateOut"
              className="join-item input input-bordered w-1/2"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
