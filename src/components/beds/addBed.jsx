import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import useHotelStore from "../../store/store";

export const AddBed = () => {
  const [bed, setBed] = useState({
    id: "",
    type: "sencilla",
    roomID: "",
    status: "disponible",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBed({ ...bed, [name]: value });
  };

  const handleAdd = () => {
    if (!bed.type && !bed.roomID && !bed.status) return;
    const beds = JSON.parse(localStorage.getItem("beds")) || [];
    beds.push({
      ...bed,
      id: uuidv4(),
      place: useHotelStore
        .getState()
        .rooms.filter((room) => room.id === bed.roomID)[0].number,
    });
    useHotelStore.setState({ beds });
    localStorage.setItem("beds", JSON.stringify(beds));
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
            name="roomID"
            value={bed.roomID}
            onChange={handleChange}
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
            <option value="disponible">Disponible</option>
            <option value="ocupado">Ocupado</option>
            <option value="mantenimiento">Mantenimiento</option>
            <option value="limpieza">Limpieza</option>
          </select>
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Seleccionar si esta activo</span>
          </label>
          <select
            className="select select-bordered w-full"
            name="active"
            value={bed.active}
            onChange={handleChange}
          >
            <option value="true">activo</option>
            <option value="false">inactivo</option>
          </select>
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={bed.roomID !== "" ? false : true}
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
