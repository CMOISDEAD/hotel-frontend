const checkStore = () => {
  if (!localStorage.getItem("beds"))
    localStorage.setItem("beds", JSON.stringify([]));
  if (!localStorage.getItem("rooms"))
    localStorage.setItem("rooms", JSON.stringify([]));
  if (!localStorage.getItem("clients"))
    localStorage.setItem("clients", JSON.stringify([]));
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));
};

export default checkStore;
