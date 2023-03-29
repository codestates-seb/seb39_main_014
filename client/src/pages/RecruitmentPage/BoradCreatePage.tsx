import { WriteFormContainer, FormContainer } from "./styled";

import RecruitmentMethod from "@components/feature/Recruitment/RecruitmentMethod";

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
