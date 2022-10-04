import React, { useState, useEffect } from "react";
import { WriteComment, Comments } from "../../pages/boardInquiryPage/styled";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

function CommentForm() {
  const { boardId } = useParams();
  const BOARD_URL = `${process.env.REACT_APP_API_URL}/api/v1/board/${boardId}`;

  const [comment, setComment] = useState("");
  const [commentList, setCommentList] = useState([]);
  const [input, setInput] = useState("");

  const user = localStorage.getItem("nickname");

  useEffect(() => {
    getComment();
  }, []);

  const getComment = () => {
    axios
      .get(`${BOARD_URL}/comment`)
      .then((res) => {
        setCommentList(res.data.content);
      })
      .catch((err) => console.log(err));
  };
  console.log(commentList);
  const handleCommentSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `${BOARD_URL}/comment`,
        { content: comment },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => getComment())
      .then((res) => setComment(""))
      .catch((err) => console.log(err));
  };

  const handleModificationClick = (content) => {
    setInput(content);
  };

  const handleModificationSubmit = (number) => {
    console.log(number);
    axios
      .patch(
        `${BOARD_URL}/comment`,
        { groupNumber: number, content: input },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        setInput("");
        getComment();
      })
      .catch((err) => console.log(err));
  };

  const handlecCommentDelete = (e) => {
    Swal.fire({
      title: "댓글을 삭제 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#69D06F",
      cancelButtonColor: "#FF6464",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`${BOARD_URL}/comment`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
            data: { groupNumber: e },
          })
          .then((res) => getComment())
          .catch((err) => console.log(err));
        Swal.fire({
          title: "삭제 완료!",
          icon: "success",
          confirmButtonColor: "#69D06F",
        });
      }
    });
  };
  return (
    <>
      <WriteComment>
        <div>댓글&nbsp;{commentList.length}개</div>
        <textarea
          placeholder="댓글을 입력하세요"
          value={comment}
          // eslint-disable-next-line prettier/prettier
          onChange={(e) => setComment(e.target.value)}></textarea>
        <div className="Submit">
          <button onClick={handleCommentSubmit}>등록</button>
        </div>
      </WriteComment>
      <Comments>
        {commentList
          ? commentList.map((el) => (
              <div key={el.groupNumber} className="Comment-list">
                <div className="Username">
                  <div className="User-information">
                    <img src="/assets/logo/only_logo.svg" alt="profile" />
                    <div>
                      <span>{el.nickname}</span>
                      <span className="Createdat">
                        {el.createdAt.slice(0, 10)}
                      </span>
                    </div>
                  </div>
                  <span className="Delete-button">
                    {user === el.nickname ? (
                      <>
                        <HiOutlinePencil
                          className="HiOutlinePencil"
                          onClick={() => handleModificationClick(el.content)}
                        />
                        <RiDeleteBin5Line
                          className="RiDeleteBin5Line"
                          onClick={() => handlecCommentDelete(el.groupNumber)}
                        />
                      </>
                    ) : null}
                  </span>
                </div>
                {input ? (
                  <div className="Modify-box">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                    />
                    <button
                      // eslint-disable-next-line prettier/prettier
                      onClick={() => handleModificationSubmit(el.groupNumber)}>
                      완료
                    </button>
                  </div>
                ) : (
                  <p>{el.content}</p>
                )}
              </div>
            ))
          : null}
      </Comments>
    </>
  );
}

export default CommentForm;
