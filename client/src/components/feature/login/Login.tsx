import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "../../shared/inputGroup/InputGroup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import handleLogin from "../../../apis/login";

function Login() {
  const LOGIN_URL = `${process.env.REACT_APP_API_URL}/log-in`;

  const [userId, setuserId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    handleLogin({ LOGIN_URL, userId, password, setErrors });
  };

  return (
    <LoginFrame>
      <LoginContainer>
        <h1 className="title">로그인</h1>

        <SocialContainer>
          <div className="social">
            <FcGoogle className="google-icon" />
            <div className="googgle-login">구글 계정으로 로그인</div>
          </div>
        </SocialContainer>

        <hr />

        <LoginForm onSubmit={handleSubmit}>
          <InputGroup
            placeholder="아이디"
            value={userId}
            setValue={setuserId}
            setErrors={setErrors}
          />

          <InputGroup
            placeholder="비밀번호"
            value={password}
            setValue={setPassword}
            type="password"
            setErrors={setErrors}
          />

          {errors.length !== 0 ? (
            <>
              <small>아이디 또는 비밀번호를 잘못 입력하셨습니다.</small>
              <small>입력하신 내용을 다시 확인해주세요.</small>
            </>
          ) : null}

          <LoginButton>로그인</LoginButton>
        </LoginForm>

        <SignupContainer>
          <div>수풀이 처음이신가요?</div>
          <div>
            <Link to="/signup" className="move-sign-up">
              회원가입
            </Link>
          </div>
        </SignupContainer>
      </LoginContainer>
    </LoginFrame>
  );
}

const LoginFrame = styled.div`
  * {
    box-sizing: border-box;
  }

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 395px;
  }
`;

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  width: 500px;
  max-width: 100%;
  min-height: 480px;

  .title {
    font-weight: 700;
    font-size: 2rem;
    margin-right: 300px;
    margin-bottom: 20px;
    margin-top: 50px;
  }

  hr {
    border: 0;
    width: 80%;
    opacity: 0.2;
    height: 1px;
    background: gray;
  }
`;

/** div - 구글 아이디로 로그인 */
const SocialContainer = styled.div`
  .social {
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;

    width: 395px;
    height: 50px;
    border-radius: 5px;
    margin-bottom: 15px;
    border: 1px solid #dddddd;
    transition: 0.3s;
  }

  .googgle-login {
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

/**form - 아이디, 비밀번호, 로그인 버튼 */
const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  transition: all 0.6s ease-in-out;

  small {
    margin-top: 5px;
    font-weight: 200;
    color: red;
  }
`;

const LoginButton = styled.button`
  margin-top: 20px;
  width: 400px;
  height: 45px;
  border-radius: 5px;
  border: 1px solid;
  background-color: green;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 2px;
  transition: transform 5ms ease-in;

  cursor: pointer;

  &:active {
    transform: scale(0.99);
  }

  &:hover {
    opacity: 0.93;
  }

  p {
    opacity: 0.7;
  }
`;

const SignupContainer = styled.div`
  margin: 15px auto 0 50px;
  display: flex;

  .move-sign-up {
    margin-left: 15px;
    font-size: 14px;
    text-decoration: none;
    color: gray;
  }
`;

export default Login;
