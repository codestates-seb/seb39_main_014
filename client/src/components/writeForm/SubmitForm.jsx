import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import {
  Contact,
  Title,
  Content,
  PostButton,
} from "../../pages/writeForm/styled";
import handleBoardSubmit from "../../api/handleBoardSubmit";
import Swal from "sweetalert2";
import axios from "axios";

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
  const { boardId } = useParams();
  const BOARD_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`;

  const WIRTEBOARD_URL =
    "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/write";

  const [contents, setContents] = useState("");
  const [contact, setContact] = useState("");
  const [title, setTitle] = useState("");

  const patchForm = {
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
  const onCancelHandler = (e) => {
    e.preventDefault();
    if (window.confirm("정말로 취소 하시겠습니까?")) {
      navigate(-1);
    }
  };

  useEffect(() => {
    if (boardId) {
      axios.get(BOARD_URL).then((res) => {
        setContents(res.data.board.contents);
        setContact(res.data.board.contact);
        setTitle(res.data.board.title);
      });
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "게시글을 등록 하시겠습니까?",
      text: "아직 작성할게 남으셨다면 취소를 눌러주세요",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#69D06F",
      cancelButtonColor: "#FF6464",
      confirmButtonText: "등록",
      cancelButtonText: "취소",
    }).then((result) => {
      if (result.isConfirmed) {
        if (boardId) {
          axios
            .patch(
              BOARD_URL,
              patchForm,

              {
                headers: {
                  Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
              }
            )
            .then((res) => console.log("haha"))
            .catch((error) => console.log("err:", error));
        } else {
          handleBoardSubmit(
            WIRTEBOARD_URL,
            newObject.recruitCategory,
            newObject.recruitMethod,
            newObject.location,
            newObject.boardTechStacks,
            newObject.period,
            newObject.boardCareers,
            contact,
            title,
            contents
          );
        }
        Swal.fire({
          title: "등록 완료!",
          icon: "success",
          confirmButtonColor: "#69D06F",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/board");
          }
        });
      }
    });
  };

  return (
    <>
      <Contact>
        <label>연락 방법</label>
        <input
          type="text"
          value={contact}
          placeholder="이메일이나 카카오톡 오픈 채팅 주소를 남겨주세요."
          onChange={(e) => setContact(e.target.value)}
        />
      </Contact>
      <Title>
        <label>제목</label>
        <input
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
