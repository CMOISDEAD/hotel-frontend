import { beds } from "../../utils/beds";

export const BedsViews = () => {
  return (
    <>
      <h5 className="my-2 text-xl font-bold">Camas</h5>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>Tipo</th>
              <th>Lugar Actual</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {beds.map(({ id, type, place, status }) => (
              <tr
                className={`${
                  status !== "disponible"
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
    </>
  );
};
