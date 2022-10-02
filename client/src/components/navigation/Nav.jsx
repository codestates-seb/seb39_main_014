import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import handleLogout from "../../api/handleLogout";

import styled from "styled-components";

// true일경우 로그인된 상태
const isLogin = Boolean(localStorage.getItem("token"));

function Nav() {
  const locationNow = useLocation();

  if (locationNow.pathname === "/board") return null;
  return (
    <>
      <NavFrame>
        <NavContainer>
          <Logo>
            <StyledLink to="/board">
              <img
                src="/assets/logo/logo_black.png"
                alt="asd.png"
                width={100}
                height={50}
              />
            </StyledLink>
            <LeftMenu>
              {/* <StyledLink to="/boardpage">
                <div>전체</div>
              </StyledLink>
              <StyledLink to="/boardpage">
                <div>스터디</div>
              </StyledLink>
              <StyledLink to="/boardpage">
                <div>프로젝트</div>
              </StyledLink> */}
            </LeftMenu>
          </Logo>

          {isLogin ? (
            <RightMenu>
              <StyledLink to="/board/write">
                <div>작성하기</div>
              </StyledLink>
              <div className="logout-button" onClick={handleLogout}>
                로그아웃
              </div>
            </RightMenu>
          ) : (
            <RightMenu>
              <StyledLink to="/board/write">
                <div>작성하기</div>
              </StyledLink>
              <StyledLink to="/login">
                <div>로그인</div>
              </StyledLink>
            </RightMenu>
          )}

          <GiHamburgerMenu className="hambuger" />
        </NavContainer>
      </NavFrame>
    </>
  );
}

const NavFrame = styled.nav`
  background: white;
  height: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: sticky;

  top: 0;
  z-index: 10;

  font-size: 20px;
  font-weight: bold;
  color: #5f5f5f;
`;

const NavContainer = styled.div`
  width: 1100px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .hambuger {
    display: none;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    .hambuger {
      display: block;
      margin-left: auto;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-left: -40px;
  }
`;

const LeftMenu = styled.div`
  display: flex;
  cursor: pointer;
  margin-left: 20px;

  .menu-list {
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    .menu-list {
      display: none;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  margin-right: 0px;

  .logout-button {
    text-decoration: none;
    color: #5f5f5f;
    margin-left: 20px;
    cursor: pointer;

    // 조건부 렌더링 넣으면 지울 내용
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;
  margin-left: 20px;

  div {
    margin-left: 10px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    div {
      display: none;
    }
  }
`;

export default Nav;
