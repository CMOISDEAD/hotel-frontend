import { useEffect, useState } from "react";
import { IoTrashOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

import { UserModel } from "../../models/users.model";
import useHotelStore from "../../store/store";
import { AddUser } from "./AddUser";

export const UsersView = () => {
  const [userList, setUsersList] = useState<UserModel[]>([]);
  const users = useHotelStore((state) => state.users);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleAdd = () => {
    window.createUser.showModal();
  };

  const handleDelete = async (id: string) => {
    console.log(id);
  };

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-fixed">
          <thead>
            <tr>
              <th>
                <button
                  className="btn btn-circle btn-primary"
                  onClick={handleAdd}
                >
                  +
                </button>
              </th>
              <th>Nombre</th>
              <th>Pais</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {userList.length > 0 ? (
              userList.map((user, i) => (
                <tr
                  key={i}
                  className="transition-colors hover:cursor-pointer hover:bg-base-200"
                >
                  <td>
                    <button
                      className="btn btn-error"
                      onClick={() => handleDelete(user.id!)}
                    >
                      <IoTrashOutline />
                    </button>
                  </td>
                  <td>{`${user.name} ${user.lastname}`}</td>
                  <td>{user.country}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link to={`/usuarios/${user.id}`}>
                      <button className="btn btn-ghost">detalles</button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  No hay usuarios registrados
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <AddUser />
    </>
  );
};
