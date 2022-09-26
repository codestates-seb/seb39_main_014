import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import InputGroup from "../inputGroup/InputGroup";
import { FcGoogle } from "react-icons/fc";
import useCheck from "../../hooks/useCheck";

// 회원가입 : 이메일, 이름, 닉네임 비밀번호, 비밀번호 확인

/** 이메일 정합성 체크 함수 */
function checkEmail(email) {
  let emailReg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailReg.test(email);
}

/** 이름 정합성 체크 함수 */
function checkUsername(username) {
  let usernameReg = /[ㄱ-ㅎㅏ-ㅣ가-힣]/g;
  return usernameReg.test(username);
}

/** 닉네임 정합성 체크 함수 */
function checkNick(nick) {
  let nickReg = /^[0-9a-zA-Zㄱ-ㅎ가-힣 ]{2,6}$/;
  return nickReg.test(nick);
}

/** 비밀번호 정합성 체크 함수 */
function checkPassword(password) {
  let passwordReg = /^[0-9a-zA-Z]{8,16}$/;
  return passwordReg.test(password);
}

/** 비밀번호 확인 정합성 체크 함수 */
function cofirmPassword(password, password2) {
  return password === password2;
}

function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [nick, setNick] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  // 정합성 검사 state (emailCheck && usernameCheck && nickCheck && passwordCheck && confirmPassword)
  const [emailCheck, setEmailCheck] = useState(false);
  const [usernameCheck, setUsernameCheck] = useState(false);
  const [nickCheck, setNickCheck] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const [PasswordConfirm, setPassWordConfirm] = useState(false);

  useCheck(checkEmail, email, setEmailCheck);
  useCheck(checkUsername, username, setUsernameCheck);
  useCheck(checkNick, nick, setNickCheck);
  useCheck(checkPassword, password, setPasswordCheck);

  useEffect(() => {
    if (cofirmPassword(password, password2) === false) {
      setPassWordConfirm(false);
    } else if (cofirmPassword(password, password2) === true) {
      setPassWordConfirm(true);
    }
  }, [password2]);

  //** SignUp 회원가입 POST 버튼 */
  const handleSubmit = async (event) => {
    event.preventDefault();

    // 회원가입 값 확인용
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
            <a className="social">
              <FcGoogle className="goggle-icon" />
              <p>구글 아이디로 가입하기</p>
            </a>
          </div>
          <hr />
          <span />
          <InputGroup
            placeholder="이메일"
            value={email}
            setValue={setEmail}
            // error={error.email}
          />
          {emailCheck === true ? (
            <></>
          ) : (
            <ContentCheck>올바른 형식의 이메일을 입력해주세요.</ContentCheck>
          )}

          <InputGroup
            placeholder="이름"
            value={username}
            setValue={setUsername}
            // error={errors.username}
          />

          {usernameCheck === true ? (
            <></>
          ) : (
            <ContentCheck>한글만 입력가능합니다.</ContentCheck>
          )}

          <InputGroup
            placeholder="닉네임"
            value={nick}
            setValue={setNick}
            // error={errors.username}
          />
          {nickCheck === true ? (
            <></>
          ) : (
            <ContentCheck>
              6글자 이내의 한글, 영어, 숫자 조합만 가능합니다.
            </ContentCheck>
          )}
          <InputGroup
            placeholder="비밀번호"
            value={password}
            setValue={setPassword}
            type="password"
            // error={errors.password}
          />
          {passwordCheck === true ? (
            <></>
          ) : (
            <ContentCheck>
              8~16자 영문 대 소문자, 숫자를 사용하세요.
            </ContentCheck>
          )}

          <InputGroup
            placeholder="비밀번호 확인"
            type="password"
            value={password2}
            setValue={setPassword2}
            // error={errors.password}
          />

          {PasswordConfirm === true ? (
            <></>
          ) : (
            <ContentCheck>비밀번호가 일치하지 않습니다.</ContentCheck>
          )}

          <button type="button" onClick={handleSubmit}>
            가입하기
          </button>
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
  display: flex;
  text-align: center;
  justify-content: center;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.22);
  position: relative;
  overflow: hidden;
  width: 500px;
  max-width: 100%;
  min-height: 550px;
  height: 800px;
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
  }
`;

const ContentCheck = styled.p`
  margin: 0px auto 15px 10px;
  font-size: 13px;
  color: red;
  opacity: 0.8;
`;

export default SignUp;
