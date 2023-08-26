import { UserModel } from "../../models/users.model";

type Props = {
  user: UserModel;
};

export const UserModal = ({ user }: Props) => {
  return (
    <dialog id="userModal" className="modal modal-bottom sm:modal-middle">
      <form method="dialog" className="modal-box">
        <h3 className="text-lg font-bold">{`${user.name} ${user.lastname}`}</h3>
        <div className="py-4"></div>
      </form>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
};
