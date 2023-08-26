import { useEffect, useState } from "react";

import { RoomModel } from "../../models/room.model";
import useHotelStore from "../../store/store";
import { statusEnum } from "../../types/enums";
import { Placeholder } from "./Placeholder";
import { Rooms } from "./Rooms";
import { RoomsFilter } from "./RoomsFilter";

export const RoomsView = () => {
  const [active, setActive] = useState("all");
  const [listRooms, setListRooms] = useState<RoomModel[]>([]);
  const rooms = useHotelStore((state) => state.rooms);

  useEffect(() => {
    setListRooms(rooms);
  }, [rooms]);

  const handleFilter = (e: any) => {
    const name = e.target.dataset.name;
    setActive(name);
    if (name === "all") {
      setListRooms(rooms);
    } else if (name === "ocupado") {
      const filter = rooms.filter(
        (room) =>
          room.status === statusEnum.occupied ||
          room.status === statusEnum.maintenance ||
          room.status === statusEnum.cleaning,
      );
      setListRooms(filter);
    } else {
      const filter = rooms.filter((room) => room.status === name);
      setListRooms(filter);
    }
  };

  return (
    <>
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
