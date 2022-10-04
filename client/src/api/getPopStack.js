import axios from "axios";

export default function getPopStack(POPSTACK_URL, setState) {
  axios
    .get(POPSTACK_URL, {
      // headers: {
      //   Authorization: `Bearer ${localStorage.getItem("token")}`,
      // },
    })
    .then((res) => {
      // console.log(res.data);
      setState(res.data);
    });
}
