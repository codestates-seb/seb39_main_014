import React from "react";
import {
  MypageContainer,
  ContentWrapper,
  Content,
  UserInfoWarpper,
  UserInfo,
  UserBoard,
  BookmarkedBoard,
} from "./styled";
import { BsXCircle } from "react-icons/bs";

function MyPage() {
  return (
    <MypageContainer>
      <ContentWrapper>
        <Content>
          <UserInfoWarpper>
            <div className="Profile">
              <img alt="profile" src="/assets/logo/only_logo.svg" />
            </div>
            <UserInfo>
              <div className="Nickname_career">
                <div className="Nickname">
                  <div className="Label">닉네임</div>
                  <input type="text" defaultValue="아몰랑" />
                </div>
                <span>웹 프론트엔드 / 초보</span>
              </div>
              <div className="Ranking">
                <div className="Label">활동 점수</div>
                <div>124 점</div>
              </div>
              <div className="Stack">
                <div className="Label">기술 스택</div>
                <input type="text" placeholder="기술 스택을 등록하세요!" />
                <img alt="react" src="/assets/stack/react.svg" />
                <BsXCircle className="BsXCircle" />
              </div>
            </UserInfo>
          </UserInfoWarpper>
          <UserBoard>
            <BookmarkedBoard>
              <div>
                <div>북마크한 게시글</div>
                <div>지원한 게시글</div>
              </div>
              <div>
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div>
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div>
                <div>
                  <input type="checkbox" />
                  <div>전체 선택</div>
                </div>
                <button>삭제</button>
              </div>
            </BookmarkedBoard>
          </UserBoard>
        </Content>
      </ContentWrapper>
    </MypageContainer>
  );
}

export default MyPage;
