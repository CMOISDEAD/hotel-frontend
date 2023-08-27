import { MouseEventHandler } from "react";

import useHotelStore from "../../store/store";
import { AddRoom } from "./AddRoom";

const stateList = [
  { name: "all", title: "Todos" },
  { name: "disponible", title: "Disponibles" },
  { name: "ocupado", title: "Ocupados/Cerrados" },
];

type Props = {
  filter: MouseEventHandler<HTMLAnchorElement>;
  active: string;
  count: number;
};

export const RoomsFilter = ({ filter, active, count }: Props) => {
  const account = useHotelStore((state) => state.account);
  return (
    <div className="flex flex-wrap gap-2">
      {account.rol === "ADMIN" && (
        <button
          className="btn btn-circle btn-primary"
          onClick={() => window.createRoom.showModal()}
        >
          +
        </button>
      )}
      <div className="tabs tabs-boxed flex flex-grow content-center">
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
      <AddRoom />
    </div>
  );
};
