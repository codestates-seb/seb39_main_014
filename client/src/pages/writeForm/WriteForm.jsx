import React from "react";
import {
  WriteFormContainer,
  FormContainer,
  Contact,
  Title,
  Content,
} from "./styled";

import Editor from "../../components/reactQuill/ReactQuill";
import PostButtonForm from "../../components/writeForm/PostButton";
import CareerForm from "../../components/writeForm/CareerForm";
import DivisionForm from "../../components/writeForm/DivisionForm";
import Footer from "../../components/footer/Footer";
function WriteForm() {
  return (
    <>
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
            <Editor />
          </Content>
          <PostButtonForm />
        </FormContainer>
      </WriteFormContainer>
      <Footer />
    </>
  );
}

export default WriteForm;
