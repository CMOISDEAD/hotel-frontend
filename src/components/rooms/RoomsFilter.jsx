import { AddRoom } from "./AddRoom";

const stateList = [
  { name: "all", title: "Todos" },
  { name: "disponible", title: "Disponibles" },
  { name: "ocupado", title: "Ocupados/Cerrados" },
];

export const RoomsFilter = ({ filter, active, count }) => {
  return (
    <div className="flex flex-wrap gap-2">
      <div className="tabs-boxed tabs flex flex-grow content-center">
        {stateList.map(({ name, title }, i) => (
          <a
            key={i}
            className={`tab ${
              active === name && "tab-active"
            } inline-flex gap-1`}
            data-name={name}
            onClick={filter}
          >
            {title} {active === name && <div className="badge">{count}</div>}
          </a>
        ))}
      </div>
      <button
        className="btn btn-primary w-full sm:w-auto"
        onClick={() => window.createRoom.showModal()}
      >
        +
      </button>
      <AddRoom />
    </div>
  );
};
