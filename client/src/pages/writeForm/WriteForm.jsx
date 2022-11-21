import React from "react";
import { WriteFormContainer, FormContainer } from "./styled";

import DivisionForm from "../../components/feature/writeForm/DivisionForm";

function WriteForm() {
  return (
    <WriteFormContainer>
      <FormContainer>
        <DivisionForm />
      </FormContainer>
    </WriteFormContainer>
  );
}

export default WriteForm;
