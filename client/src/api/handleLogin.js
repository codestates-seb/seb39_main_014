import axios from "axios";

/** 로그인 POST API
 * handleLogin(URL, 아이디, 비밀번호, dispatch)
 */

const handleLogin = async (
  LOGIN_URL,
  userId,
  password,
  dispatch,
  setErrors
) => {
  try {
    const res = await axios.post(LOGIN_URL, {
      userId,
      password,
    });
    console.log("login res : ", res);
    localStorage.setItem("token", res.headers["access-token"]);
    // dispatch("LOGIN", localStorage.getItem("token"));
    window.location.replace("/board");
  } catch (error) {
    console.log(error);
    setErrors(error);
    // setErrors(error?.response?.data || {});
  }
};

export default handleLogin;
