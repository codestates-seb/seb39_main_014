import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";

import Information from "../../components/boardInquiry/Information";
import Comment from "../../components/boardInquiry/Comment";

import {
  InquiryContainer,
  ContentContainer,
  ContentWrapper,
  Title,
  Buttons,
  Body,
  WriteComment,
} from "./styled";

function BoardInquiryPage() {
  return (
    <InquiryContainer>
      <ContentContainer>
        <ContentWrapper>
          <Title>
            <Buttons>
              <BiArrowBack className="BiArrowBack" />
              <div className="Patch-delete">
                <button>수정</button>
                <button>삭제</button>
              </div>
            </Buttons>
            <p>스터디 하면서 프로젝트까지 같이 하실 분들을 모집합니다.</p>
          </Title>
          <Information />
          <Body>
            개발자가 되고싶어 이제 막 입문하신분이나 개발 공부를 했는데
            프로젝트가 없는 분 !! 개발 스터디를 하며 프로젝트를 함께 만들어 나가
            취업까지 같이 하실 분을 모집 합니다!! 프로젝트 구성이나 계획은 제가
            도맡아 할 예정입니다. 댓글 남겨주시거나 작성된 이메일로 연락 주시면
            감사하겠습니다.
          </Body>
          <WriteComment>
            <div>댓글 1개</div>
            <textarea placeholder="댓글을 입력하세요"></textarea>
            <div className="Submit">
              <button>등록</button>
            </div>
          </WriteComment>
          <Comment />
        </ContentWrapper>
      </ContentContainer>
    </InquiryContainer>
  );
}

export default BoardInquiryPage;
