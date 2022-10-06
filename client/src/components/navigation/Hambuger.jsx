import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import handleLogout from "../../api/handleLogout";

function Hambuger({ login }) {
  return (
    <>
      {login ? (
        <>
          <HambugerContainer>
            <StyledLink to="/mypage">
              <div>마이페이지</div>
            </StyledLink>
            <StyledLink to="/board/write">
              <div>모집하기</div>
            </StyledLink>
            <StyledLink>
              <div className="log-out" onClick={handleLogout}>
                로그아웃
              </div>
            </StyledLink>
          </HambugerContainer>
        </>
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
    </>
  );
}

const HambugerContainer = styled.div`
  box-sizing: content-box;
  width: 80px;
  position: absolute;
  font-size: 15px;
  text-align: center;
  padding: 10px;
  top: 55px;
  right: 30px;
  background-color: #f6f6f6;
  border-radius: 5px;
  display: none;

  transition: 0.7s;

  @media screen and (max-width: 768px) {
    transition: 0.5s;
    display: block;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;

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
    color: #ff7d85;
  }

  .hambuger {
    text-decoration: none;
  }
`;

export default Hambuger;
