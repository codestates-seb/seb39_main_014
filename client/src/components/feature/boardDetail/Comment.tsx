import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { RiDeleteBin5Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi";

import { WriteComment, Comments } from "../../../pages/boardDetailPage/styled";
import {
  deleteComments,
  postComments,
  updateComments,
} from "../../../api/boardComment";
import useCommentQuery from "../../../hooks/useCommentQuery";
import { ConfirmModal, SuccessModal } from "../../shared/modal/Modal";
import { getLocalStorage } from "../../../utils/storage";

function CommentForm() {
  const { boardId } = useParams<string>();
  const { commentLists } = useCommentQuery(Number(boardId));

  const [groupNumber, setGroupNumber] = useState<number | null>(null);
  const [input, setInput] = useState("");

  const contentRef = useRef() as React.MutableRefObject<HTMLTextAreaElement>;

  const QueryClient = useQueryClient();

  const updateMutate = useMutation(updateComments, {
    onSuccess: () => {
      QueryClient.invalidateQueries(["getComments"], { refetchType: "all" });
    },
  });

  const postMutate = useMutation(postComments, {
    onSuccess: () => {
      QueryClient.invalidateQueries(["getComments"], { refetchType: "all" });
    },
  });

  const deleteMutate = useMutation(deleteComments, {
    onSuccess: () => {
      QueryClient.invalidateQueries(["getComments"], { refetchType: "all" });
    },
  });

  const user = getLocalStorage("nickname");

  const handleCommentSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (contentRef.current.value) {
      postMutate.mutate({
        boardId: Number(boardId),
        content: contentRef.current.value,
      });
      contentRef.current.value = "";
    }
  };

  const handleModificationClick = (content: string) => {
    setInput(content);
  };

  const handleModificationSubmit = (number: number) => {
    updateMutate.mutate({
      boardId: Number(boardId),
      groupNumber: number,
      content: input,
    });
    setGroupNumber(null);
  };

  const handlecCommentDelete = (groupNumber: number) => {
    ConfirmModal("댓글을 삭제 하시겠습니까?").then(res => {
      if (res.isConfirmed) {
        deleteMutate.mutate({ boardId: Number(boardId), groupNumber });
        SuccessModal("삭제 완료!");
      }
    });
  };

  return (
    <>
      <WriteComment>
        <div>댓글&nbsp;{commentLists?.length}개</div>
        <textarea ref={contentRef} placeholder="댓글을 입력하세요" />
        <div className="Submit">
          <button onClick={handleCommentSubmit}>등록</button>
        </div>
      </WriteComment>
      <Comments>
        {commentLists &&
          commentLists.map(el => (
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
                  {user === el.nickname && (
                    <>
                      <HiOutlinePencil
                        className="HiOutlinePencil"
                        onClick={() => {
                          setGroupNumber(el.groupNumber);
                          handleModificationClick(el.content);
                        }}
                      />
                      <RiDeleteBin5Line
                        className="RiDeleteBin5Line"
                        onClick={() => handlecCommentDelete(el.groupNumber)}
                      />
                    </>
                  )}
                </span>
              </div>
              {groupNumber === el.groupNumber ? (
                <div className="Modify-box">
                  <textarea
                    value={input}
                    onChange={e => setInput(e.target.value)}
                  />
                  <div>
                    <button
                      onClick={() => handleModificationSubmit(el.groupNumber)}
                    >
                      완료
                    </button>
                  </div>
                </div>
              ) : (
                <p>{el.content}</p>
              )}
            </div>
          ))}
      </Comments>
    </>
  );
}

export default CommentForm;
