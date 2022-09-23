import React, { useEffect, useState } from "react";
import styled from "styled-components";

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
          <div>{data.tech_stack_name}</div>
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
              <div>ㅁ</div>
              <div>{data.views_cnt}</div>
            </div>
            <div className="comment-cnt">
              <div>ㅁ</div>
              <div>{data.comment_amount}</div>
            </div>
            <div className="bookmark-cnt">
              <div>ㅁ</div>
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
  margin: 30px;
  border: 1px solid black;
  border-radius: 10px;
  width: 350px;
  height: 400px;

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
    background-color: green;
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
`;

export default Board;
