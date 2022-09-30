import axios from "axios";

/** 회원가입 POST API
 * postSignup(URL, {아이디, 이메일, 이름, 닉네임, 비밀번호})
 */

const handleSignup = async (
  SIGNUP_URL,
  userId,
  email,
  name,
  nickname,
  password
) => {
  try {
    const res = await axios.post(
      SIGNUP_URL,
      {
        userId,
        email,
        name,
        nickname,
        password,
      }
      // {헤더 : JWT}
    );
    console.log("res", res);
  } catch (error) {
    console.log("error", error);
  }
};

export default handleSignup;