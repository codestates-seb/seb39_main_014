import React from "react";
import { Comments } from "../../pages/boardInquiryPage/styled";
import { RiDeleteBin5Line } from "react-icons/ri";
import axios from "axios";
import { useParams } from "react-router-dom";
function Comment(commentList) {
  const { boardId } = useParams();
  const BOARD_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`;

  const user = localStorage.getItem("nickname");
  // console.log(commentList);
  const handlecCommentDelete = (e) => {
    console.log(e);
    // axios
    //   .delete(
    //     `${BOARD_URL}/comment`,
    //     { groupNumber: e },
    //     {
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem("token")}`,
    //       },
    //     }
    //   )
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));
  };

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
                <span className="Delete-button">
                  {user === el.nickname ? (
                    <RiDeleteBin5Line
                      className="RiDeleteBin5Line"
                      onClick={() => handlecCommentDelete(el.groupNumber)}
                    />
                  ) : null}
                </span>
              </div>
              <p>{el.content}</p>
            </div>
          ))
        : null}
    </Comments>
  );
}

export default Comment;
