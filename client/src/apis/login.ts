import axios from "axios";

interface LoginArgs {
  userId: string;
  password: string;
  setErrors: any;
}

const LOGIN_URL = `${process.env.REACT_APP_API_URL}/log-in`;

const handleLogin = async ({ userId, password, setErrors }: LoginArgs) => {
  try {
    const res = await axios.post(LOGIN_URL, {
      userId,
      password,
    });
    localStorage.setItem("token", res.headers["access-token"]);
    window.location.replace("/board");
  } catch (error) {
    setErrors(error);
  }
};

export default handleLogin;
