import React from "react";
import styled from "styled-components";
import Login from "../../components/login/Login";
import { GoogleOAuthProvider } from "@react-oauth/google";

function LoginPage() {
  return (
    <LoginLayout>
      <GoogleOAuthProvider clientId="962315190640-182ovmp4ic1qpils5jquust37ucivqt0.apps.googleusercontent.com">
        <Login />
      </GoogleOAuthProvider>
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

export default LoginPage;
