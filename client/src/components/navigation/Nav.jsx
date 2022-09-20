import React from "react";
import NavFrame from "./style";

function Nav() {
  return (
    <NavFrame>
      <div className="nav-container">
        <div className="logo">logo</div>
        <div className="left">
          <div>전체</div>
          <div>스터디</div>
          <div>프로젝트</div>
        </div>
      </div>
      <div className="right">
        <div>작성하기</div>
        <div>로그인</div>
      </div>
    </NavFrame>
  );
}

export default Nav;
