import React, { useEffect, useState } from "react";
import {
  WriteFormContainer,
  FormContainer,
  Contact,
  Title,
  Content,
} from "./styled";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import PostButtonForm from "../../components/writeForm/PostButton";
import CareerForm from "../../components/writeForm/CareerForm";
import DivisionForm from "../../components/writeForm/DivisionForm";

function WriteForm() {
  const [content, setContent] = useState({
    body: "",
  });
  const [state, setState] = useState({
    editor: null,
  });

  useEffect(() => {
    const editor = (
      <CKEditor
        id={"ck-editor-text"}
        editor={ClassicEditor}
        data={state.data}
        onChange={(event, editor) => {
          const data = editor.getData();
          // console.log({ event, editor, data });
          setContent({
            ...content,
            body: data,
          });
        }}
      />
    );
    setState({ ...state, editor: editor });
  }, [content]);
  return (
    <WriteFormContainer>
      <FormContainer>
        <DivisionForm />
        <CareerForm />
        <Contact>
          <label htmlFor="input">연락 방법</label>
          <input
            id="input"
            type="text"
            placeholder="이메일이나 카카오톡 오픈 채팅 주소를 남겨주세요."
          />
        </Contact>
        <Title>
          <label htmlFor="input">제목</label>
          <input id="input" type="text" placeholder="제목을 입력하세요." />
        </Title>
        <Content>
          <label htmlFor="input">내용</label>
          {state.editor}
        </Content>
        <PostButtonForm />
      </FormContainer>
    </WriteFormContainer>
  );
}

export default WriteForm;
