import React from "react";
import styled from "styled-components";

export const stackList = [
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
  "next",
  "nest",
  "node",
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
        <h2>전체</h2>
        <h2>프론트엔드</h2>
        <h2>백엔드</h2>
        <h2>기타</h2>
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
const StackLayout = styled.div`
  width: 1024px;
`;

/** div - 전체, 프론트엔드, 백엔드, 기타 */
const StackPick = styled.div`
  display: flex;
  margin-top: 20px;

  h2 {
    margin-left: 40px;
  }
`;

/** div - 스택 로고 레이아웃 */
const StackLogo = styled.div`
  margin-left: 10px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;

  // 전체 레이아웃 너비
  width: 1024px;

  img {
    // 클릭시 Opacity 제거예정
    opacity: 0.5;
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
  }
`;

export default Stack;
