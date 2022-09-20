import React from "react";
import styled from "styled-components";

function ThirdPage() {
  return (
    <ThirdContainer>
      <ContentWrapper>
        <ContentLeft>
          <img
            className="Three-post"
            alt="3posts"
            src="/assets/landing/Group.svg"
          />
        </ContentLeft>
        <ContentRight>
          <p className="Tech-Stack">
            기술스택별로 쉽게 찾는 스터디 / 프로젝트 정보
          </p>
          <p className="My-Study">
            지금 나에게 적합한 스터디를 쉽고 간편하게 찾아보세요
          </p>
        </ContentRight>
      </ContentWrapper>
    </ThirdContainer>
  );
}

const ThirdContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 50rem;
`;

const ContentWrapper = styled.section`
  display: flex;
  justify-content: space-around;
  width: 100%;
  max-width: 1170px;
  max-height: 840px;
  height: 100%;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ContentLeft = styled.div`
  display: flex;
  .Three-post {
    width: 30rem;
    @media screen and (max-width: 768px) {
      width: 25rem;
      padding: 0;
    }
  }
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;
const ContentRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-bottom: 10rem;
  align-items: center;

  .Tech-Stack {
    width: 19rem;
    font-size: 2rem;
    font-weight: 700;
  }
  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;
export default ThirdPage;
