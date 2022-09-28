import React, { useState } from "react";
import ReactQuill from "react-quill";
import styled from "styled-components";
import "react-quill/dist/quill.snow.css";

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

function Editor() {
  const [contents, setContents] = useState("");

  return (
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
