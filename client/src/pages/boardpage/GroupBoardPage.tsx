import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import handleLogout from "../../apis/logout";
import styled from "styled-components";
import BoardPage from "./BoardPage";
import Profile from "../../components/layout/navigation/Profile";
import Hambuger from "../../components/layout/navigation/Hambuger";

const isLogin = Boolean(localStorage.getItem("token"));
const group = ["전체", "스터디", "프로젝트"];

function GroupBoardPage() {
  const [currentGroup, setCurrentGroup] = useState("전체");
  const [isOpen, setIsOpen] = useState(false);

  const handleGroup = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement;
    setCurrentGroup(eventTarget.innerText);
  };

  return (
    <>
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
              {group.map(el => (
                <StyledLink to="/board" key={el}>
                  <div
                    onClick={handleGroup}
                    className={
                      currentGroup === el ? "selectedList" : "not-selectedList"
                    }
                  >
                    {el}
                  </div>
                </StyledLink>
              ))}
            </LeftMenu>
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
      <BoardPage group={currentGroup} />
    </>
  );
}

const NavFrame = styled.nav`
  background: white;
  height: 4rem;
  margin-bottom: 1rem;

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
    font-size: 19px;
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

  .logout-button:hover {
    color: #ff7d85;
    transition: 0.2s;
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

  .not-selectedList {
    opacity: 0.5;
  }
  .selectedList {
    color: black;
  }

  .not-selectedList:hover {
    opacity: 0.8;
  }
`;

export default GroupBoardPage;
