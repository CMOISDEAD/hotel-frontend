import useHotelStore from "../store/store";

// this needs a refactor, but it works for now...
const checkStore = () => {
  if (!localStorage.getItem("beds"))
    localStorage.setItem("beds", JSON.stringify([]));
  if (!localStorage.getItem("rooms"))
    localStorage.setItem("rooms", JSON.stringify([]));
  if (!localStorage.getItem("clients"))
    localStorage.setItem("clients", JSON.stringify([]));
  if (!localStorage.getItem("reservations"))
    localStorage.setItem("reservations", JSON.stringify([]));

  useHotelStore.setState({
    beds: JSON.parse(localStorage.getItem("beds")),
    rooms: JSON.parse(localStorage.getItem("rooms")),
    clients: JSON.parse(localStorage.getItem("clients")),
    reservations: JSON.parse(localStorage.getItem("reservations")),
  });
};

export default checkStore;
