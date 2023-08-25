import axios from "axios";
import useHotelStore from "../store/store";

const api = import.meta.env.VITE_API_URL;
const checkStore = async () => {
  try {
    const { data } = await axios.get(`${api}/all`);
    useHotelStore.setState({
      ...data,
    });
  } catch (error) {
    console.log(error);
  }
};

export default checkStore;
