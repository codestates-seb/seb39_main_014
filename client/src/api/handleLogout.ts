import axios from "axios";
import { googleLogout } from "@react-oauth/google";

export default function handleLogout() {
  axios.post(`${process.env.REACT_APP_API_URL}/log-out`);
  localStorage.removeItem("token");
  localStorage.removeItem("nickname");
  googleLogout();
  window.location.replace("/board");
}
