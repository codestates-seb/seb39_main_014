import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Board from "../../components/board/Board";
import Stack from "../../components/stack/Stack";
import Paging from "../../components/pagenation/Pagenation";
// import axios from "axios";
import PopStack from "../../components/popStack/PopStack";
import TopButton from "../../components/topButton/TopButton";
import IsLoading from "../../components/isLoading/IsLoading";
import getBoard from "../../api/getBoard";
import getMember from "../../api/getMember";
import { result } from "lodash";

function BoardPage({ group }) {
  const BOARD_URL = {
    ALL: "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/?page=1&size=3",
    STUDY:
      "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/study?page=1&size=3",
    PROJECT:
      "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/project?page=1&size=3",
  };
  const MEMBER_URL =
    "http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/member";

  // console.log(group);
  //테스트 서버 URI
  // const BOARD_URL = "http://183.106.239.239:8080/api/v1/board?page=1&size=9";

  // 필터링할 스택 담긴 리스트
  const [stackFilter, setStackFilter] = useState([]);
  // 각 게시글 객체가 담긴 리스트
  const [datas, setDatas] = useState([]);

  // 필터링된 게시글 객체가 담긴 리스트
  const [filterDatas, setFilterDatas] = useState([]);

  const isLoading = !datas.length;

  /////////////////////////////////////////////////////////////////

  // const wow = datas
  //   .map((el) => el.techStackNames)
  //   .map((el) => el.map((el) => el.techStackName))
  //   .map((el) => el.includes(stackFilter[0]));

  // const wow = datas
  //   .map((e) => e.techStackNames)
  //   .map((el) => el.map((el) => el.techStackName))
  //   .map((elm) => elm.includes(stackFilter[0]));

  //해결한 코드
  const wow = datas
    .map((e) => e.techStackNames)
    .map((el) => el.map((el) => el.techStackName))
    .map((elm) => stackFilter.some((r) => elm.indexOf(r) >= 0));

  const result = [];

  const foo = () => {
    wow.map((el, idx) => {
      if (el === true) {
        result.push(datas[idx]);
      }
    });
    console.log(result);
  };

  foo();
  console.log(result);

  ///////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    getMember(MEMBER_URL);

    if (group === "" || group === "전체") {
      getBoard(BOARD_URL.ALL, setDatas);
    } else if (group === "스터디") {
      getBoard(BOARD_URL.STUDY, setDatas);
    } else if (group === "프로젝트") {
      getBoard(BOARD_URL.PROJECT, setDatas);
    }
  }, [group]);

  if (isLoading) {
    return (
      <>
        <BoardPageLayout>
          <Main>
            <PopSide className="side-visible">
              <PopStack />
            </PopSide>
            <Center>
              <StackArea>
                <Stack
                  selectedList={stackFilter}
                  setSelectedList={setStackFilter}
                />
              </StackArea>
              {/* 로딩컴포넌트 */}
              <IsLoading />
              <PageNationArea>
                {/* 페이지네이션 */}
                <Paging page={1} setPage={9} />
              </PageNationArea>
            </Center>
            <Side>
              <TopButton />
            </Side>
          </Main>
        </BoardPageLayout>
        <Footer />
      </>
    );
  }

  return (
    <>
      <BoardPageLayout>
        <Main>
          <PopSide className="side-visible">
            <PopStack />
          </PopSide>
          <Center>
            <StackArea>
              <Stack
                selectedList={stackFilter}
                setSelectedList={setStackFilter}
              />
            </StackArea>
            <Content>
              {datas.map((el) => (
                <Link
                  key={el.id}
                  to={`/board/${el.id}`}
                  // eslint-disable-next-line prettier/prettier
                  className="board-link">
                  <Board key={el.id} data={el} />
                </Link>
              ))}
            </Content>
            <PageNationArea>
              {/* 페이지네이션 */}
              <Paging page={1} setPage={9} />
            </PageNationArea>
          </Center>
          <Side className>
            <TopButton />
          </Side>
        </Main>
      </BoardPageLayout>
      <Footer />
    </>
  );
}

/** div - boardPage 전체 레이아웃 */
const BoardPageLayout = styled.div`
  display: flex;
  width: 100%;
`;

const StackArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Main = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;

  @media screen and (max-width: 1500px) {
    display: flex;
    justify-content: center;
    .side-visible {
      display: none;
    }
  }
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 1100px;
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  // 전체 레이아웃 너비에 영향
  max-width: 1200px;

  // 링크 디폴트 옵션 제거
  .board-link {
    text-decoration: none;
    color: black;
  }
  @media screen and (max-width: 820px) {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
  }
`;

const PageNationArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;
const PopSide = styled.div`
  /* background-color: gray; */
  display: flex;
  justify-content: flex-end;
`;

const Side = styled.div`
  .top-button {
  }
`;

export default BoardPage;
