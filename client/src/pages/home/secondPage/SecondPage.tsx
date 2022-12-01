import React from "react";
import styled from "styled-components";

function SecondPage() {
  return (
    <SecondPageStyle>
      <div>
        <h1 className="title">수풀은 지금</h1>
        <div className="body">
          <div>대한민국 개발자들이 사용하는 서비스로</div>
          <div>스터디 / 프로젝트 모집 서비스를 제공합니다</div>
        </div>
        <div className="count">이번 달에는 14팀 모집이 성사 되었어요!</div>
      </div>
      <div>
        <img
          className="hifive-img"
          alt="landing2"
          src="/assets/landing/hifive.png"
        />
      </div>
    </SecondPageStyle>
  );
}

const SecondPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;
  z-index: 1;
  background-color: #e5ece7;
  min-height: 500px;

  .title {
    min-width: 450px;
    font-size: 5rem;
    margin-bottom: 1rem;
  }

  .body {
    font-size: 1.5rem;
  }
  .count {
    margin-top: 30px;
    color: green;
    font-weight: bold;
    font-size: 1.5rem;
  }
  .hifive-img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 838px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h1 {
      font-size: 80rem;
    }

    .body {
      font-size: 1rem;
    }
  }
`;

export default SecondPage;
