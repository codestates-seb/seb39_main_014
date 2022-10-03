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
    window.location.replace("/board");
  } catch (error) {
    console.log(error);
    // setErrors(error?.response?.data || {});
  }
};

// 로그인, 닉네임 체이닝 함수
// function handleLogin(LOGIN_URL, MEMBER_URL, userId, password, dispatch) {
//   axios
//     .post(LOGIN_URL, {
//       userId,
//       password,
//     })
//     .then((res) => {
//       localStorage.setItem("token", res.headers["access-token"]);
//     })
//     .then(
//       axios
//         .get(MEMBER_URL, {
//           headers: {
//             Authorization: `Bearer ${localStorage.getItem("token")}`,
//           },
//         })
//         .then((res) => {
//           console.log(res);
//           localStorage.setItem("nickname", res.data.nickname);
//         })
//         .catch((err) => {
//           console.log(err);
//         })
//     );
// }

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
