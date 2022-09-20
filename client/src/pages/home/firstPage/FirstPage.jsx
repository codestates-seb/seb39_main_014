import React from "react";
import styled from "styled-components";
import Video from "../../../assets/videos/landingVideo.mp4";

function FirstPage() {
  return (
    <FirstPageStyle>
      <div className="content-layout">
        <div className="title">
          <h1>개발 스터디와 프로젝트</h1>
          <h1>수풀에서 쉽고 간편하게</h1>
        </div>

        <div className="body">
          <div>어디에서 스터디를 구하고 프로젝트를 개설하실지</div>
          <div>막막하시다면 수풀에서 찾아보세요!</div>
        </div>
        <StartSoopool>
          <a href="/">시작하기</a>
        </StartSoopool>
      </div>

      <div className="video-section">
        <video
          className="landing-video"
          autoPlay
          loop
          muted
          src={Video}
          type="vidoe/mp4"
        />
      </div>
    </FirstPageStyle>
  );
}

const FirstPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 95vh;
  position: relative;

  .video-section {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .landing-video {
    height: 100%;
    width: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    opacity: 0.4;
  }

  .content-layout {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80%;
    height: 80%;
    z-index: 2;

    h1 {
      font-size: 80px;
      color: black;
      white-space: nowrap;
    }

    .body {
      margin-top: 100px;
      margin-bottom: 100px;
      font-size: 30px;
      color: black;
    }
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

export default FirstPage;
