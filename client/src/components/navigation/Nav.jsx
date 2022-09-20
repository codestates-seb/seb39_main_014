import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";

function Nav() {
  return (
    <NavFrame>
      <NavContainer>
        <LeftMenu>
          <Logo>
            <div>
              <Link to="/">
                <img
                  src="/assets/logo/logo_black.png"
                  alt="asd.png"
                  width={100}
                  height={50}
                />
              </Link>
            </div>
          </Logo>
          <Menu>
            <div>전체</div>
            <div>스터디</div>
            <div>프로젝트</div>
          </Menu>
        </LeftMenu>
        <RightMenu>
          <Link to="/board/write" style={{ textDecoration: "none" }}>
            <div>작성하기</div>
          </Link>
          <Link to="/login" style={{ textDecoration: "none" }}>
            <div>로그인</div>
          </Link>
        </RightMenu>
      </NavContainer>
    </NavFrame>
  );
}

const NavFrame = styled.nav`
  background: white;
  height: 5rem;
  display: flex;
  font-size: 1rem;
  position: sticky;
  justify-content: center;
  top: 0;
  z-index: 10;
  /* margin-top: 0.5rem;
  margin-bottom: 0.5rem; */

  font-size: 20px;
  font-weight: bold;
  color: #5f5f5f;
  @media screen and (max-width: 1280px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  width: 1280px;
  height: 100%;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

const LeftMenu = styled.div`
  display: flex;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  div {
    margin-left: 40px;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  div {
    color: #5f5f5f;
    margin-right: 50px;
  }
`;

export default Nav;
