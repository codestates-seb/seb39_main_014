import React from "react";
import {
  MypageContainer,
  ContentWrapper,
  Content,
  UserInfoWrapper,
  Profile,
  UserBoardWrapper,
  UserBoard,
} from "./styled";
import { BsXCircle } from "react-icons/bs";

function MyPage() {
  return (
    <MypageContainer>
      <ContentWrapper>
        <Content>
          <UserInfoWrapper>
            <Profile>
              <img alt="profile" src="/assets/logo/only_logo.svg" />
            </Profile>
            <label className="Nickname-label">닉네임</label>
            <input className="Nickname" type="text" defaultValue="아무개" />
            <div className="Career">
              <p>웹 프론트엔드 / 초보</p>
            </div>
            <label className="Activity-label">활동 점수</label>
            <div className="Activity">124 점</div>
            <label className="Stack-label">기술 스택</label>
            <input
              className="Registration"
              type="text"
              placeholder="기술 스택을 등록하세요!"
            />
            <div className="Stack">
              <img alt="react" src="/assets/stack/react.svg" />
              <BsXCircle className="BsXCircle" />
            </div>
          </UserInfoWrapper>
          <UserBoardWrapper>
            <UserBoard>
              <div className="Myboard">
                <div className="Bookmark">북마크한 게시글</div>
                <div>지원한 게시글</div>
              </div>
              <div className="Checkboard">
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div className="Checkboard">
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div className="Select-all">
                <div>
                  <input type="checkbox" />
                  <div>전체 선택</div>
                </div>
                <button>삭제</button>
              </div>
              <div className="Modification">
                <button>완료</button>
                <button className="Withdrawal">회원 탈퇴</button>
              </div>
            </UserBoard>
          </UserBoardWrapper>
        </Content>
      </ContentWrapper>
    </MypageContainer>
  );
}

export default MyPage;
