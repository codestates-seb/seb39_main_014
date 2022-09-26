import React, { useState } from "react";
import styled from "styled-components";
import InputGroup from "../inputGroup/InputGroup";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <LoginFrame>
      <LoginContainer>
        <LoginForm>
          <h1>로그인</h1>
          <div className="social-container">
            <a className="social">
              <FcGoogle className="goggle-icon" />
              <p>구글 아이디로 로그인</p>
            </a>
          </div>
          <hr />

          <InputGroup
            placeholder="이메일"
            value={email}
            setValue={setEmail}
            // error={error.email}
          />

          <InputGroup
            placeholder="비밀번호"
            value={password}
            setValue={setPassword}
            // error={error.email}
          />

          <LoginButton>로그인</LoginButton>

          <div className="sign-up">
            <div>수풀이 처음이신가요?</div>
            <div className="move-sign-up">
              <Link to="/signup">회원가입</Link>
            </div>
          </div>
        </LoginForm>
      </LoginContainer>
    </LoginFrame>
  );
}

const LoginFrame = styled.div`
  * {
    box-sizing: border-box;
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

  input {
    background-color: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 395px;
  }

  .sign-up {
    margin-right: auto;
    margin-top: 15px;
    display: flex;
  }

  .move-sign-up {
    margin-left: 15px;
  }
`;

const LoginContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 480px;
`;

const LoginForm = styled.form`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 50px;
  height: 100%;
  position: absolute;
  height: 100%;
  transition: all 0.6s ease-in-out;

  .social-container {
    margin: 20px 0;
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

  .goggle-icon {
    margin-right: 10px;
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

export default Login;
