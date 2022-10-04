import axios from "axios";

export default function handleLogout() {
  axios.post(`${process.env.REACT_APP_API_URL}/api/v1/log-out`);
  localStorage.removeItem("token");
  localStorage.removeItem("nickname");
  window.location.replace("/board");
}
