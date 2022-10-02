import axios from "axios";

export default function handleLogout() {
  axios.post(
    "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/log-out"
  );
  localStorage.removeItem("token");
  window.location.replace("/board");
}
