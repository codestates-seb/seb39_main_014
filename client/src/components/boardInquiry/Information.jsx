import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import {
  InformationContainer,
  UserInfo,
  BoardInfo,
} from "../../pages/boardInquiryPage/styled";

function Information() {
  return (
    <InformationContainer>
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
    </InformationContainer>
  );
}

export default Information;
