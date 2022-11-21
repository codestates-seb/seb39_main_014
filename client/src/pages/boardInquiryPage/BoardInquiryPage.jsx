import React from "react";
import Information from "../../components/feature/boardInquiry/Information";
import Comment from "../../components/feature/boardInquiry/Comment";
import { InquiryContainer, ContentContainer, ContentWrapper } from "./styled";

function BoardInquiryPage() {
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

export default BoardInquiryPage;
