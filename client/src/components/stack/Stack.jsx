import React, { useState } from "react";
import styled from "styled-components";
import { stackList } from "../../lib/stackList";

function Stack() {
  const [jobGroup, setJobGroup] = useState("전체");

  return (
    <StackLayout>
      <StackPick>
        {/* 전체 프론트엔드 백엔드 기타 */}
        {Object.keys(stackList).map((el, idx) => (
          <h2 key={idx}>{el}</h2>
        ))}
      </StackPick>
      <StackLogo>
        {/* 스택 로고 */}
        {stackList[jobGroup].map((el) => (
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
  margin-top: 10px;

  h2 {
    margin-left: 40px;
  }
`;

/** div - 스택 로고 레이아웃 */
const StackLogo = styled.div`
  margin-left: 25px;
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
