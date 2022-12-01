import axios from "axios";

interface LoginArgs {
  LOGIN_URL: string;
  userId: string;
  password: string;
  setErrors: any;
}

const handleLogin = async ({
  LOGIN_URL,
  userId,
  password,
  setErrors,
}: LoginArgs) => {
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
