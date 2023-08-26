import axios from "axios";
import React, { useState } from "react";

import { RoomModel } from "../../models/room.model";
import { statusEnum } from "../../types/enums";
import checkStore from "../../utils/checkStore";

export const EditRoom = ({
  id,
  oldRoom,
}: {
  id: string;
  oldRoom: RoomModel;
}) => {
  const [room, setRoom] = useState<RoomModel>(oldRoom);
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleAdd = async () => {
    if (!room.image && !room.number && !room.price) return;
    await axios.put(`${import.meta.env.VITE_API_URL}/rooms/${room.id}`, room);
    checkStore();
  };

  return (
    <dialog id={id} className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Editar Cuarto</h3>
        {room ? (
          <>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Agrega una fotografia</span>
              </label>
              <input
                type="text"
                name="image"
                placeholder="https://image.com"
                value={room.image}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Numero del cuarto</span>
              </label>
              <input
                type="number"
                name="number"
                placeholder="217"
                className="input input-bordered w-full"
                value={room.number}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Descripcion</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                placeholder="Un cuarto grande..."
                name="description"
                value={room.description}
                onChange={handleChange}
              ></textarea>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Agrega un precio</span>
              </label>
              <input
                type="number"
                name="price"
                placeholder="$100"
                className="input input-bordered w-full"
                value={room.price}
                onChange={handleChange}
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Agrega la capacidad</span>
              </label>
              <input
                type="number"
                name="capacity"
                placeholder="2"
                className="input input-bordered w-full"
                value={room.capacity}
                onChange={handleChange}
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seleccionar estado</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="status"
                value={room.status}
                onChange={handleChange}
              >
                <option value={statusEnum.aviable}>Disponible</option>
                <option value={statusEnum.occupied}>Ocupado</option>
                <option value={statusEnum.maintenance}>Mantenimiento</option>
                <option value={statusEnum.cleaning}>Limpieza</option>
              </select>
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Seleccionar si esta activo</span>
              </label>
              <select
                className="select select-bordered w-full"
                name="aviable"
                value={`${room.aviable}`}
                onChange={handleChange}
              >
                <option value="true">activo</option>
                <option value="false">inactivo</option>
              </select>
            </div>
            <button
              className="btn btn-primary mt-4 w-full"
              onClick={handleAdd}
              disabled={
                !room.number || !room.description || !room.image || !room.price
              }
            >
              Editar
            </button>
          </>
        ) : (
          ""
        )}

        <div className="modal-action">
          <button className="btn">Close</button>
        </div>
      </form>
    </dialog>
  );
};
