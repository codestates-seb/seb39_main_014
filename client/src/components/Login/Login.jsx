import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Login() {
  return (
    <LoginFrame>
      <div className="container" id="container">
        <div className="form-container sign-in-container">
          <form action="#">
            <h1>로그인</h1>
            <div className="social-container">
              <a href className="social">
                구글 아이디로 로그인
              </a>
            </div>
            <hr />
            <span />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="button">로그인</button>
            <div className="sign-up">
              <div>수풀이 처음이신가요?</div>
              <div className="move-sign-up">
                <Link to="/sign_up">회원가입</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </LoginFrame>
  );
}

const LoginFrame = styled.div`
  /* margin: 10px;
  max-width: 800px;
  min-width: 700px;
  max-height: 1000px;
  width: 40%;
  height: 70%;
  border: 2px solid #5f5f5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */

  h1 {
    font-weight: bold;
    margin-right: auto;
  }

  h2 {
    text-align: center;
  }

  p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: 0.5px;
    margin: 20px 0 30px;
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

  .container {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    position: relative;
    overflow: hidden;
    width: 500px;
    max-width: 100%;
    min-height: 480px;
  }

  .form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all 0.6s ease-in-out;
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

export default Login;
