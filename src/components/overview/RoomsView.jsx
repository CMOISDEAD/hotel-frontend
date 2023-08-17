import { useState } from "react";
import { Rooms } from "../Rooms";
import { rooms } from "../../utils/rooms";

export const RoomsView = () => {
  const [active, setActive] = useState("all");
  const [listRooms, setListRooms] = useState(rooms);

  const handleFilter = (e) => {
    const { name } = e.target;
    setActive(name);
    if (name === "all") {
      setListRooms(rooms);
    } else {
      const filter = rooms.filter((room) => room.status === name);
      setListRooms(filter);
    }
  };

  return (
    <>
      <h5 className="my-2 text-xl font-bold">Cuartos</h5>
      <div className="tabs-boxed tabs">
        {[
          { name: "all", title: "Todos" },
          { name: "disponible", title: "Disponibles" },
          { name: "ocupado", title: "Ocupados/Cerrados" },
        ].map(({ name, title }, i) => (
          <a
            className={`tab ${active === name && "tab-active"}`}
            name={name}
            onClick={handleFilter}
            key={i}
          >
            {title}
          </a>
        ))}
      </div>
      <div className="my-5 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listRooms.map((room, i) => (
          <Rooms key={i} {...room} />
        ))}
      </div>
    </>
  );
};
