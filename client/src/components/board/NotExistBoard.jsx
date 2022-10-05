import React from "react";
import styled from "styled-components";

function NotExistBoard() {
  return <NotExistFrame>IsLoading</NotExistFrame>;
}

const NotExistFrame = styled.div`
  width: 80%;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  box-shadow: rgba(149, 157, 165, 0.2) 1px 1px 6px 1px;
`;
export default NotExistBoard;
