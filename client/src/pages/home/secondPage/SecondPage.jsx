import React from "react";
import SecondPageStyle from "./style";

function SecondPage() {
  return (
    <SecondPageStyle>
      <div>
        <div>
          <h1>수풀은 지금</h1>
          <div>
            <div>대한민국 개발자들이 사용하는 서비스로</div>
            <div>스터디 / 프로젝트 모집 서비스를 제공합니다</div>
          </div>
          <div className="count">이번 달에는 14팀 모집이 성사 되었어요!</div>
        </div>
        <div />
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

export default SecondPage;
