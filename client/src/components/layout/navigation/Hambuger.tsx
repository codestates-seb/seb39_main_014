import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import handleLogout from "../../../apis/logout";

function Hambuger() {
  const isLogin = Boolean(localStorage.getItem("token"));

  return (
    <div>
      {isLogin ? (
        <HambugerContainer>
          <StyledLink to="/mypage">
            <div>마이페이지</div>
          </StyledLink>
          <StyledLink to="/board/write">
            <div>모집하기</div>
          </StyledLink>
          <div className="log-out" onClick={handleLogout}>
            로그아웃
          </div>
        </HambugerContainer>
      ) : (
        <HambugerContainer>
          <StyledLink to="/login">
            <div>로그인</div>
          </StyledLink>
          <StyledLink to="/board/write">
            <div>모집하기</div>
          </StyledLink>
        </HambugerContainer>
      )}
    </div>
  );
}

const HambugerContainer = styled.div`
  box-sizing: content-box;
  width: 80px;
  position: absolute;
  font-size: 15px;
  text-align: center;
  padding: 10px;
  top: 50px;
  right: 35px;
  background-color: #f6f6f6;
  border-radius: 5px;
  display: none;

  transition: 0.33s;

  @media screen and (max-width: 768px) {
    transition: 0.33s;
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #6d6d6d;

  .not-selectedList {
    opacity: 0.5;
  }
  .selectedList {
    color: black;
  }

  div {
    margin-bottom: 10px;
    margin-top: 10px;
  }

  div:hover {
    transition: 0.7s;
    color: black;
    cursor: pointer;
  }

  .log-out:hover {
    color: #ea3434;
  }

  .hambuger {
    text-decoration: none;
  }
`;

export default Hambuger;
