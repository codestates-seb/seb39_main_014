import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

// /*

// loginUser Component에서 DropDown bar button CLick시 rendering 되는 component로,
// 작성 글, 찜한 글, 로그아웃으로 구성되어 있습니다.

// 로그아웃의 경우 handleLogout을 통해 user를 초기화하는 과정을 진행하며
// API를 통해 refresh token을 초기화 합니다.

// */

const Hambuger = () => {
  return (
    <Li>
      <DropDown>
        <ListContainer>
          <Ul>
            <Li>
              <Link to="/">프로필</Link>
            </Li>
            <Li>
              <Link to="/">매니저</Link>
            </Li>
            <Li>
              <Link>로그아웃</Link>
            </Li>
          </Ul>
        </ListContainer>
      </DropDown>
    </Li>
  );
};

const Li = styled.li`
  list-style: none;
`;

const Ul = styled.ul`
  list-style: none;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #666666;
  line-height: 22px;
`;

const DropDown = styled.button`
  border: none;
  outline: none;
  position: relative;
  width: 80px;
`;

const ListContainer = styled.div`
  border: 1px solid ${(props) => props.theme.borderColor};
  background-color: ${(props) => props.theme.bgColor};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 3px;
  margin-top: 7px;
  position: absolute;
  display: none;
  ${DropDown}:active & {
    display: block;
  }
  ${DropDown}:focus & {
    display: block;
  }
`;

export default Hambuger;
