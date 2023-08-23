import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import useHotelStore from "../../store/store";

export const AddRoom = () => {
  const [room, setRoom] = useState({
    description: "",
    capacity: 0,
    status: "disponible",
    active: true,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRoom({ ...room, [name]: value });
  };

  const handleAdd = () => {
    if (!room.photo && !room.number && !room.price) return;
    const rooms = JSON.parse(localStorage.getItem("rooms")) || [];
    rooms.push({ ...room, id: uuidv4() });
    useHotelStore.setState({ rooms });
    localStorage.setItem("rooms", JSON.stringify(rooms));
  };

  return (
    <dialog id="createRoom" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Crear Cuarto</h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Agrega una fotografia</span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="https://image.com"
            className="input input-bordered w-full"
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Numero del cuarto</span>
          </label>
          <input
            type="text"
            name="number"
            placeholder="217"
            className="input input-bordered w-full"
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
            value={room.active}
            onChange={handleChange}
          >
            <option value={true}>activo</option>
            <option value={false}>inactivo</option>
          </select>
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={
            !room.number || !room.description || !room.photo || !room.price
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
