import React, { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { useNavigate } from "react-router-dom";
import {
  Contact,
  Title,
  Content,
  PostButton,
} from "../../pages/writeForm/styled";
import handleBoardSubmit from "../../api/handleBoardSubmit";

const toolbarOptions = [
  ["link"],
  [{ header: [1, 2, 3, false] }],
  ["bold", "italic", "underline", "strike"],
  ["blockquote"],
  [{ list: "ordered" }, { list: "bullet" }],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
];

export const formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "align",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "background",
  "color",
  "link",
  "image",
  "video",
  "width",
];

const modules = {
  toolbar: {
    container: toolbarOptions,
  },
};

function Editor({ newObject }) {
  const WIRTEBOARD_URL =
    "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/write";

  const [contents, setContents] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");

  const navigate = useNavigate();
  const onCancelHandler = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 취소 하시겠습니까?")) {
      navigate(-1);
    }
  };
  console.log(contents);

  const handleSubmit = (e) => {
    e.preventDefault();
    handleBoardSubmit(
      WIRTEBOARD_URL,
      newObject.recruitCategory,
      newObject.recruitMethod,
      newObject.location,
      newObject.techStacks,
      newObject.period,
      newObject.careers,
      newObject.boardCareers,
      contact,
      title,
      contents
    );
  };

  return (
    <>
      <Contact>
        <label htmlFor="input">연락 방법</label>
        <input
          id="input"
          type="text"
          value={contact}
          placeholder="이메일이나 카카오톡 오픈 채팅 주소를 남겨주세요."
          onChange={(e) => setContact(e.target.value)}
        />
      </Contact>
      <Title>
        <label htmlFor="input">제목</label>
        <input
          id="input"
          type="text"
          value={title}
          placeholder="제목을 입력하세요."
          onChange={(e) => setTitle(e.target.value)}
        />
      </Title>
      <Content>
        <label htmlFor="input">내용</label>
        <QuillContainer>
          <ReactQuill
            placeholder={"글을 작성 해주세요."}
            value={contents}
            onChange={setContents}
            theme="snow"
            modules={modules}
            formats={formats}
          ></ReactQuill>
        </QuillContainer>
      </Content>
      <PostButton>
        <button className="Post cancel" onClick={onCancelHandler}>
          취소
        </button>
        <button className="Post complete" onClick={handleSubmit}>
          완료
        </button>
      </PostButton>
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
