import axios from "axios";
import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { BedModel } from "../../models/beds.model";
import useHotelStore from "../../store/store";
import checkStore from "../../utils/checkStore";
import { AddBed } from "./addBed";

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
                  <td>
                    <Link to={`/camas/${id}`}>
                      <button className="btn btn-ghost">Detalles</button>
                    </Link>
                  </td>
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
        <AddBed />
      </div>
    </>
  );
};
