import React from "react";
import styled from "styled-components";
import InputGroup from "../../components/InputGroup/InputGroup";

function Login() {
  return (
    <LoginLayout>
      <LoginForm>
        <UpperSide>
          <h1>로그인</h1>
          <OatuhLogin>구글로 로그인 하실?</OatuhLogin>
        </UpperSide>
        <MiddleLine>OR</MiddleLine>
        <LowerSide>
          <form>
            <InputGroup placeholder="로그인" />
            <InputGroup placeholder="패스워드" />
          </form>
          <SignUpSide>
            <small>수풀이 처음이신가요?</small>
            <small className="sign-up">회원가입</small>
          </SignUpSide>
        </LowerSide>
      </LoginForm>
    </LoginLayout>
  );
}

const LoginLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const LoginForm = styled.div`
  margin: 10px;
  max-width: 800px;
  min-width: 700px;
  max-height: 1000px;
  width: 40%;
  height: 70%;
  border: 2px solid #5f5f5f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const UpperSide = styled.div`
  width: 500px;
  height: 300px;
  display: flex;
  flex-direction: column;
  h1 {
    margin-left: 100px;
    font-size: 30px;
  }
`;

const OatuhLogin = styled.div`
  width: 100%;
  height: 50px;
  width: 300px;
  display: flex;
  align-self: center;
  justify-content: center;
  align-items: center;
`;

const MiddleLine = styled.div``;

const LowerSide = styled.div`
  margin-top: 100px;
`;

const SignUpSide = styled.div`
  .sign-up {
    margin-left: 10px;
  }
`;

export default Login;
