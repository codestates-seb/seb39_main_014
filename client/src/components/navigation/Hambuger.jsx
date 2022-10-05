import React from "react";
import styled from "styled-components";

function Hambuger({ login }) {
  return (
    <>
      {login ? (
        <>
          <HambugerContainer>
            <div>로그인</div>
            <div>모집하기</div>
            <div></div>
          </HambugerContainer>
        </>
      ) : (
        <HambugerContainer>
          <div>마이페이지</div>
          <div>모집하기</div>
          <div>로그아웃</div>
          <div></div>
        </HambugerContainer>
      )}
    </>
  );
}

const HambugerContainer = styled.div`
  width: 100px;
  position: absolute;
  top: 50px;
  right: 20px;
  background-color: wheat;
  border-radius: 16px;

  div:hover {
    color: blue;
    background-color: green;
  }
`;

export default Hambuger;
