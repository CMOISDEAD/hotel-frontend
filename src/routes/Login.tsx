import axios from "axios";
import React, { useState } from "react";
import { Link, Navigate, redirect, useNavigate } from "react-router-dom";

import useHotelStore from "../store/store";

export const Login = () => {
  const [account, setAccount] = useState({
    username: "",
    password: "",
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
        `${import.meta.env.VITE_API_URL}/auth/login`,
        account,
      );
      useHotelStore.setState({ account: { ...data, auth: true } });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="base-200 md:w-1/2 w-full">
        <div className="flex flex-col justify-center items-center h-full ">
          <h1 className="text-4xl font-bold">Ingresa a tu cuenta</h1>
          <p className="text-sm text-secondary my-4">
            completa los datos para iniciar sesion.
          </p>
          <div className="w-80">
            <form onSubmit={handleSubmit}>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Nombre de usuario</span>
                </label>
                <input
                  name="username"
                  type="text"
                  placeholder="camilo davila"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
              </div>
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contrasena</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="*****"
                  className="input input-bordered w-full"
                  onChange={handleChange}
                />
              </div>
              <button
                className="btn btn-primary my-4 w-full"
                type="submit"
                disabled={!account.username || !account.password}
              >
                Login
              </button>
            </form>
            <div className="divider">o</div>
            Si no tienes cuenta, puedes{" "}
            <Link to="/register" className="link link-primary">
              registrarte.
            </Link>
          </div>
        </div>
      </div>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Valle_de_Cocora%2C_Colombia_02.jpg"
        alt="cocora valley"
        className="flex-grow object-cover h-full w-1/2 hidden md:block"
      />
    </div>
  );
};
