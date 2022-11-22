import axios from "axios";

export default function getMember(MEMBER_URL) {
  axios
    .get(MEMBER_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then(res => {
      localStorage.setItem("nickname", res.data.nickname);
    })
    .catch(err => {});
}
