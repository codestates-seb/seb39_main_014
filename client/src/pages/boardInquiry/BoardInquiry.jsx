import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import axios from "axios";
import {
  InquiryContainer,
  ContentContainer,
  ContentWrapper,
  Title,
  Buttons,
  Information,
  UserInfo,
  BoardInfo,
  Body,
  WriteComment,
  Comments,
} from "./styled";

function BoardInquiry() {
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
          <Information>
            <UserInfo>
              <div className="User-info">
                <img src="/assets/logo/only_logo.svg" alt="profile" />
                <div>매칭맨</div>
                <div>2022. 09. 10</div>
              </div>
              <div className="Board-info">
                <div className="Bookmark">
                  <AiOutlineHeart className="AiOutlineHeart" />
                  <span>10</span>
                </div>
                <button>스터디</button>
                <button>모집 완료</button>
              </div>
            </UserInfo>
            <BoardInfo>
              <li>
                <span className="Subject">모임 기간</span>
                <span className="Span-box">1개월</span>
              </li>
              <li>
                <span className="Subject">진행 방식</span>
                <span className="Span-box">오프라인</span>
                <span className="Span-box">서울</span>
              </li>
              <li>
                <span className="Subject">사용 언어</span>
              </li>
              <li>
                <span className="Subject">연락 방법</span>
                <span className="Contact-method">a12345@gmail.com</span>
              </li>
              <li className="Applicants">
                <span className="Subject">모집 인원</span>
                <ul className="Applicants-list">
                  <li>
                    <div> 웹 프론트엔드</div>
                    <div>0/5</div>
                    <div>
                      <span className="Apply-box">지원</span>
                    </div>
                  </li>
                  <li>
                    <div> 웹 백엔드</div>
                    <div>2/3</div>
                    <div>
                      <span className="Apply-box">지원</span>
                    </div>
                  </li>
                  <li>
                    <div> 웹 디자이너</div>
                    <div>1/4</div>
                    <div>
                      <span className="Apply-box">지원</span>
                    </div>
                  </li>
                </ul>
              </li>
            </BoardInfo>
          </Information>
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
          <Comments>
            <div className="Username">
              <img src="/assets/logo/only_logo.svg" alt="profile" />
              <div>
                <span>프로계획마</span>
                <span className="Createdat">2022-09-14 01:33</span>
              </div>
            </div>
            <p>저 스터디 가입하고 싶은데 계획은 제가 세워도 될까요 ?</p>
          </Comments>
        </ContentWrapper>
      </ContentContainer>
    </InquiryContainer>
  );
}

export default BoardInquiry;
