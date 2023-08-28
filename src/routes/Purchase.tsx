import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { Layout } from "../components/layouts/Layout";
import { PayMethod } from "../components/purchase/PayMethod";
import { PurchaseView } from "../components/purchase/PurchaseView";
import { RoomSelect } from "../components/purchase/RoomSelect";
import { UserForm } from "../components/purchase/UserForm";
import { ReservationModel } from "../models/reservation.model";
import useHotelStore from "../store/store";

const steps = [
  {
    title: "Verificar datos",
    active: true,
  },
  {
    title: "Elegir habitacion",
    active: false,
  },
  {
    title: "Datos de pago",
    active: false,
  },
  {
    title: "Pagar",
    active: false,
  },
];

export const Purchase = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [reservation, setReservation] = useState<ReservationModel>({
    user: { connect: {} },
    room: { connect: {} },
    dateIn: "",
    dateOut: "",
    status: "pendiente",
    price: 0,
  });
  const navigate = useNavigate();

  useEffect(() => {
    const user = useHotelStore.getState().account;
    if (!user.auth) navigate("/login");
    delete user.reservations;
    setReservation({
      ...reservation,
      user: { connect: user },
    });
  }, []);

  const handleBackStep = () => {
    if (currentStep === 0) return;
    const current = currentStep - 1;
    for (let i = 0; i < steps.length; i++) {
      if (i > current) {
        steps[i].active = false;
      } else {
        steps[i].active = true;
      }
    }
    setCurrentStep(current);
  };

  const handleNextStep = () => {
    if (currentStep === steps.length - 1) return;
    const current = currentStep + 1;
    for (let i = 0; i < steps.length; i++) {
      if (i > current) {
        steps[i].active = false;
      } else {
        steps[i].active = true;
      }
    }
    setCurrentStep(current);
  };

  const handleRoom = (room: any) => {
    delete room.beds;
    delete room.reservations;
    setReservation({
      ...reservation,
      room: { connect: room },
    });
  };

  const handlePay = async () => {
    console.log(reservation);
    delete reservation.user.connect.auth;
    await axios.post(
      `${import.meta.env.VITE_API_URL}/reservations`,
      reservation,
    );
    navigate(`/usuarios/${reservation.user.connect.id}`);
  };

  return (
    <Layout>
      <ul className="steps w-full">
        {steps.map((step, i) => (
          <li
            key={i}
            className={`step ${currentStep === i && "step-secondary"} ${
              step.active && "step-primary"
            } hover:cursor-pointer`}
            onClick={() => {
              setCurrentStep(i);
            }}
          >
            {step.title}
          </li>
        ))}
      </ul>
      <div className="my-5">
        <h5 className="text-4xl font-bold capitalize my-3">
          {steps[currentStep].title}
        </h5>
        {currentStep === 0 ? (
          <div className="flex flex-col flex-wrap justify-center gap-4">
            <UserForm
              reservation={reservation}
              setReservation={setReservation}
            />
            <GroupButtons
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              handleBackStep={handleBackStep}
            />
          </div>
        ) : currentStep === 1 ? (
          <div className="flex flex-col flex-wrap gap-4">
            <RoomSelect
              handleRoom={handleRoom}
              selected={reservation.room.connect?.id}
            />
            <GroupButtons
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              handleBackStep={handleBackStep}
            />
          </div>
        ) : currentStep === 2 ? (
          <div className="flex flex-col flex-wrap gap-4">
            <PayMethod />
            <GroupButtons
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              handleBackStep={handleBackStep}
            />
          </div>
        ) : (
          <div className="flex flex-col justify-center gap-10">
            <PurchaseView reservation={reservation} handlePay={handlePay} />
            <GroupButtons
              currentStep={currentStep}
              handleNextStep={handleNextStep}
              handleBackStep={handleBackStep}
            />
          </div>
        )}
      </div>
    </Layout>
  );
};

const GroupButtons = ({ currentStep, handleNextStep, handleBackStep }: any) => {
  const backDisabled = (): boolean => {
    if (currentStep === 0) return true;
    return false;
  };

  const nextDisabled = (): boolean => {
    if (currentStep === 0) return false;
    if (currentStep === steps.length - 1) return true;
    return !steps[currentStep - 1].active || !steps[currentStep].active;
  };

  return (
    <div className="join">
      <button
        className="btn btn-primary join-item"
        onClick={handleBackStep}
        disabled={backDisabled()}
      >
        Atras
      </button>
      <button
        className="btn btn-primary join-item"
        onClick={handleNextStep}
        disabled={nextDisabled()}
      >
        Siguiente
      </button>
    </div>
  );
};
