import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import handleLogout from "../../api/handleLogout";

import styled from "styled-components";
import Hambuger from "./Hambuger";
import Profile from "./Profile";

// true일경우 로그인된 상태
const isLogin = Boolean(localStorage.getItem("token"));

function Nav() {
  const locationNow = useLocation();
  const [isOpen, setIsOpen] = useState(false); // 메뉴의 초기값을 false로 설정

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
            <LeftMenu></LeftMenu>
          </Logo>

          {isLogin ? (
            <RightMenu>
              <StyledLink to="/board/write">
                <div>모집하기</div>
              </StyledLink>
              <StyledLink className="logout-button" onClick={handleLogout}>
                <div>로그아웃</div>
              </StyledLink>
              <Profile />
            </RightMenu>
          ) : (
            <RightMenu>
              <StyledLink to="/board/write">
                <div>모집하기</div>
              </StyledLink>
              <StyledLink to="/login">
                <div>로그인</div>
              </StyledLink>
            </RightMenu>
          )}

          <GiHamburgerMenu
            className="hambuger"
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
          {/* <div className="test-hambuger">햄버거</div> */}
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

  .test-hambuger {
    background-color: gray;
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

    div {
      display: none;
    }
  }
`;

const RightMenu = styled.div`
  display: flex;
  margin-right: 0px;
  align-items: center;

  .logout-button {
    color: #5f5f5f;
    margin-left: 20px;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    div {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;
  margin-left: 20px;
`;

export default Nav;
