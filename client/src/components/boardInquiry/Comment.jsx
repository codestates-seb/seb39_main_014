import React from "react";
import { Comments } from "../../pages/boardInquiryPage/styled";

function Comment() {
  return (
    <Comments>
      <div className="Username">
        <img src="/assets/logo/only_logo.svg" alt="profile" />
        <div>
          <span>프로계획마</span>
          <span className="Createdat">2022-09-14 01:33</span>
        </div>
      </div>
      <p>저 스터디 가입하고 싶은데 계획은 제가 세워도 될까요 ?</p>
    </Comments>
  );
}

export default Comment;
