import React from "react";
import FirstPageStyle from "./style";
import Video from "../../../assets/videos/landingVideo.mp4";

function FirstPage() {
  return (
    <FirstPageStyle>
      <div>내용 들어올 거임</div>
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
