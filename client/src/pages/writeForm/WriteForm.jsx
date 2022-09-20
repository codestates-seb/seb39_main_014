import React from "react";
import styled from "styled-components";

function WriteForm() {
  return (
    <WriteFormContainer>
      <FormContainer>
        <ContentDivision>
          <ContentLeft />
          <ContentRight />
        </ContentDivision>
        <Career />
        <Contact />
        <Title />
        <Content />
      </FormContainer>
    </WriteFormContainer>
  );
}

const WriteFormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 95vh;
`;

const FormContainer = styled.form`
  display: flex;
  width: 100%;
  max-width: 1280px;
  padding: 2rem 5rem;
`;

const ContentDivision = styled.div`
  display: flex;
  width: 100%;
`;

const ContentLeft = styled.div``;

const ContentRight = styled.div``;

const Career = styled.div``;

const Contact = styled.div``;
const Title = styled.div``;
const Content = styled.div``;
export default WriteForm;
