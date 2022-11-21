import Information from "../../components/feature/boardDetail/Information";
import Comment from "../../components/feature/boardDetail/Comment";
import { InquiryContainer, ContentContainer, ContentWrapper } from "./styled";

function BoardDetailPage() {
  return (
    <InquiryContainer>
      <ContentContainer>
        <ContentWrapper>
          <Information />
          <Comment />
        </ContentWrapper>
      </ContentContainer>
    </InquiryContainer>
  );
}

export default BoardDetailPage;
