import { NavLink } from "react-router-dom";

import useHotelStore from "../store/store";

const Views = () => {
  const account = useHotelStore.getState().account;

  return (
    <>
      {account.auth && account.role === "ADMIN" ? (
        <>
          <li>
            <NavLink to="/dasboard">Dasboard</NavLink>
          </li>
          <li>
            <NavLink to="/cuartos">Cuartos</NavLink>
          </li>
          <li>
            <NavLink to="/camas">Camas</NavLink>
          </li>
          <li>
            <NavLink to="/usuarios">Usuarios</NavLink>
          </li>
          <li>
            <NavLink to="/reservaciones">Reservaciones</NavLink>
          </li>
        </>
      ) : account.auth ? (
        <>
          <li>
            <NavLink to="/camas">Camas</NavLink>
          </li>
          <li>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/signup">Signup</NavLink>
          </li>
        </>
      )}
    </>
  );
};

export const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
          >
            <Views />
          </ul>
        </div>
        <NavLink className="btn btn-ghost text-xl normal-case" to="/">
          Hotels Cocora
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <Views />
        </ul>
      </div>
    </div>
  );
};
