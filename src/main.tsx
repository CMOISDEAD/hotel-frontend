import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { Beds } from "./routes/Beds";
import { Home } from "./routes/Home";
import { Rooms } from "./routes/Rooms";
import { Reservation } from "./routes/reservations/Reservation";
import { Reservations } from "./routes/reservations/Reservations";
import { User } from "./routes/users/User";
import { Users } from "./routes/users/Users";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/cuartos" element={<Rooms />} />
        <Route path="/camas" element={<Beds />} />
        <Route path="/reservaciones" element={<Reservations />} />
        <Route path="/reservaciones/:id" element={<Reservation />} />
        <Route path="/usuarios" element={<Users />} />
        <Route path="/usuarios/:id" element={<User />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
