import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { formats, modules } from "../../../constants/reactQuill";
import * as S from "../../../pages/writeForm/styled";
import { postBoard, updateBoard } from "../../../api/board";
import { getBoard } from "../../../api/boardDetail";
import { ConfirmModal, SuccessModal } from "../../shared/modal/Modal";
import { NewObj } from "../../../types/createBoard";

function Editor({ newObject }: NewObj) {
  const { boardId } = useParams();

  const [contents, setContents] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");

  const submitForm = {
    recruitCategory: newObject.recruitCategory,
    recruitMethod: newObject.recruitMethod,
    location: newObject.location,
    boardTechStacks: newObject.boardTechStacks,
    period: newObject.period,
    boardCareers: newObject.boardCareers,
    contact: contact,
    title: title,
    contents: contents,
  };

  const navigate = useNavigate();
  const handleCancelClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (window.confirm("정말로 취소 하시겠습니까?")) {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (boardId) {
      getBoard(boardId).then(res => {
        setContents(res.board.contents);
        setContact(res.board.contact);
        setTitle(res.board.title);
      });
    }
  }, []);

  /** 완료 버튼 클릭 핸들러 */
  const handleSubmitClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (Object.values(submitForm).some(el => el.length === 0)) {
      SuccessModal("입력하지 않은 부분이 있습니다.");
    } else {
      ConfirmModal("게시글을 등록 하시겠습니까?").then(result => {
        if (result.isConfirmed) {
          if (boardId) {
            updateBoard(boardId, submitForm);
          } else {
            postBoard(submitForm);
          }
          SuccessModal("등록 완료!").then(res => {
            if (res.isConfirmed) {
              navigate("/board");
            }
          });
        }
      });
    }
  };

  return (
    <>
      <S.Contact>
        <label>연락 방법</label>
        <input
          type="text"
          value={contact}
          placeholder="이메일이나 카카오톡 오픈 채팅 주소를 남겨주세요."
          onChange={e => setContact(e.target.value)}
        />
      </S.Contact>
      <S.Title>
        <label>제목</label>
        <input
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={e => setTitle(e.target.value)}
        />
      </S.Title>
      <S.Content>
        <label htmlFor="input">내용</label>
        <QuillContainer>
          <ReactQuill
            placeholder="글을 작성 해주세요."
            value={contents}
            onChange={setContents}
            theme="snow"
            modules={modules}
            formats={formats}
          />
        </QuillContainer>
      </S.Content>
      <S.PostButton>
        <button className="Post cancel" onClick={handleCancelClick}>
          취소
        </button>
        <button className="Post complete" onClick={handleSubmitClick}>
          완료
        </button>
      </S.PostButton>
    </>
  );
}

const QuillContainer = styled.div`
  width: 100%;

  .ql-container {
    min-height: 200px;
  }
  .ql-editor {
    min-height: 200px;
  }
`;

export default Editor;