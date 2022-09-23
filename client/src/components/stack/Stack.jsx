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
    <StackLogo>
      {stackList.map((el) => (
        <img src={`/assets/stack/${el}.svg`} alt={`${el}`} />
      ))}
    </StackLogo>
  );
}

const StackLogo = styled.div`
  display: flex;
  flex-wrap: nowrap;
  width: 1280px;
  img {
    width: 50px;
  }
`;

export default Stack;
