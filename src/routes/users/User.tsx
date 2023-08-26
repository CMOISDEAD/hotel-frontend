import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { RxPencil2 } from "react-icons/rx";
import { Link, useParams } from "react-router-dom";

import { Layout } from "../../components/layouts/Layout";
import { AddUser } from "../../components/users/AddUser";
import { UserModel } from "../../models/users.model";

export const User = () => {
  const [user, setUser] = useState<UserModel>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/users/${id}`)
      .then((res) => {
        setUser(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
      });
  }, []);

  return (
    <Layout>
      {loading ? (
        <h1>Cargando...</h1>
      ) : error ? (
        <h1>Hubo un error</h1>
      ) : (
        <UserInformation user={user!} />
      )}
    </Layout>
  );
};

const UserInformation = ({ user }: { user: UserModel }) => {
  const handleEdit = () => {
    window.createUser.showModal();
  };

  return (
    <>
      <h1 className="text-3xl font-bold capitalize">vista de usuario</h1>
      <h4 className="text-2xl font-bold capitalize">Datos Personales</h4>
      <div className="flex flex-wrap gap-10 my-5 justify-start content-center">
        <ul>
          <li>
            <strong>Nombre:</strong> {user.name} {user.lastname}
          </li>
          <li>
            <strong>Correo:</strong> {user.email}
          </li>
          <li>
            <strong>Numero:</strong> {user.phone}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Pais:</strong> {user.country}
          </li>
          <li>
            <strong>Ciudad:</strong> {user.city}
          </li>
          <li className="truncate">
            <strong>Direccion:</strong> {user.address}
          </li>
        </ul>
        <ul>
          <li>
            <strong>Reservaciones:</strong> {user.reservations?.length}
          </li>
          <li>
            <strong>Activo desde:</strong> {moment("2023/8/23").fromNow()}
          </li>
        </ul>
        <button className="btn btn-primary" onClick={handleEdit}>
          <RxPencil2 />
        </button>
      </div>
      <h4 className="text-2xl font-bold capitalize">Datos Personales</h4>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Nombre</th>
              <th>Fechas</th>
              <th>Habitacion</th>
              <th>Precio</th>
              <th>Estado</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {user.reservations?.map((reservation, i) => (
              <tr key={i}>
                <td></td>
                <td>
                  {user.name} {user.lastname}
                </td>
                <td>
                  {reservation.dateIn} - {reservation.dateOut}
                </td>
                <td>Habitacion {reservation.room?.number}</td>
                <td>{reservation.room?.price} $</td>
                <td>{reservation.room?.status}</td>
                <td>
                  <Link to={`/reservaciones/${reservation.id}`}>
                    <button className="btn btn-ghost">detalles</button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <AddUser method="update" oldUser={user} />
      </div>
    </>
  );
};
