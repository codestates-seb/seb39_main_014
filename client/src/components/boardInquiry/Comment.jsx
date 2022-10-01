import React from "react";
import { Comments } from "../../pages/boardInquiryPage/styled";

function Comment(commentList) {
  return (
    <Comments>
      {commentList.commentList
        ? commentList.commentList.map((el) => (
            <div key={el.groupNumber} className="Comment-list">
              <div className="Username">
                <img src="/assets/logo/only_logo.svg" alt="profile" />
                <div>
                  <span>{el.nickname}</span>
                  <span className="Createdat">{el.createdAt}</span>
                </div>
              </div>
              <p>{el.content}</p>
            </div>
          ))
        : null}
    </Comments>
  );
}

export default Comment;
