import { useState, useEffect } from "react";
import axios from "axios";
import useHotelStore from "../../store/store";
import { BedModel } from "../../models/beds.model";
import { AddBed } from "./addBed";
import { IoTrashOutline } from "react-icons/io5";
import checkStore from "../../utils/checkStore";
import { Header } from "../Header";

export const BedsViews = () => {
  const [bedsList, setBedsList] = useState<BedModel[]>([]);
  const beds = useHotelStore((state) => state.beds);

  useEffect(() => {
    setBedsList(beds);
  }, [beds]);

  const handleAdd = () => {
    window.createBed.showModal();
  };

  const handleDelete = async (id: string) => {
    await axios.delete(`${import.meta.env.VITE_API_URL}/beds/${id}`);
    checkStore();
  };

  return (
    <>
      <Header content="Camas" />
      <div className="overflow-x-auto">
        <table className="table table-fixed">
          <thead>
            <tr>
              <th>
                <button
                  className="btn btn-circle btn-primary"
                  onClick={handleAdd}
                >
                  +
                </button>
              </th>
              <th>Tipo</th>
              <th>Lugar Actual</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {bedsList.length > 0 ? (
              bedsList.map(({ id, type, status, aviable, room }) => (
                <tr
                  className={`${
                    aviable !== true
                      ? "bg-warning/25 hover:bg-warning/50"
                      : "hover:bg-base-200"
                  } cursor-pointer transition-colors`}
                  key={id}
                >
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(id!)}
                    >
                      <IoTrashOutline />
                    </button>
                  </td>
                  <td>{type}</td>
                  <td>{room ? `Habitacion ${room!.number}` : "Almacen"}</td>
                  <td>{status}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No hay camas registradas
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddBed />
    </>
  );
};
