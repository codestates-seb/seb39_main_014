import { useState } from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";

const Stack = ({ selectedList, setSelectedList }) => {
  // 모든 스택 이름
  const stacks = {
    전체: [
      "JavaScript",
      "TypeScript",
      "React",
      "Vue",
      "Svelte",
      "Next",
      "Java",
      "Spring",
      "Node",
      "Nest",
      "Go",
      "Kotlin",
      "Express",
      "MySQL",
      "MongoDB",
      "Python",
      "Php",
      "GraphQL",
      "Flutter",
      "Swift",
      "ReactNative",
      "Unity",
      "Aws",
      "Docker",
    ],
    프론트엔드: ["JavaScript", "TypeScript", "React", "Vue", "Svelte", "Next"],
    백엔드: [
      "Java",
      "Spring",
      "Node",
      "Nest",
      "Go",
      "Kotlin",
      "Express",
      "MySQL",
      "MongoDB",
      "Python",
      "Php",
      "GraphQL",
    ],
    기타: ["Flutter", "Swift", "ReactNative", "Unity", "Aws", "Docker"],
  };

  const [currentJob, setCurrentJob] = useState("전체");

  /**프론트엔드 백엔드 기타 모두보기 탭*/
  const handleJob = (el) => {
    setCurrentJob(el.target.innerText);
  };

  /** 스택 선택 함수
   * 이미 선택된 값일 경우 : filter로 selectedList에서 삭제
   * 선택되지 않은 값일 경우 : selectedList에 추가*/
  const handleStackClick = (event) => {
    if (selectedList.includes(event)) {
      const deletedArr = selectedList.filter((el) => el !== event);
      setSelectedList(deletedArr);
    } else {
      setSelectedList((prev) => [...prev, event]);
    }
  };

  /** 스택 삭제 */
  const handleStackDelete = (index) => {
    const deletedArr = selectedList.filter((el, idx) => idx !== index);
    setSelectedList(deletedArr);
  };

  /** 스택 초기화 */
  const handleStackReset = () => {
    setSelectedList([]);
  };

  return (
    <StackFrame>
      <JobGroup className="tab">
        {Object.keys(stacks).map((el) => (
          <h2
            key={el}
            onClick={handleJob}
            // eslint-disable-next-line prettier/prettier
            className={currentJob === el ? "selectedList" : ""}>
            {el}
          </h2>
        ))}
        <h2
          onClick={handleJob}
          className={currentJob === "전체" ? "selectedList" : ""}
        />
      </JobGroup>
      <StackContainer>
        {/* 현재탭이 전체가 아닐 경우 */}
        {currentJob !== "전체"
          ? stacks[currentJob].map((el) => (
              <StackImg
                key={el}
                src={`/assets/stack/${el}.svg`}
                alt={el}
                onClick={() => handleStackClick(el)}
                className={
                  !selectedList.includes(el)
                    ? "not-selectedList"
                    : "selectedList"
                }
              />
            ))
          : // 현재탭이 전체일 경우
            [...stacks.전체].map((el) => (
              <StackImg
                src={`/assets/stack/${el}.svg`}
                alt={`${el}`}
                key={el}
                onClick={() => handleStackClick(el)}
                className={
                  !selectedList.includes(el) && selectedList.length >= 0
                    ? "not-selectedList"
                    : "selectedList"
                }
              />
            ))}
      </StackContainer>
      {selectedList.length ? (
        <SelectedContainer>
          {selectedList.map((el, idx) => (
            <div key={el}>
              {el}
              <IoCloseCircleOutline
                key={el}
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
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;

  @media screen and (min-width: 768px) {
    width: 1000px;
  }
`;

const JobGroup = styled.div`
  display: flex;
  width: 100%;

  h2 {
    color: gray;
    opacity: 0.8;
    padding-right: 20px;
    cursor: pointer;
  }

  .selectedList {
    color: black;
    opacity: 1;
  }
`;

const StackContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  div {
    display: flex;
    align-items: center;
    background-color: gray;
    cursor: pointer;
  }
  .selectedList {
    // 선택된 스택 css 변경 필요
    border: 2px solid black;
  }
  .not-selectedList {
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

    cursor: pointer;
  }

  .reset-button {
    width: 70px;
    height: 33px;
    margin-left: 10px;
    border-radius: 5px;
    border: none;
    background-color: white;
    box-shadow: rgba(149, 157, 165, 0.2) 1px 1px 6px 1px;
    cursor: pointer;
  }

  .reset-button:hover {
    background-color: #ffe3e4;
    color: #ff7d85;
    font-weight: bold;
    transition: 0.15s;
  }
`;

export default Stack;
