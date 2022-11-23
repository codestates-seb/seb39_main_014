import { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import InputGroup from "../../shared/inputGroup/InputGroup";
import { FcGoogle } from "react-icons/fc";
import useCheck from "../../../hooks/useCheck";
import handleSignup from "../../../api/signup";
import {
  checkId,
  checkEmail,
  checkNick,
  checkPassword,
  checkUsername,
  cofirmPassword,
} from "../../../utils/checkSignup";

function Signup() {
  const SIGNUP_URL = `${process.env.REACT_APP_API_URL}/sign-up`;

  const [userId, setUserId] = useState("");
  const [email, setEmail] = useState("");
  const [name, setUsername] = useState("");
  const [nickname, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [errors, setErrors] = useState("");

  const [isUserId, setIsUserId] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isUsername, setIsUsername] = useState(false);
  const [isNickName, setIsNickName] = useState(false);
  const [ispassword, setIsPassword] = useState(false);
  const [isPasswordConfirm, setPassWordConfirm] = useState(false);

  useCheck(checkId, userId, setIsUserId);
  useCheck(checkEmail, email, setIsEmail);
  useCheck(checkUsername, name, setIsUsername);
  useCheck(checkNick, nickname, setIsNickName);
  useCheck(checkPassword, password, setIsPassword);

  useEffect(() => {
    if (cofirmPassword(password, password2) === false) {
      setPassWordConfirm(false);
    } else if (cofirmPassword(password, password2) === true) {
      setPassWordConfirm(true);
    }
  }, [password2]);

  const handleSubmit = () => {
    handleSignup({
      SIGNUP_URL,
      userId,
      email,
      name,
      nickname,
      password,
      setErrors,
    });
  };
  return (
    <SignupFrame>
      <SignUpLayout>
        <h1>회원가입</h1>
        <SocialContainer>
          <div className="social">
            <FcGoogle className="google-icon" />
            <div className="google-login">구글 계정으로 로그인</div>
          </div>
        </SocialContainer>
        <hr />
        <form>
          <InputGroup
            placeholder="아이디"
            value={userId}
            setValue={setUserId}
            setErrors={setErrors}
          />
          {errors.length !== 0 ? (
            <ContentCheck>중복된 아이디입니다.</ContentCheck>
          ) : isUserId === true ? null : (
            <ContentCheck>아이디는 영어와 숫자 조합만 가능합니다.</ContentCheck>
          )}
          <InputGroup
            placeholder="이메일"
            value={email}
            setValue={setEmail}
            setErrors={setErrors}
          />
          {isEmail === true ? null : (
            <ContentCheck>올바른 형식의 이메일을 입력해주세요.</ContentCheck>
          )}
          <InputGroup
            placeholder="이름"
            value={name}
            setValue={setUsername}
            setErrors={setErrors}
          />
          {isUsername === true ? null : (
            <ContentCheck>이름은 한글만 입력가능합니다.</ContentCheck>
          )}

          <InputGroup
            placeholder="닉네임"
            value={nickname}
            setValue={setNick}
            setErrors={setErrors}
          />
          {isNickName === true ? null : (
            <ContentCheck>
              닉네임은 한글, 영어, 숫자 조합만 가능합니다.
            </ContentCheck>
          )}

          <InputGroup
            placeholder="비밀번호"
            value={password}
            setValue={setPassword}
            setErrors={setErrors}
            type="password"
          />
          {ispassword === true ? null : (
            <ContentCheck>
              8~16자 영문 대 소문자, 숫자를 사용하세요.
            </ContentCheck>
          )}

          <InputGroup
            placeholder="비밀번호 확인"
            type="password"
            value={password2}
            setValue={setPassword2}
            setErrors={setErrors}
          />
          {isPasswordConfirm === true ? null : (
            <ContentCheck>비밀번호가 일치하지 않습니다.</ContentCheck>
          )}

          {isUserId &&
          isEmail &&
          isUsername &&
          isNickName &&
          ispassword &&
          password2.length !== 0 &&
          isPasswordConfirm ? (
            <button
              type="button"
              className="allow-signup"
              onClick={handleSubmit}
            >
              가입하기
            </button>
          ) : (
            <button type="button" className="block-signup">
              가입하기
            </button>
          )}
        </form>

        <div className="sign-up">
          <div>이미 아이디가 있으신가요?</div>
          <div className="move-sign-up">
            <Link to="/login">로그인</Link>
          </div>
        </div>
      </SignUpLayout>
    </SignupFrame>
  );
}

const SignupFrame = styled.div`
  width: 500px;
  padding: 15px;

  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.22);
`;

/** div - 구글 아이디로 로그인 */
const SocialContainer = styled.div`
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.9;

    width: 395px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid #dddddd;
    transition: 0.3s;
  }

  .google-login {
    cursor: pointer;
  }

  .social:hover {
    opacity: 1;
    transition: 0.3s;
  }
  .google-icon {
    margin-right: 10px;
    font-size: 25px;
  }
  .google-p {
    font-size: 20px;
    font-weight: bolder;
    color: gray;
  }
  a {
    text-decoration: none;
  }
`;

/** div - 회원가입 레이아웃 */
const SignUpLayout = styled.div`
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0px;
    text-align: center;
  }

  h1 {
    font-weight: bold;
    margin-right: auto;
  }

  hr {
    border: 0;
    width: 80%;
    opacity: 0.6;
    height: 1px;
    background: gray;
  }

  a {
    color: #333;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
  }

  button {
    margin-top: 20px;
    width: 400px;
    height: 45px;
    border-radius: 5px;
    border: 1px solid;
    background-color: green;
    color: #ffffff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 1ms ease-in;
    cursor: pointer;
  }

  .allow-signup:active {
    transform: scale(0.99);
  }

  .allow-signup:focus {
    outline: none;
  }

  .allow-signup.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  .allow-signup:hover {
    opacity: 0.93;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 400px;
  }

  .social-container {
    margin: 20px 0;
  }

  .goggle-icon {
    margin-right: 10px;
    font-size: 25px;
  }
  .social-container a {
    border: 1px solid #dddddd;
    border-radius: 5px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 50px;
    width: 400px;
    font-size: 20px;
    font-weight: bold;
    color: gray;
    cursor: pointer;
  }

  .social-container p {
    opacity: 0.6;
  }

  .sign-up {
    margin-right: auto;
    margin-top: 15px;
    display: flex;
  }

  .move-sign-up {
    margin-left: 15px;
    margin-bottom: 15px;
  }

  .block-signup {
    opacity: 0.5;
  }

  .block-signup:hover {
    opacity: 0.5;
  }

  .block-signup {
    opacity: 0.5;
  }

  .block-signup:hover {
    opacity: 0.5;
  }
`;

const ContentCheck = styled.p`
  margin: 0px auto 15px 10px;
  font-size: 13px;
  color: red;
  opacity: 0.8;
`;

export default Signup;
