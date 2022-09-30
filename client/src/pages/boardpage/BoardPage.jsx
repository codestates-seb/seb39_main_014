import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Footer from "../../components/footer/Footer";
import Board from "../../components/board/Board";
import Stack from "../../components/stack/Stack";
import Paging from "../../components/pagenation/Pagenation";
import axios from "axios";
import PopStack from "../../components/popStack/PopStack";

function BoardPage() {
  const [stackFilter, setStackFilter] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/board/").then((res) => {
      // console.log(res.data[0]);
      setDatas(res.data);
    });
  }, []);

  return (
    <>
      <BoardPageLayout>
        <Main>
          <Side className="side-visible">
            <PopStack />
          </Side>
          <Center>
            <StackArea>
              <Stack
                selectedList={stackFilter}
                setSelectedList={setStackFilter}
              />
            </StackArea>
            <Content>
              {datas.map((el) => (
                <Board key={el.board_id} data={el} />
              ))}
            </Content>
            <PageNationArea>
              <Paging page={1} setPage={9} />
            </PageNationArea>
          </Center>
          <Side className="side-visible"></Side>
        </Main>
      </BoardPageLayout>
      <Footer />
    </>
  );
}

const BoardPageLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const StackArea = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const Main = styled.div`
  width: 1600px;
  display: grid;
  grid-template-columns: 1fr 5fr 1fr;

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
  width: 1024px;
  height: 200px;
`;
const Side = styled.div`
  /* background-color: gray; */
  display: flex;
`;

export default BoardPage;
