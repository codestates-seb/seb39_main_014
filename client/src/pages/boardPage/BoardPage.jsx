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
  grid-template-columns: 1fr 2fr 1fr;
  width: 100%;
`;

const StackArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Center = styled.div`
  display: grid;
  grid-template-rows: 1fr 10fr 1fr;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  background-color: white;
  min-width: 1280px;

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
  background-color: gray;
  align-items: center;
`;

export default BoardPage;
