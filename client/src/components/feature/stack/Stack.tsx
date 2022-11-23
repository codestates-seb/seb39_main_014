import { useState } from "react";
import styled from "styled-components";
import { IoCloseCircleOutline } from "react-icons/io5";
import { stackList } from "../../../constants/stackList";

const Stack = ({ selectedList, setSelectedList }: any) => {
  const stackCategory = ["전체", "프론트엔드", "백엔드", "기타"];

  const [currentJob, setCurrentJob] = useState("전체");
  const handleStackClick = (event: string) => {
    if (selectedList.includes(event)) {
      const deletedArr = selectedList.filter((el: string) => el !== event);
      setSelectedList(deletedArr);
    } else {
      setSelectedList((prev: string[]) => [...prev, event]);
    }
  };

  const handleStackDelete = (index: number) => {
    const deletedArr = selectedList.filter(
      (el: string, idx: number) => idx !== index
    );
    setSelectedList(deletedArr);
  };

  const handleStackReset = () => {
    setSelectedList([]);
  };

  const handleJob = (event: React.MouseEvent<HTMLElement>) => {
    const eventTarget = event.target as HTMLElement;
    setCurrentJob(eventTarget.innerText);
  };

  return (
    <StackFrame>
      <JobGroup className="tab">
        {stackCategory.map(el => (
          <div
            key={el}
            onClick={handleJob}
            className={currentJob === el ? "selectedList" : ""}
          >
            {el}
          </div>
        ))}
      </JobGroup>

      <StackContainer>
        {currentJob !== "전체"
          ? stackList[currentJob].map((el: string, idx: number) => (
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
          : [...stackList.전체].map(el => (
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
          {selectedList.map((el: string, idx: number) => (
            <div key={el}>
              {el}
              <IoCloseCircleOutline
                className="del-icon"
                onClick={() => handleStackDelete(idx)}
              />
            </div>
          ))}
          <button className="reset-button" onClick={handleStackReset}>
            초기화
          </button>
        </SelectedContainer>
      ) : null}
    </StackFrame>
  );
};

const StackFrame = styled.div`
  margin-top: 10px;
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
  background-color: white;

  @media screen and (min-width: 1100px) {
    width: 1000px;
  }
`;

const JobGroup = styled.div`
  display: flex;
  width: 100%;
  font-size: 1.5rem;
  font-weight: 700;

  div {
    color: gray;
    opacity: 0.7;
    margin-right: 2rem;
    margin-bottom: 1rem;
    cursor: pointer;
  }

  div:hover {
    opacity: 0.9;
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
    border: 2px solid gray;
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

  &:hover {
    opacity: 1;
  }
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
    transition: 0.3s;
  }
  .del-icon:hover {
    color: red;
    transition: 0.3s;
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
    transition: 0.2s;
    background-color: #ffe3e4;
    color: #ff7d85;
    font-weight: bold;
  }
`;

export default Stack;
