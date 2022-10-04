import React from "react";
import { WriteFormContainer, FormContainer } from "./styled";

import DivisionForm from "../../components/writeForm/DivisionForm";
import Footer from "../../components/footer/Footer";

function WriteForm() {
  return (
    <>
      <WriteFormContainer>
        <FormContainer>
          <DivisionForm />
        </FormContainer>
      </WriteFormContainer>
      <Footer />
    </>
  );
}

export default WriteForm;
