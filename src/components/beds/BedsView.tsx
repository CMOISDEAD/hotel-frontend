import { useState, useEffect } from "react";
import useHotelStore from "../../store/store";
import { AddBed } from "./addBed";

export const BedsViews = () => {
  const [bedsList, setBedsList] = useState([]);
  const beds = useHotelStore((state) => state.beds);

  useEffect(() => {
    setBedsList(beds);
  }, [beds]);

  const handleAdd = () => {
    window.createBed.showModal();
  };

  return (
    <>
      <h5 className="my-2 text-xl font-bold">Camas</h5>
      <div className="overflow-x-auto">
        <table className="table">
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
            {bedsList.map(({ id, type, place, status, active }) => (
              <tr
                className={`${
                  active !== true
                    ? "bg-warning/25 hover:bg-warning/50"
                    : "hover:bg-base-200"
                } cursor-pointer transition-colors`}
                key={id}
              >
                <th>{id}</th>
                <td>{type}</td>
                <td>{place}</td>
                <td>{status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <AddBed />
    </>
  );
};