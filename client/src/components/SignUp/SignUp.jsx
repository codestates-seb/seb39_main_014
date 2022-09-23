import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import InputGroup from "./InputGroup";

// 회원가입 : 이메일, 이름, 닉네임 비밀번호, 비밀번호 확인
// 로그인 :

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");

  //** SignUp 회원가입 POST 버튼 */
  const handleSubmit = async (event) => {
    event.preventDefault();

    console.log({ email, username, nick, password });

    try {
      const res = await axios.post("/auth/register", {
        email,
        username,
        nick,
        password,
      });
      console.log("res", res);
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <LoginFrame>
      <FormContainer>
        <form onSubmit={handleSubmit}>
          <h1>회원가입</h1>
          <div className="social-container">
            <a className="social">구글 아이디로 가입하기</a>
          </div>
          <hr />
          <span />
          <InputGroup
            placeholder="이메일"
            value={email}
            setValue={setEmail}
            // error={errors.email}
          />

          <InputGroup
            placeholder="이름"
            value={username}
            setValue={setUsername}
            // error={errors.username}
          />

          <InputGroup
            placeholder="닉네임"
            value={nick}
            setValue={setNick}
            // error={errors.username}
          />

          <InputGroup
            placeholder="비밀번호"
            value={password}
            setValue={setPassword}
            // error={errors.password}
          />
          <button type="button">가입하기</button>
          <div className="sign-up">
            <div>이미 아이디가 있으신가요?</div>
            <div className="move-sign-up">
              <Link to="/login">로그인</Link>
            </div>
          </div>
        </form>
      </FormContainer>
    </LoginFrame>
  );
}

const LoginFrame = styled.div`
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 550px;
  height: 600px;
`;

const FormContainer = styled.div`
  position: absolute;
  top: 0;
  height: 100%;
  transition: all 0.6s ease-in-out;

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

  button:active {
    transform: scale(0.99);
  }

  button:focus {
    outline: none;
  }

  button.ghost {
    background-color: transparent;
    border-color: #ffffff;
  }

  button:hover {
    opacity: 0.93;
  }

  form {
    background-color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 0 50px;
    height: 100%;
    text-align: center;
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

  .sign-up {
    margin-right: auto;
    margin-top: 15px;
    display: flex;
  }

  .move-sign-up {
    margin-left: 15px;
  }
`;

export default SignUp;
