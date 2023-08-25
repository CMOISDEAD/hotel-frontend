import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";
import { Reservations } from "./routes/Reservations";
import { Rooms } from "./routes/Rooms";
import { Users } from "./routes/Users";
import { Beds } from "./routes/Beds";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/reservaciones",
    element: <Reservations />,
  },
  {
    path: "/cuartos",
    element: <Rooms />,
  },
  {
    path: "/camas",
    element: <Beds />,
  },
  {
    path: "/clientes",
    element: <Users />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
