import React from "react";
import {
  WriteFormContainer,
  FormContainer,
  ContentDivision,
  ContentLeft,
  ContentRight,
  Career,
  Contact,
  Title,
  Content,
} from "./styled";
import CkEditor from "../../components/ckEditor/CKEditor";

function WriteForm() {
  return (
    <WriteFormContainer>
      <FormContainer>
        <ContentDivision>
          <ContentLeft>
            <label htmlFor="repo">모집 구분</label>
            <div className="Check-box">
              <input id="repo" type="radio" />
              <span>스터디</span>
              <input id="repo" type="radio" />
              <span>프로젝트</span>
            </div>
            <label htmlFor="classification">기술 스택</label>
            <select id="classification">
              <option>프로젝트 사용 스택</option>
              <option>java</option>
              <option>javascript</option>
              <option>react</option>
              <option>node</option>
            </select>
          </ContentLeft>
          <ContentRight>
            <label htmlFor="repo">모임 방식</label>
            <div className="Check-box">
              <input id="repo" type="radio" />
              <span>온라인</span>
              <input id="repo" type="radio" />
              <span>오프라인</span>
              <select id="region">
                <option>지역</option>
                <option>서울</option>
                <option>인천</option>
                <option>경기도</option>
                <option>강원도</option>
                <option>경상도</option>
                <option>전라도</option>
                <option>충청도</option>
              </select>
            </div>
            <label htmlFor="period">기간</label>
            <select id="period">
              <option>1개월</option>
              <option>2개월</option>
              <option>3개월</option>
              <option>4개월</option>
              <option>5개월</option>
              <option>6개월</option>
              <option>장기</option>
            </select>
          </ContentRight>
        </ContentDivision>
        <Career>
          <label htmlFor="categorization">모집 분류 / 인원</label>
          <div className="Bundle">
            <select id="categorization">
              <option>웹 프론트엔드</option>
              <option>웹 백엔드</option>
              <option>모바일</option>
              <option>웹 디자이너</option>
              <option>기타</option>
            </select>
            <div>- 1 +</div>
            <button type="button">추가</button>
            <button type="button" className="Delete">
              삭제
            </button>
          </div>
        </Career>
        <Contact>
          <label htmlFor="input">연락 방법</label>
          <input
            id="input"
            type="text"
            placeholder="이메일이나 카카오톡 오픈 채팅 주소를 남겨주세요."
          />
        </Contact>
        <Title>
          <label htmlFor="input">제목</label>
          <input id="input" type="text" placeholder="제목을 입력하세요." />
        </Title>
        <Content>
          <label htmlFor="input">내용</label>
          <CkEditor />
        </Content>
      </FormContainer>
    </WriteFormContainer>
  );
}

export default WriteForm;
