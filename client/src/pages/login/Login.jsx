import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import InputGroup from "../../components/InputGroup/InputGroup";

function Login() {
  return (
    <LoginLayout>
      <div>
        <div>
          <h1>로그인</h1>
          <form onSubmit>
            <InputGroup placeholder="Username" value setValue error />
            <InputGroup placeholder="Password" value setValue error />
            <button type="submit">로그인</button>
          </form>
          <small>
            아직 아이디가 없나요?
            <Link href="/register">
              <div>회원가입</div>
            </Link>
          </small>
        </div>
      </div>
    </LoginLayout>
  );
}

const LoginLayout = styled.form;

export default Login;
