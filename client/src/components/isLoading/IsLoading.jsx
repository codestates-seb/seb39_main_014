import React from "react";
import styled from "styled-components";

function IsLoading() {
  return <LoadingFrame>IsLoading</LoadingFrame>;
}

const LoadingFrame = styled.div`
  height: 900px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;

  box-shadow: rgba(149, 157, 165, 0.2) 1px 1px 6px 1px;
`;

export default IsLoading;
