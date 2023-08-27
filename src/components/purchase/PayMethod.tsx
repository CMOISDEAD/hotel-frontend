import { AiFillCreditCard, AiOutlineCreditCard } from "react-icons/ai";

export const PayMethod = () => {
  return (
    <div className="flex flex-wrap gap-4 h-80">
      <div className="bg-base-200 lg:w-1/2 card shadow-xl p-5">
        <div className="card-body">
          <div className="flex flex-wrap gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre del titular</span>
              </label>
              <input
                type="text"
                placeholder="Nombre del titular"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Numero de tarjeta</span>
              </label>
              <input
                type="text"
                placeholder="Numero de tarjeta"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Fecha de expiracion</span>
              </label>
              <input
                type="text"
                placeholder="Fecha de expiracion"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">CVV</span>
              </label>
              <input
                type="text"
                placeholder="CVV"
                className="input input-bordered"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="card bg-base-200 flex-grow hidden lg:flex lg:justify-center lg:content-center lg:items-center">
        <div className="text-base-100 text-center">
          <AiOutlineCreditCard className="text-9xl mx-auto" />
          <span className="text-xs">seguridad garantizada</span>
        </div>
      </div>
    </div>
  );
};
