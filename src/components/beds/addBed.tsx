import axios from "axios";
import React, { useState } from "react";

import { BedModel } from "../../models/beds.model";
import useHotelStore from "../../store/store";
import { statusEnum } from "../../types/enums";
import checkStore from "../../utils/checkStore";

export const AddBed = () => {
  const [room, setRoom] = useState("");
  const [bed, setBed] = useState<BedModel>({
    type: "sencilla",
    status: statusEnum.aviable,
    aviable: true,
  });

  const handleChangeRoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setRoom(e.target.value);
    const place = useHotelStore
      .getState()
      .rooms.find((room) => room.id === e.target.value);
    delete place.beds;
    delete place.reservations;
    setBed({
      ...bed,
      room: {
        connect: place,
      },
    });
  };

  const checkStatus = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/rooms/${room}`,
    );
    setBed({ ...bed, aviable: data.aviable, status: data.status });
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setBed({ ...bed, [name]: value });
  };

  const handleAdd = async () => {
    if (!bed.type && !bed.roomId && !bed.status) return;
    await checkStatus();
    await axios.post(`${import.meta.env.VITE_API_URL}/beds`, bed);
    checkStore();
  };

  return (
    <dialog id="createBed" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Agregar Cama</h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Seleccionar tipo</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="type"
            value={bed.type}
            onChange={handleChange}
          >
            <option value="sencilla">Sencilla</option>
            <option value="doble">Doble</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Seleccionar lugar</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="room"
            value={room}
            onChange={handleChangeRoom}
          >
            <option value="" disabled>
              select a room
            </option>
            {useHotelStore.getState().rooms.map((room, i) => (
              <option value={room.id} key={i}>
                {room.number}
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Seleccionar estado</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="status"
            value={bed.status}
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
            value={bed.aviable.toString()}
            onChange={handleChange}
          >
            <option value="true">activo</option>
            <option value="false">inactivo</option>
          </select>
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={room ? false : true}
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
