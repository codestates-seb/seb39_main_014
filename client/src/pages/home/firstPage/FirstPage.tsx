import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Video from "../../../assets/videos/landingVideo.mp4";

function FirstPage() {
  return (
    <FirstPageStyle>
      <div className="content-layout">
        <div className="title">
          <p>스터디와 프로젝트 모집</p>
          <p>수풀에서 쉽고 간편하게</p>
        </div>

        <div className="body">
          <div>어디에서 개발 스터디를 구하고 프로젝트를 </div>
          <div>개설하실지 막막하시다면 수풀에서 찾아보세요!</div>
        </div>
        <StartSoopool>
          <Link to="/board">시작하기</Link>
        </StartSoopool>
      </div>

      <div className="video-section">
        <video className="landing-video" autoPlay loop muted src={Video} />
      </div>
    </FirstPageStyle>
  );
}

const FirstPageStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;

  padding: 0 30px;
  height: 95vh;
  position: relative;
  text-size-adjust: auto;

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
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 80%;
    z-index: 2;
  }
  .title {
    font-weight: 700;
    font-size: 500%;
    color: black;
    white-space: nowrap;
    margin-bottom: 1.5rem;
  }

  .body {
    margin: 1rem;
    font-size: 200%;
    color: black;
  }

  @media all and (max-width: 838px) {
    .title {
      font-weight: 700;
      font-size: 220%;
    }

    .body {
      font-size: 100%;
      white-space: nowrap;
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
