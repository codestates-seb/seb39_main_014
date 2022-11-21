import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Toggle from "../../shared/toggle/Toggle";

//로컬스토리지 저장된 토큰 사용 -> localStorage.getItem("token");
//로컬스토리지 저장된

/** 게시글 컴포넌트 */
function Board({ data }) {
  const [createdAt, setCreatedAt] = useState("");
  const [dday, setDday] = useState(null);

  useEffect(() => {
    setCreatedAt(data.createdAt.slice(0, 10));

    const createdAtDay = new Date(data.createdAt);
    const today = new Date();
    const dayGap = today.getTime() - createdAtDay.getTime();
    const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
    const deadline = 30 - Number(result);
    setDday(deadline);
  });

  return (
    <PostFrame className={data.recruitDone ? "done" : ""}>
      <PostLayout>
        <TopLayout>
          {data.location === "지역 무관" ? (
            <div>지역무관</div>
          ) : (
            <div>{data.location}</div>
          )}
          <div className="top-period">{data.period}</div>
          {data.recruitDone ? (
            <div className="info-deadline">모집완료</div>
          ) : (
            <div className="info-deadline">D - {dday}</div>
          )}
        </TopLayout>
        <TitleLayout>
          <h3>{data.title}</h3>
        </TitleLayout>
        <TagLayout>{/* advanced */}</TagLayout>
        <StackLayout>
          {data.techStackNames
            ? data.techStackNames.map(el => (
                <img
                  key={el.techStackName}
                  className="stack-logo"
                  src={`/assets/stack/${el.techStackName}.svg`}
                  alt={`${el}`}
                />
              ))
            : null}
        </StackLayout>
        <RecruitmentLayout>
          <div className="recruitment">
            <p>모집인원</p>
            <p> {data.currentRecruit ? data.currentRecruit : 0} </p>
            <p> / </p>
            <p> {data.totalRecruit}</p>
            <p>▿</p>
            <div className="created-at">{data.createdAt.slice(0, 10)}</div>
          </div>
        </RecruitmentLayout>
        <Boundary>
          <div className="boundary-line" />
        </Boundary>
        <BottomLayout>
          <ProfileArea>
            <div className="profile-img">{data.nickName[0]}</div>
            <div className="nickname">{data.nickName}</div>
          </ProfileArea>
          <CntArea>
            <div className="view-cnt">
              <div className="view-icon">
                <AiOutlineEye />
              </div>
              <div>{data.viewCount}</div>
            </div>
            <div className="comment-cnt">
              <div>
                <BsFillChatDotsFill className="chat-icon" />
              </div>
              <div>{data.commentAmount}</div>
            </div>
            <div className="bookmark-cnt">
              <div className="heart-div">
                {data.isBookmarked === "True" ? (
                  <AiFillHeart className="fill-heart-icon" />
                ) : (
                  <AiOutlineHeart className="out-line-heart-icon" />
                )}
              </div>
              <div>{data.bookmarkCount}</div>
            </div>
          </CntArea>
        </BottomLayout>
      </PostLayout>
    </PostFrame>
  );
}

/** div - 각 게시글의 프레임 */
const PostFrame = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: content-box;
  margin: 15px;
  padding: 20px 20px 20px 21px;
  background-color: white;
  box-shadow: rgba(149, 157, 165, 0.2) 1px 1px 6px 1px;
  height: 300px;
  width: 275px;
  border-radius: 25px;
  transition: 0.2s;

  &.done {
    opacity: 0.7;
  }

  cursor: pointer;
  &:hover {
    opacity: 1;
    transform: translate(0, -10px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  div {
    margin: 5px;
  }
`;
/** div - board 요소 정렬용 레이아웃*/
const PostLayout = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 1.5fr 2fr 1fr 0.1fr 1fr;
  height: 300px;
  justify-content: center;
  align-items: center;
`;

/** div - 지역, 활동 기간, 모집 기한 */
const TopLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 270px;
  font-size: 12px;

  /* 지역 | 온 / 오프라인 | 기간 */
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #69d06f;
    color: white;
    width: 60px;
    height: 23px;
    border-radius: 50px;
    font-weight: bold;
  }

  .top-period {
    margin-left: -70px;
  }

  /* 모집기한 */
  .info-deadline {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #d9d9d9;
    margin-right: -8px;
    font-weight: bold;
    color: black;
    height: 23px;
    border-radius: 50px;
  }
`;

/** div - 제목 */
const TitleLayout = styled.div`
  h3 {
    font-weight: 400;
    margin-left: 10px;
    width: 270px;
    text-overflow: ellipsis;
    font-size: 17px;
    overflow: hidden;
    word-break: break-word;

    display: -webkit-box;
    -webkit-line-clamp: 2; // 원하는 라인수
    -webkit-box-orient: vertical;
  }
`;

/** div - Advanced : 태그 기능 */
const TagLayout = styled.div``;

/** div - 기술 스택 */
const StackLayout = styled.div`
  padding-left: 10px;
  .stack-logo {
    margin-left: 3px;
  }
`;

/** div - 모집인원 */
const RecruitmentLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 275px;
  font-size: 13px;
  .recruitment {
    display: flex;
  }
  p {
    margin-left: 5px;
  }

  .created-at {
    opacity: 0.4;
    margin-left: 80px;
    display: flex;
    align-items: center;
  }
`;

/** div - 경계선 */
const Boundary = styled.div`
  .boundary-line {
    margin-top: -10px;
    opacity: 0.2;
    border-top: 1px solid gray;
    width: 275px;
  }
`;

/** div - 프로필, 닉네임, 조회수, 댓글 수, 북마크 수 */
// 리팩토링 화면 구성 마치고 나서 리팩토링 필요
const BottomLayout = styled.div`
  display: flex;
  width: 290px;
  height: 30px;
  justify-content: space-between;
`;

/** div - (Bottom) 프로필사진, 닉네임  */
const ProfileArea = styled.div`
  display: flex;
  align-items: center;
  .nickname {
    white-space: nowrap;
  }
  .profile-img {
    display: flex;
    background-color: orange;
    color: white;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

/** div - (BottomLayout) 조회수, 댓글수, 북마크수 */
const CntArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    display: flex;
    align-items: center;
  }
  .view-cnt {
    font-size: 13px;
    margin-right: -5px;
  }
  .view-icon {
    color: gray;
    font-size: 23px;
    margin-right: -3px;
  }
  .comment-cnt {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 13px;
    margin-right: -5px;
  }
  .chat-icon {
    color: gray;
    font-size: 18px;
    margin-right: -5px;
  }

  .bookmark-cnt {
    display: flex;
    font-size: 13px;
  }

  .heart-div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .fill-heart-icon {
    justify-self: center;
    color: red;
    font-size: 20px;
    margin-left: -5px;
    margin-right: -5px;
  }
  .out-line-heart-icon {
    color: gray;
    font-size: 20px;
    margin-left: -5px;
    margin-right: -5px;
  }
`;

export default Board;
