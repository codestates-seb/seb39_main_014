import { WriteFormContainer, FormContainer } from "./styled";

import DivisionForm from "../../components/feature/createBoard/DivisionForm";

function BoardCreatePage() {
  return (
    <WriteFormContainer>
      <FormContainer>
        <DivisionForm />
      </FormContainer>
    </WriteFormContainer>
  );
}

export default BoardCreatePage;
