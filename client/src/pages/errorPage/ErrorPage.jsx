import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ErrorPage() {
  return (
    <ErrorPageLayout>
      <img src="assets/error/errorpage.jpg" alt="404 Not Found"></img>
      <br />
      <h1>PAGE NOT FOUND</h1>
      <div>찾을 수 없는 페이지 입니다.</div>
      <br />
      <div>요청하신 페이지가 사라졌거나, 잘못된 경로를 이용하셨습니다</div>
      <br />
      <StartSoopool to="/board">홈으로 가기</StartSoopool>
    </ErrorPageLayout>
  );
}

const ErrorPageLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 1000px;

  img {
    align-self: center;
    max-width: 700px;
    width: 70%;
    min-width: 400px;
  }
`;

const StartSoopool = styled(Link)`
  display: flex;
  margin-top: 10px;
  color: white;
  text-decoration: none;
  padding: 15px 30px 15px 30px;
  background-color: #66bd6c;
  border-radius: 40px;
  transition: 0.3s;

  &:hover {
    background-color: green;
    transition: 0.3s;
  }
`;

export default ErrorPage;
