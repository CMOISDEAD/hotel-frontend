import axios from "axios";
import React, { useState } from "react";

import { UserModel } from "../../models/users.model";
import checkStore from "../../utils/checkStore";

const placeholder = {
  name: "",
  lastname: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  username: "",
  password: "",
};

export const AddUser = ({ method = "normal", oldUser = placeholder }) => {
  const [user, setUser] = useState<UserModel>(oldUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAdd = async () => {
    if (method !== "normal") {
      await axios.put(`${import.meta.env.VITE_API_URL}/users/${user.id}`, user);
      window.location.reload();
    } else {
      await axios.post(`${import.meta.env.VITE_API_URL}/users`, user);
    }
    checkStore();
  };

  return (
    <dialog id="createUser" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">Agregar un usuario</h3>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nombre</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="name"
            placeholder="jhon doe"
            value={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Apellido</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="lastname"
            placeholder="Smith"
            value={user.lastname}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Nombre de usuario</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="username"
            placeholder="jhondoe"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Contraseña</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="password"
            placeholder="********"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            className="input input-bordered w-full"
            name="email"
            placeholder="jhondoe@ibm.com"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">celular</span>
          </label>
          <input
            type="number"
            className="input input-bordered w-full"
            name="phone"
            placeholder="1234567890"
            value={user.phone}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">direccion</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="address"
            placeholder="Calle 123"
            value={user.address}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">ciudad</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="city"
            placeholder="Cali"
            value={user.city}
            onChange={handleChange}
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text">pais</span>
          </label>
          <input
            type="text"
            className="input input-bordered w-full"
            name="country"
            placeholder="Colombia"
            value={user.country}
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-primary mt-4 w-full"
          onClick={handleAdd}
          disabled={!user}
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
