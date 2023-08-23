import { useEffect, useState } from "react";
import useHotelStore from "../../store/store";
import { Rooms } from "./Rooms";
import { RoomsFilter } from "./RoomsFilter";
import { Placeholder } from "./Placeholder";

export const RoomsView = () => {
  const [active, setActive] = useState("all");
  const [listRooms, setListRooms] = useState([]);
  const rooms = useHotelStore((state) => state.rooms);

  useEffect(() => {
    setListRooms(rooms);
  }, [rooms]);

  const handleFilter = (e) => {
    const name = e.target.dataset.name;
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
      <RoomsFilter
        filter={handleFilter}
        active={active}
        count={listRooms.length}
      />
      <div className="my-5 grid grid-flow-row grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {listRooms.length > 0 ? (
          listRooms.map((room, i) => <Rooms key={i} room={room} />)
        ) : (
          <Placeholder />
        )}
      </div>
    </>
  );
};
