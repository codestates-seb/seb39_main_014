/* eslint-disable jsx-a11y/heading-has-content */
// import React, { useState } from "react";
// import styled from "styled-components";
// import { stackList } from "../../lib/stackList";

// /** / */
// const group = [
//   { id: 1, category: "전체" },
//   { id: 2, category: "프론트엔드" },
//   { id: 3, category: "백엔드" },
//   { id: 4, category: "기타" },
// ];

// function Stack() {
//   const [jobGroup, setJobGroup] = useState("전체");

//   const handleGroup = (el) => {
//     setJobGroup(el.target.innerText);
//   };

//   return (
//     <StackLayout>
//       <StackPick>
//         {/* 전체 프론트엔드 백엔드 기타 */}
//         {group.map((el, idx) => (
//           <h2 key={el.id} onClick={handleGroup}>
//             {el.category}
//           </h2>
//         ))}
//       </StackPick>
//       <StackLogo>
//         {/* 스택 로고 */}
//         {stackList[jobGroup].map((el) => (
//           <img src={`/assets/stack/${el}.svg`} alt={`${el}`} key={el.id} />
//         ))}
//       </StackLogo>
//     </StackLayout>
//   );
// }

// /** div - Stack 레이아웃 */
// const StackLayout = styled.div`
//   width: 1000px;
// `;

// /** div - 전체, 프론트엔드, 백엔드, 기타 */
// const StackPick = styled.div`
//   display: flex;
//   margin-top: 10px;
//   transition: 0.2s;

//   h2 {
//     cursor: pointer;
//     opacity: 0.8;
//     margin-left: 60px;
//   }

//   h2:hover {
//     opacity: 1;
//   }
// `;

// /** div - 스택 로고 레이아웃 */
// const StackLogo = styled.div`
//   margin-left: 40px;
//   margin-bottom: 20px;
//   display: flex;
//   flex-wrap: wrap;
//   align-items: center;

//   // 전체 레이아웃 너비
//   max-width: 1050px;

//   img {
//     // 클릭시 Opacity 제거예정
//     cursor: pointer;
//     opacity: 0.5;
//     margin-left: 10px;
//     margin-top: 10px;
//     width: 50px;
//   }
// `;

// export default Stack;

import { useState } from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const Stack = ({ selected, setSelected }) => {
  // 모든 스택 이름
  const stacks = {
    전체: [
      "javascript",
      "typescript",
      "react",
      "vue",
      "svelte",
      "next",
      "graphql",
      "java",
      "spring",
      "node",
      "nest",
      "go",
      "kotlin",
      "express",
      "mySQL",
      "mongoDB",
      "python",
      "php",
      "graphQL",
      "flutter",
      "swift",
      "reactNative",
      "unity",
      "aws",
      "docker",
    ],
    프론트엔드: [
      "javascript",
      "typescript",
      "react",
      "vue",
      "svelte",
      "next",
      "graphql",
    ],
    백엔드: [
      "java",
      "spring",
      "node",
      "nest",
      "go",
      "kotlin",
      "express",
      "mySQL",
      "mongoDB",
      "python",
      "php",
      "graphQL",
    ],
    기타: ["flutter", "swift", "reactNative", "unity", "aws", "docker"],
  };

  const [currentJob, setCurrentJob] = useState("전체");

  /**프론트엔드 백엔드 기타 모두보기 탭*/
  const handleJob = (el) => {
    setCurrentJob(el.target.innerText);
  };

  /** 스택 선택 */
  const handleStackClick = (event) => {
    if (selected.includes(event)) {
      const deletedArr = selected.filter((el) => el !== event);
      setSelected(deletedArr);
    } else {
      setSelected((prev) => [...prev, event]);
    }
  };

  /** 스택 삭제 */
  const handleStackDelete = (index) => {
    const deletedArr = selected.filter((el, idx) => idx !== index);
    setSelected(deletedArr);
  };

  /** 스택 초기화 */
  const handleStackReset = () => {
    setSelected([]);
  };

  return (
    <StackFrame>
      <JobGroup className="tab">
        {Object.keys(stacks).map((el) => (
          <h2
            onClick={handleJob}
            // eslint-disable-next-line prettier/prettier
            className={currentJob === el ? "is-click" : ""}>
            {el}
          </h2>
        ))}
        <h2
          onClick={handleJob}
          className={currentJob === "전체" ? "is-click" : ""}
        />
      </JobGroup>
      <StackContainer>
        {/* 현재탭이 가 아닐 경우 */}
        {currentJob !== "전체"
          ? stacks[currentJob].map((el) => (
              <StackImg
                src={`/assets/stack/${el}.svg`}
                alt={el}
                onClick={() => handleStackClick(el)}
                className={!selected.includes(el) ? "" : "is-click"}
              />
            ))
          : // 현재탭이 모두보기일 경우
            [...stacks.전체].map((el, idx) => (
              <StackImg
                src={`/assets/stack/${el}.svg`}
                alt={`${el}`}
                key={idx}
                onClick={() => handleStackClick(el)}
                className={
                  !selected.includes(el) && selected.length > 0
                    ? "not-selected"
                    : ""
                }
              />
            ))}
      </StackContainer>
      {selected.length ? (
        <SelectedContainer>
          {selected.map((el, idx) => (
            <div key={idx} className="">
              {el}
              <IoCloseCircleOutline
                className="del-icon"
                // eslint-disable-next-line prettier/prettier
                onClick={() => handleStackDelete(idx)}
              />
            </div>
          ))}
          <button className="reset-button" onClick={handleStackReset}>
            초기화
          </button>
        </SelectedContainer>
      ) : (
        ""
      )}
    </StackFrame>
  );
};

const StackFrame = styled.div`
  width: 1100px;
`;

const JobGroup = styled.div`
  display: flex;
  h2 {
    color: gray;
    opacity: 0.7;
    padding-right: 20px;
    cursor: pointer;
  }

  .is-click {
    color: black;
    opacity: 1;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  div {
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .not-selected {
    opacity: 0.5;
  }
`;

const StackImg = styled.img`
  width: 60px;
  height: 60px;

  cursor: pointer;
  border-radius: 50%;

  padding: 2px;
  margin: 4px;
`;

const SelectedContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px 0;

  div {
    display: flex;
    align-items: center;
    margin-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
    padding: 7px;
    background-color: #e9e9e9;
    font-weight: 400;
  }
  .del-icon {
    margin-left: 5px;
    width: 15px;
    opacity: 0.5;
    cursor: pointer;
  }

  .reset-button {
    width: 70px;
    height: 33px;
    margin-left: 10px;
    cursor: pointer;
  }
`;

export default Stack;
