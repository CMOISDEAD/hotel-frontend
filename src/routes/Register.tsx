import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { UserModel } from "../models/users.model";
import useHotelStore from "../store/store";

export const Register = () => {
  const [account, setAccount] = useState<UserModel>({
    username: "",
    password: "",
    name: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    address: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccount({
      ...account,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_URL}/auth/register`,
        account,
      );
      useHotelStore.setState({ account: { ...data, auth: true } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="base-200 flex content-center items-center h-screen justify-center">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold">Crea tu cuenta</h1>
        <p className="text-sm text-secondary my-4">
          completa los datos para crear tu cuenta
        </p>
        <div>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between content-center gap-4"
          >
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nombre de usuario</span>
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="jhondoe"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contrasena</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="*****"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nombre</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Jhon"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Apellido</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  placeholder="Doe"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Correo</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="jhondoe@email.com"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Telefono</span>
                </label>
                <input
                  type="number"
                  name="phone"
                  placeholder="3138481222"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Pais</span>
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="Colombia"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Ciudad</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Armenia"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Dirreccion</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="Ciudadela del cafe"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="btn btn-primary my-4 w-full" type="submit">
                Registrarse
              </button>
            </div>
          </form>
          <div className="divider">o</div>
          Si ya tienes cuenta, puedes{" "}
          <Link to="/login" className="link link-primary">
            Iniciar sesion.
          </Link>
        </div>
      </div>
    </div>
  );
};
