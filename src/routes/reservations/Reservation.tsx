import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { RxPencil2 } from "react-icons/rx";
import { useParams } from "react-router-dom";

import { Layout } from "../../components/layouts/Layout";
import { AddReservation } from "../../components/reservations/AddReservation";
import { ReservationModel } from "../../models/reservation.model";

export const Reservation = () => {
  const [reservation, setReservation] = useState<ReservationModel>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/reservations/${id}`)
      .then((res) => {
        setReservation(res.data);
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
        <ReservationInformation reservation={reservation!} />
      )}
    </Layout>
  );
};

const ReservationInformation = ({
  reservation,
}: {
  reservation: ReservationModel;
}) => {
  const handleEdit = () => {
    window.createReservation.showModal();
  };

  return (
    <>
      <h1 className="text-3xl font-bold capitalize">vista de reservacion</h1>
      <h4 className="text-2xl font-bold capitalize">Datos de la reservacion</h4>
      <div className="flex flex-wrap gap-10 my-5 justify-start content-center">
        <ul>
          <li>
            <strong>Nombre:</strong> {reservation.user.name}{" "}
            {reservation.user.lastname}
          </li>
          <li>
            <strong>Correo:</strong> {reservation.user.email}
          </li>
          <li>
            <strong>Numero:</strong> {reservation.user.phone}
          </li>
          <li>
            <strong>Estado:</strong> {reservation.status}
          </li>
          <li>
            <strong>Fechas:</strong>{" "}
            {moment(reservation.dateIn.toString()).format("DD MMM YYYY")} -{" "}
            {moment(reservation.dateOut.toString()).format("DD MMM YYYY")}
          </li>
        </ul>
        <button className="btn btn-primary btn-circle" onClick={handleEdit}>
          <RxPencil2 />
        </button>
        <AddReservation method="update" oldReservation={reservation} />
      </div>
    </>
  );
};
