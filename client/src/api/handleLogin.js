import axios from "axios";

/** 로그인 POST API
 * handleLogin(URL, 아이디, 비밀번호, dispatch)
 */

const handleLogin = async (LOGIN_URL, userId, password, dispatch) => {
  try {
    const res = await axios.post(LOGIN_URL, {
      userId,
      password,
    });
    console.log("login res : ", res);
    localStorage.setItem("token", res.headers["access-token"]);
    dispatch("LOGIN", localStorage.getItem("token"));
  } catch (error) {
    console.log(error);
    // setErrors(error?.response?.data || {});
  }
};

export default handleLogin;

//  try {
//    const res = await axios.post(LOGIN_URL, {
//      userId,
//      password,
//    });
//    console.log(res);
//    dispatch("LOGIN", res.data?.user);
//    localStorage.setItem("token", res.headers["access-token"]);
//  } catch (error) {
//    console.log(error);
//    setErrors(error?.response?.data || {});
//  }
