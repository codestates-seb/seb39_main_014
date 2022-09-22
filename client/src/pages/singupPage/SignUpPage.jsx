import React from "react";
import styled from "styled-components";
import SignUp from "../../components/SignUp/SignUp";

function SignUpPage() {
  return (
    <SignUpLayout>
      <SignUp />
    </SignUpLayout>
  );
}

const SignUpLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export default SignUpPage;
