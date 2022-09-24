import React from "react";
import styled from "styled-components";

const stackList = [
  "aws",
  "docker",
  "express",
  "figma",
  "firebase",
  "flutter",
  "go",
  "graphQL",
  "java",
  "javascript",
  "kotlin",
  "mongoDB",
  "mySQL",
  "nextjs",
  "nestjs",
  "nodejs",
  "php",
  "python",
  "react",
  "reactNative",
  "spring",
  "svelte",
  "swift",
  "typescript",
  "unity",
  "vue",
];

function Stack() {
  return (
    <StackLayout>
      <StackPick>
        <div>전체</div>
        <div>프론트엔드</div>
        <div>백엔드</div>
        <div>기타</div>
      </StackPick>
      <StackLogo>
        {stackList.map((el) => (
          <img src={`/assets/stack/${el}.svg`} alt={`${el}`} />
        ))}
      </StackLogo>
    </StackLayout>
  );
}

/** div - Stack 레이아웃 */
const StackLayout = styled.div``;

/** div - 전체, 프론트엔드, 백엔드, 기타 */
const StackPick = styled.div`
  display: flex;
  margin-left: 10px;
  margin-top: 20px;

  div {
    margin-left: 10px;
  }
`;

const StackLogo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1280px;
  img {
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
  }
`;

export default Stack;
