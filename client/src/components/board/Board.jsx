import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";

/** 게시글 컴포넌트 */
function Board({ data }) {
  return (
    <>
      <PostFrame>
        <TopLayout>
          <div className="info">
            <div>지역무관</div>
            <div>온라인</div>
            <div>6개월</div>
          </div>
          <div className="info-deadline">
            <div>모집마감</div>
          </div>
        </TopLayout>
        <TitleLayout>
          <h1>{data.title}</h1>
        </TitleLayout>
        <TagLayout>{/* advanced */}</TagLayout>
        <StackLayout>
          <div>
            {data.tech_stack_name.map((el) => (
              <img
                className="stack-logo"
                src={`/assets/stack/${el}.svg`}
                alt={`${el}`}
              />
            ))}
          </div>
        </StackLayout>
        <RecruitmentLayout>
          <div className="recruitment">
            <p>모집인원</p>
            <p> {data.current_recruit} </p>
            <p> / </p>
            <p> {data.total_recruit} </p>
            <p>▿</p>
          </div>
        </RecruitmentLayout>
        <Boundary>
          <div className="boundary-line" />
        </Boundary>
        <BottomLayout>
          <ProfileArea>
            <div className="profile-img">{data.nickname[0]}</div>
            <div className="nickname">{data.nickname}</div>
          </ProfileArea>
          <CntArea>
            <div className="view-cnt">
              <div className="view-icon">
                <AiOutlineEye />
              </div>
              <div>{data.views_cnt}</div>
            </div>
            <div className="comment-cnt">
              <div>
                <BsFillChatDotsFill className="chat-icon" />
              </div>
              <div>{data.comment_amount}</div>
            </div>
            <div className="bookmark-cnt">
              <div className="heart-div">
                {data.is_bookmarked === "True" ? (
                  <AiFillHeart className="fill-heart-icon" />
                ) : (
                  <AiOutlineHeart className="out-line-heart-icon" />
                )}
              </div>
              <div>{data.bookmark_count}</div>
            </div>
          </CntArea>
        </BottomLayout>
      </PostFrame>
    </>
  );
}

/** div - 게시글 레이아웃 */
const PostFrame = styled.div`
  display: grid;
  grid-template-rows: 2fr 4fr 1.5fr 2fr 1fr 0.1fr 2fr;
  /* 
  
  border-radius: 10px;
  
  */
  height: 420px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  width: 350px;
  max-width: 100%;
  min-height: 1px;
  border-radius: 16px;
  margin: 20px;
  padding: 5px;
  transition: 0.2s;

  cursor: pointer;
  &:hover {
    transform: translate(0, -10px);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }

  div {
    margin: 5px;
  }
`;

/** div - 지역, 활동 기간, 모집 기한 */
const TopLayout = styled.div`
  display: flex;
  align-items: center;

  .info {
    display: flex;
  }

  /* 지역 | 온 / 오프라인 | 기간 */
  .info > div {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #69d06f;
    font-weight: bold;
    color: white;
    width: 70px;
    height: 30px;
    border-radius: 10px;
  }

  .info-deadline {
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gray;
    font-weight: bold;
    color: white;
    width: 70px;
    height: 30px;
    border-radius: 10px;
  }
`;

/** div - 제목 */
const TitleLayout = styled.div`
  h1 {
    margin-left: 10px;
    width: 300px;
    text-overflow: ellipsis;
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
  div {
    margin-left: 10px;
  }

  .stack-logo {
    margin-left: 3px;
  }
`;

/** div - 모집인원 */
const RecruitmentLayout = styled.div`
  display: flex;
  .recruitment {
    display: flex;
  }
  p {
    margin-left: 5px;
  }
`;

/** div - 경계선 */
const Boundary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  .boundary-line {
    border-top: 0.5px solid gray;
    border-radius: 50%;
    width: 300px;
  }
`;

/** div - 프로필, 닉네임, 조회수, 댓글 수, 북마크 수 */
// 리팩토링 화면 구성 마치고 나서 리팩토링 필요
const BottomLayout = styled.div`
  display: flex;
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
    border: 1px black solid;
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }
`;

/** div - (BottomLayout) 조회수, 댓글수, 북마크수 */
const CntArea = styled.div`
  display: flex;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .view-cnt {
    font-size: 15px;
  }
  .view-icon {
    color: gray;
    font-size: 20px;
  }
  .comment-cnt {
    display: flex;
    align-items: center;
    justify-items: center;
    font-size: 15px;
  }
  .chat-icon {
    color: gray;
    font-size: 20px;
  }

  .bookmark-cnt {
    display: flex;
    font-size: 15px;
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
  }
  .out-line-heart-icon {
    color: gray;
    font-size: 20px;
  }
`;

export default Board;
