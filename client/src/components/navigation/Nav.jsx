import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import handleLogout from "../../api/handleLogout";

import styled from "styled-components";

function Nav() {
  return (
    <NavFrame>
      <NavContainer>
        <Logo>
          <StyledLink to="/">
            <img
              src="/assets/logo/logo_black.png"
              alt="asd.png"
              width={100}
              height={50}
            />
          </StyledLink>
          <LeftMenu>
            <StyledLink to="/board">
              <div>전체</div>
            </StyledLink>
            <StyledLink>
              <div>스터디</div>
            </StyledLink>
            <StyledLink>
              <div>프로젝트</div>
            </StyledLink>
          </LeftMenu>
        </Logo>

        <RightMenu>
          <StyledLink to="/board/write">
            <div>작성하기</div>
          </StyledLink>
          <StyledLink to="/login">
            <div>로그인</div>
          </StyledLink>
          <div className="logout-button" onClick={handleLogout}>
            로그아웃
          </div>
        </RightMenu>

        <GiHamburgerMenu className="hambuger" />
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
    cursor: pointer;

    // 조건부 렌더링 넣으면 지울 내용
    margin-left: 5px;
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
