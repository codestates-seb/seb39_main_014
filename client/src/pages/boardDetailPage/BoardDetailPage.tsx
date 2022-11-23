import Information from "../../components/feature/detailBoard/Information";
import Comment from "../../components/feature/detailBoard/Comment";
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
