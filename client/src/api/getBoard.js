import axios from "axios";

export default function getBoard(BOARD_URL, setState) {
  axios.get(BOARD_URL, {}).then((res) => {
    setState(res.data.boards);
  });
}
