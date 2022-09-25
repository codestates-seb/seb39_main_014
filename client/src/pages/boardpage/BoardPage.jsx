import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Board from "../../components/board/Board";
import Stack from "../../components/stack/Stack";
import axios from "axios";

function BoardPage() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/board/").then((res) => {
      setDatas(res.data);
    });
  }, []);

  console.log(datas);
  return (
    <>
      <BoardPageLayout>
        <Side />
        <Center>
          <StackArea>
            <Stack />
          </StackArea>
          <Content>
            {datas.map((data) => (
              <Board data={data} key={data.board_id} />
            ))}
          </Content>
          <PageNationArea>페이지네이션 자리</PageNationArea>
        </Center>
        <Side />
      </BoardPageLayout>
      <Footer />
    </>
  );
}

const BoardPageLayout = styled.div`
  display: grid;
  place-items: center;
  grid-template-columns: 1fr 5fr 1fr;
  width: 100%;
  background-color: #f9fafb;
`;

const StackArea = styled.div`
  display: flex;
  align-items: center;
`;

const Center = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  grid-template-rows: 1fr 1fr 1fr;
  max-width: 1280px;
`;

const Content = styled.div`
  display: grid;
  place-items: center;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  // 전체 레이아웃 너비에 영향
  background-color: #f9fafb;
  max-width: 1280px;

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
`;
const Side = styled.div`
  /* background-color: gray; */
`;

export default BoardPage;
