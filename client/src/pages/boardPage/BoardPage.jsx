import React from "react";
import styled from "styled-components";

function BoardPage() {
  return <BoardPageLayout>BoardPage</BoardPageLayout>;
}

const BoardPageLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const LeftSide = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

const CenterSide = styled.div`
  background-color: gray;
`;

const RightSide = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80vh;
`;

export default BoardPage;
