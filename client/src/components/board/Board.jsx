import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsFillChatDotsFill } from "react-icons/bs";
import { AiOutlineEye, AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { stackList } from "../stack/Stack";

/** 게시글 컴포넌트 */
function Board({ data }) {
  return (
    <>
      <PostLayout>
        <Top>
          <div className="info">
            <div>지역무관</div>
            <div>온라인</div>
            <div>6개월</div>
          </div>
          <div className="info-deadline">
            <div>모집마감</div>
          </div>
        </Top>
        <Title>
          <h1>{data.title}</h1>
        </Title>
        <Tag>{/* advanced */}</Tag>
        <Stack>
          <div>
            {data.tech_stack_name.map((el) => (
              <img
                className="stack-logo"
                src={`/assets/stack/${el}.svg`}
                alt={`${el}`}
              />
            ))}
          </div>
        </Stack>
        <Recruitment>
          <div className="recruitment">
            <p>모집인원</p>
            <p> {data.current_recruit} </p>
            <p> / </p>
            <p> {data.total_recruit} </p>
            <p>▿</p>
          </div>
        </Recruitment>
        <Boundary>
          <div className="boundary-line" />
        </Boundary>
        <Bottom>
          <div className="profile">
            <div className="profile-img">{data.nickname[0]}</div>
            <div className="nickname">{data.nickname}</div>
          </div>
          <div className="cnt">
            <div className="view-cnt">
              <div>
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
          </div>
        </Bottom>
      </PostLayout>
    </>
  );
}

/** div - 게시글 레이아웃 */
const PostLayout = styled.div`
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

  cursor: pointer;

  div {
    margin: 5px;
  }
`;

/** div - 지역, 활동 기간, 모집 기한 */
const Top = styled.div`
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
const Title = styled.div`
  h1 {
    margin-left: 10px;
  }
`;

/** div - Advanced : 태그 기능 */
const Tag = styled.div``;

/** div - 기술 스택 */
const Stack = styled.div`
  div {
    margin-left: 10px;
  }

  .stack-logo {
    margin-left: 3px;
  }
`;

/** div - 모집인원 */
const Recruitment = styled.div`
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
const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  .profile {
    display: flex;
    align-items: center;
  }
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

  .cnt {
    display: flex;
  }

  .cnt > div {
    display: flex;
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
