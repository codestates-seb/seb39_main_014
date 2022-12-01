import React from "react";
import styled from "styled-components";

import { GoogleOAuthProvider } from "@react-oauth/google";
import Signup from "../../components/feature/signUp/Signup";

function SignUpPage() {
  return (
    <SignUpLayout>
      <GoogleOAuthProvider clientId="962315190640-182ovmp4ic1qpils5jquust37ucivqt0.apps.googleusercontent.com">
        <Signup />
      </GoogleOAuthProvider>
    </SignUpLayout>
  );
}

const SignUpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 900px;
`;

export default SignUpPage;
