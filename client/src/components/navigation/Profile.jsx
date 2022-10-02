import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function Profile() {
  return (
    <StyledLink to="/mypage">
      <img alt="profile" src="/assets/logo/only_logo.svg" className="profile" />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  margin-left: 20px;

  .profile {
    width: 40px;
    height: 40px;
    padding: 5px;
    box-shadow: rgba(149, 157, 165, 0.2) 5px 5px 16px 5px;
    border-radius: 50%;
  }
`;

export default Profile;
