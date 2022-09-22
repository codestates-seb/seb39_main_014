import React, { useEffect, useState } from "react";
import {
  WriteFormContainer,
  FormContainer,
  Contact,
  Title,
  Content,
} from "./styled";
import CkEditor from "../../components/ckEditor/CKEditor";
import PostButtonForm from "../../components/writeForm/PostButton";
import CareerForm from "./CareerForm";
import DivisionForm from "./DivisionForm";

function WriteForm() {
  const [state, setState] = useState({
    editor: null,
  });

  useEffect(() => {
    const editor = <CkEditor />;
    setState({ ...state, editor: editor });
  }, []);

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
