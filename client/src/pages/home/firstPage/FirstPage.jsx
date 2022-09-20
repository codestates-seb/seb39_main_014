import React from "react";
import FirstPageStyle from "./style";
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

        <div>버튼 컴포넌트 자리</div>
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

export default FirstPage;
