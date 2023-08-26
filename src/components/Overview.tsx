import { Header } from "./Header";
import { BedsViews } from "./beds/BedsView";
import { ReservationsView } from "./reservations/ReservationsView";
import { RoomsView } from "./rooms/RoomsView";
import { UsersView } from "./users/UsersView";

const components = [
  {
    title: "Cuartos",
    component: <RoomsView />,
  },
  {
    title: "Camas",
    component: <BedsViews />,
  },
  {
    title: "Reservaciones",
    component: <ReservationsView />,
  },
  {
    title: "Usuarios",
    component: <UsersView />,
  },
];

export const Overview = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-8">Dashboard</h1>
      {components.map(({ title, component }, i) => (
        <div className="my-5">
          <div
            tabIndex={0}
            className="collapse collapse-arrow border border-base-300 bg-base-200"
            key={i}
          >
            <input type="checkbox" />
            <div className="collapse-title text-xl font-medium">
              <Header content={title} />
            </div>
            <div className="collapse-content">{component}</div>
          </div>
          {i !== components.length - 1 && <div className="divider" />}
        </div>
      ))}
    </>
  );
};
