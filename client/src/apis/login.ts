import axios from "axios";

interface LoginArgs {
  userId: string;
  password: string;
  setErrors: any;
}

const LOGIN_URL = `${process.env.REACT_APP_API_URL}/log-in`;
const AUTH_LOGIN_URL = `${process.env.REACT_APP_AUTH_URL}`;

export const handleLogin = async ({
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

export const handleAuthLogin = async () => {
  try {
    const res = await axios.post(AUTH_LOGIN_URL, {});
    localStorage.setItem("token", res.headers["access-token"]);
  } catch (error) {}
};
