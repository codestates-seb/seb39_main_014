import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Board from "../../components/board/Board";
import Stack from "../../components/stack/Stack";
import Paging from "../../components/pagenation/Pagenation";
import PopStack from "../../components/popStack/PopStack";
import TopButton from "../../components/topButton/TopButton";
import IsLoading from "../../components/isLoading/IsLoading";
import getBoard from "../../api/getBoard";
import getMember from "../../api/getMember";
import { handleFilter } from "../../lib/handleFilter";
import Toggle from "../../components/toggle/Toggle";

function BoardPage({ group }) {
  // const BOARD_URL = {
  //   ALL: `${process.env.REACT_APP_API_URL}/api/v1/board/?page=1&size=100`,
  //   STUDY: `${process.env.REACT_APP_API_URL}/api/v1/board/study?page=1&size=100`,
  //   PROJECT: `${process.env.REACT_APP_API_URL}/api/v1/board/project?page=1&size=100`,
  // };

  const BOARD_URL = `${process.env.REACT_APP_API_URL}/api/v1/board/?page=1&size=100`;
  const MEMBER_URL = `${process.env.REACT_APP_API_URL}/api/v1/member`;
  const [datas, setDatas] = useState([]); // 각 게시글 객체가 담긴 리스트
  const [stackFilter, setStackFilter] = useState([]); // 필터링할 스택 담긴 리스트
  const [filterDatas, setFilterDatas] = useState([]); // datas를 stackfilter로 필터링
  const [isDone, setIsDone] = useState(false);
  const [page, setPage] = useState(1); // 페이지네이션

  // 모집중 확인용
  // console.log(isDone);

  const isLoading = !datas.length;

  // 자료 확인용
  if (filterDatas.length === 0) {
    // console.log(datas);
  } else {
    // console.log(filterDatas);
  }

  useEffect(() => {
    // 닉네임 로컬 스토리지 저장
    getMember(MEMBER_URL);
    getBoard(BOARD_URL, setDatas);

    // if (group === "" || group === "전체") {
    //   getBoard(BOARD_URL.ALL, setDatas);
    // } else if (group === "스터디") {
    //   getBoard(BOARD_URL.STUDY, setDatas);
    // } else if (group === "프로젝트") {
    //   getBoard(BOARD_URL.PROJECT, setDatas);
    // }

    handleFilter(datas, stackFilter, setFilterDatas, isDone, group);
  }, [stackFilter, , isDone, group]);

  if (isLoading) {
    // 로딩중 화면
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
              <PageNationArea></PageNationArea>
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

  //로딩 끝난후 컴포넌트
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
            <ToggleArea>
              {isDone ? (
                <div className="done">모집완료</div>
              ) : (
                <div className="doing">모집중</div>
              )}
              <Toggle isDone={isDone} setIsDone={setIsDone} />
            </ToggleArea>
            <Content>
              {/* 스택 필터 리스트의 길이가 0이면 ? 전체글 : 필터링 글 */}
              {stackFilter.length === 0
                ? /// 이부분 건드려서 페이지네이션 만들기
                  datas
                    .slice((page - 1) * 18, (page - 1) * 9 + 18)
                    .map((el) => (
                      <Link
                        key={el.id}
                        to={`/board/${el.id}`}
                        // eslint-disable-next-line prettier/prettier
                        className="board-link">
                        <Board key={el.id} data={el} />
                      </Link>
                    ))
                : filterDatas
                    .slice((page - 1) * 18, (page - 1) * 9 + 18)
                    .map((el) => (
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
              <Paging
                page={page}
                setPage={setPage}
                datas={datas}
                filterDatas={filterDatas}
              />
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

const ToggleArea = styled.div`
  display: flex;
  align-items: center;
  margin-right: 50px;
  margin-left: auto;

  .done {
    font-size: 20px;
    font-weight: bolder;
    margin-right: -40px;
    opacity: 0.5;
  }
  .doing {
    font-size: 20px;
    font-weight: bolder;
    margin-right: -40px;
  }
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

  @media screen and (max-width: 1000px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 0;
  }
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
  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-columns: 1.5fr 1.5fr;
    place-items: center;
    align-items: center;
    justify-content: center;
  }

  @media screen and (max-width: 800px) {
    display: grid;
    grid-template-columns: 3fr;
    place-items: center;
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
