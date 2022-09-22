import React from "react";
import styled from "styled-components";

function BoardPage() {
  return <BoardPageLayout>BoardPage</BoardPageLayout>;
}

const BoardPageLayout = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const LeftSide = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const RightSide = styled.div`
  background-color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export default BoardPage;
