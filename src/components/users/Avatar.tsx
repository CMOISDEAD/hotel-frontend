import { useNavigate } from "react-router-dom";

import { UserModel } from "../../models/users.model";
import useHotelStore from "../../store/store";

export const Avatar = () => {
  const account: UserModel = useHotelStore((state) => state.account);
  const navigate = useNavigate();

  const handleClick = () => {
    const user = {
      rol: "USER",
      false: "",
    };
    useHotelStore.setState({ account: user });
    navigate("/");
  };

  return (
    <div className="dropdown dropdown-hover dropdown-left hidden lg:block">
      <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content rounded-full h-full w-10">
          <span className="text-3xl">
            {`${account.name.charAt(0)}${account.lastname.charAt(0)}`}
          </span>
        </div>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={handleClick}>Logout</button>
        </li>
      </ul>
    </div>
  );
};
