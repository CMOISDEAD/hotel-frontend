import React from "react";
import ReactDOM from "react-dom/client";
import { Home } from "./routes/Home.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Reservations } from "./routes/Reservations.jsx";
import { Rooms } from "./routes/Rooms.jsx";
import { Clients } from "./routes/Clients.jsx";
import { Beds } from "./routes/Beds.jsx";
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
    element: <Clients />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
