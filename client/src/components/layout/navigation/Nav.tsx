import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import handleLogout from "../../../api/handleLogout";

import styled from "styled-components";
import Hambuger from "./Hambuger";
import Profile from "./Profile";

const isLogin = Boolean(localStorage.getItem("token"));

function Nav() {
  const locationNow = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  if (locationNow.pathname === "/board") return null;
  return (
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
          <LeftMenu />
        </Logo>

        {isLogin ? (
          <RightMenu>
            <StyledLink to="/board/write">
              <div>모집하기</div>
            </StyledLink>
            <div className="logout-button" onClick={handleLogout}>
              로그아웃
            </div>
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

        {isOpen ? <Hambuger /> : null}
      </NavContainer>
    </NavFrame>
  );
}

const NavFrame = styled.nav`
  background: white;
  height: 4rem;

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
    cursor: pointer;
  }

  .test-hambuger {
    background-color: gray;
  }
  @media screen and (max-width: 768px) {
    align-items: center;

    .hambuger {
      display: block;
      margin-left: auto;
      cursor: pointer;
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
    margin-left: 20px;
  }

  .logout-button:hover {
    color: #ff7d85;
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
