import axios from "axios";

export default function getPopStack(POPSTACK_URL: string, setState: any) {
  axios.get(POPSTACK_URL, {}).then(res => {
    setState(res.data);
  });
}
