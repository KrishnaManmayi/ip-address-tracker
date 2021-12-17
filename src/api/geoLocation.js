import Axios from "axios";

export default Axios.create({
  baseURL: "https://geo.ipify.org/api/v2",
});
