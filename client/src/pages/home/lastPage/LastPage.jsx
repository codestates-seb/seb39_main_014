import React from "react";
import styled from "styled-components";

function LastPage() {
  return (
    <LastContainer>
      <ContentWraper>
        <ContentLeft>
          <img
            className="People"
            alt="persons"
            src="/assets/landing/People.svg"
          />
        </ContentLeft>
        <ContentRight>
          <h1>스터디 / 프로젝트 개설</h1>
          <p>
            원하시는 스터디나 프로젝트가 없으신가요? <br />
            직접 개설해 열정적인 스터디원을 모집해보세요!
          </p>
          <StartSoopool>
            <a href="http://localhost:3000/">시작하기</a>
          </StartSoopool>
        </ContentRight>
      </ContentWraper>
    </LastContainer>
  );
}

const LastContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: #f2f4f8;
  @media screen and (max-width: 838px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 0;
  }
`;

const ContentWraper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1170px;
  height: 100%;
  align-items: center;
  @media screen and (max-width: 838px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  max-height: 480px;
  align-items: center;
  justify-content: center;
  .People {
    display: flex;
    min-width: 600px;
    width: 90%;
    padding-right: 10rem;
    @media screen and (max-width: 838px) {
      padding: 0;
    }
  }
  @media screen and (max-width: 838px) {
    justify-content: center;
  }
`;

const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  color: #4a5e75;
  min-width: 420px;
  padding-right: 4rem;
  align-items: center;
  > h1 {
    font-size: 2.5rem;
  }
  > p {
    font-size: 1.1rem;
    line-height: 1.5rem;
  }
  @media screen and (max-width: 838px) {
    padding: 0;
  }
`;

const StartSoopool = styled.div`
  display: flex;
  > a {
    color: white;
    text-decoration: none;
    padding: 1rem 2.5rem;
    background-color: #66bd6c;
    margin-top: 3rem;
    border-radius: 40px;
  }
`;

export default LastPage;
