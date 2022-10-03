import axios from "axios";

export default function getBoard(MEMBER_URL) {
  axios
    .get(MEMBER_URL, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
    .then((res) => {
      console.log(res);
      localStorage.setItem("nickname", res.data.nickname);
    })
    .catch((err) => {
      console.log(err);
    });
}
