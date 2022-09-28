import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";

import styled from "styled-components";

function Nav() {
  return (
    <NavFrame>
      <NavContainer>
        <Logo>
          <div>
            <StyledLink to="/">
              <img
                src="/assets/logo/logo_black.png"
                alt="asd.png"
                width={100}
                height={50}
              />
            </StyledLink>
          </div>
        </Logo>
        <Menu>
          <div className="left-menu">
            <div>
              <StyledLink to="/board">전체</StyledLink>
            </div>
            <div>스터디</div>
            <div>프로젝트</div>
          </div>

          <div className="right-menu">
            <StyledLink to="/board/write">
              <div>작성하기</div>
            </StyledLink>
            <StyledLink to="/login">
              <div>로그인</div>
            </StyledLink>
          </div>

          <GiHamburgerMenu className="hambuger" />
        </Menu>
      </NavContainer>
    </NavFrame>
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
  width: 1000px;
  padding: 2rem;
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

const Logo = styled.div`
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;

  .left-menu {
    display: flex;
    margin-left: 10px;
  }

  .right-menu {
    display: flex;
    margin-right: 10px;
  }

  div {
    margin-left: 40px;
  }

  .hambuger {
    display: none;
    margin-left: auto;
    margin-right: 20px;
  }

  @media screen and (max-width: 768px) {
    align-items: center;

    .left-menu {
      display: none;
      margin-left: 10px;
    }

    .right-menu {
      display: none;
    }

    .hambuger {
      display: block;
    }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #5f5f5f;
`;

export default Nav;
