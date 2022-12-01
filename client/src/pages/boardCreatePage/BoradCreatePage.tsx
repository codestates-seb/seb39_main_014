import { WriteFormContainer, FormContainer } from "./styled";

import RecruitmentMethod from "../../components/feature/createBoard/RecruitmentMethod";

function BoardCreatePage() {
  return (
    <WriteFormContainer>
      <FormContainer>
        <RecruitmentMethod />
      </FormContainer>
    </WriteFormContainer>
  );
}

export default BoardCreatePage;
