import axios from "axios";
import React, { useState } from "react";

import { ReservationModel } from "../../models/reservation.model";
import useHotelStore from "../../store/store";
import checkStore from "../../utils/checkStore";

const placeholder = {
  user: { connect: {} },
  room: { connect: {} },
  dateIn: "",
  dateOut: "",
  status: "pendiente",
  price: 0,
};

export const AddReservation = ({
  method = "normal",
  oldReservation = placeholder,
}) => {
  const [userID, setUserID] = useState("");
  const [roomID, setRoomID] = useState("");
  const [reservation, setReservation] =
    useState<ReservationModel>(oldReservation);

  const handleChangeUser = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setUserID(id);
    const user = useHotelStore.getState().users.find((user) => user.id === id);
    if (!user) return;
    delete user.reservations;
    setReservation({ ...reservation, user: { connect: user! } });
  };

  const handleChangeRoom = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const id = e.target.value;
    setRoomID(id);
    const room = useHotelStore.getState().rooms.find((room) => room.id === id);
    if (!room) return;
    delete room.beds;
    delete room.reservations;
    setReservation({ ...reservation, room: { connect: room! } });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReservation({ ...reservation, [name]: value });
  };

  const handleAdd = async () => {
    console.log(reservation);
    delete reservation.user.connect?.auth;
    if (method !== "normal") {
      await axios.put(
        `${import.meta.env.VITE_API_URL}/reservations/${reservation.id}`,
        reservation,
      );
      window.location.reload();
    } else {
      await axios.post(
        `${import.meta.env.VITE_API_URL}/reservations`,
        reservation,
      );
    }
    checkStore();
  };

  return (
    <dialog
      id="createReservation"
      className="modal modal-bottom sm:modal-middle"
    >
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Agregar reservacion</h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona un cliente</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={userID}
            onChange={handleChangeUser}
          >
            <option value="" disabled>
              selecciona un cliente
            </option>
            {useHotelStore.getState().users.map((user) => (
              <option value={user.id} key={user.id}>
                {user.name}
              </option>
            ))}
          </select>
        </div>

        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona una habitacion</span>
          </label>
          <select
            className="select select-bordered w-full"
            value={roomID}
            onChange={handleChangeRoom}
          >
            <option value="" disabled>
              selecciona una habitacion
            </option>
            {useHotelStore
              .getState()
              .rooms.filter((room) => room.aviable === true)
              .map((room) => (
                <option value={room.id} key={room.id}>
                  {room.number}
                </option>
              ))}
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona la fecha inicial</span>
          </label>
          <input
            type="date"
            name="dateIn"
            className="input input-bordered w-full"
            value={reservation.dateIn}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Selecciona la fecha final</span>
          </label>
          <input
            type="date"
            name="dateOut"
            className="input input-bordered w-full"
            value={reservation.dateOut}
            onChange={handleChange}
          />
        </div>

        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={
            !reservation.user.connect?.id ||
            !reservation.room.connect?.id ||
            !reservation.dateIn ||
            !reservation.dateOut
          }
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
