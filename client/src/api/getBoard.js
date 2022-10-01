import axios from "axios";

export default function getBoard(BOARD_URL, setState) {
  axios
    .get(BOARD_URL, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      setState(res.data.boards);
    });
}
