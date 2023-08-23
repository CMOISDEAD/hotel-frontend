import { useState } from "react";

export const AddReservation = () => {
  const [reservation, setReservation] = useState({});

  const handleAdd = () => {};
  const handleChange = () => {};

  return (
    <dialog id="addReservation" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Agregar reservacion</h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona un cliente</span>
          </label>
          <select className="select select-bordered w-full" onChange={handleChange}>
            <option value="hansolo">
              Who shot first?
            </option>
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona una fecha</span>
          </label>
          <input
            type="text"
            name="date"
            placeholder="20/10/2023"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={reservation}
        >
          Agregar
        </button>

        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};
