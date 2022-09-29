import React, { useState } from "react";
import styled from "styled-components";
import { stackList } from "../../lib/stackList";

/** / */
const group = [
  { id: 1, category: "전체" },
  { id: 2, category: "프론트엔드" },
  { id: 3, category: "백엔드" },
  { id: 4, category: "기타" },
];

function Stack() {
  const [jobGroup, setJobGroup] = useState("전체");

  const handleGroup = (e) => {
    setJobGroup(e.target.innerText);
  };

  return (
    <StackLayout>
      <StackPick>
        {/* 전체 프론트엔드 백엔드 기타 */}
        {group.map((el, idx) => (
          <h2 key={el.id} onClick={handleGroup}>
            {el.category}
          </h2>
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
  width: 1000px;
`;

/** div - 전체, 프론트엔드, 백엔드, 기타 */
const StackPick = styled.div`
  display: flex;
  margin-top: 10px;
  transition: 0.2s;

  h2 {
    margin-left: 60px;
  }
`;

/** div - 스택 로고 레이아웃 */
const StackLogo = styled.div`
  margin-left: 40px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;

  // 전체 레이아웃 너비
  width: 900px;

  img {
    // 클릭시 Opacity 제거예정
    opacity: 0.5;
    margin-left: 10px;
    margin-top: 10px;
    width: 50px;
  }
`;

export default Stack;
