import React, { useState, useRef } from "react";
import {
  FirstDivision,
  FirstLeft,
  FirstRight,
  SecondDivision,
  SecondLeft,
  SecondRight,
} from "../../pages/writeForm/styled";
import {
  regionLists,
  stackLists,
  periodLists,
} from "../../pages/writeForm/WriteFormData";
import { AiOutlineDown } from "react-icons/ai";
import { GoX } from "react-icons/go";

function DivisionForm() {
  const [isMethod, setIsMethod] = useState("study");
  const [isChecked, setIsChecked] = useState("online");

  const [stack, setStack] = useState("");
  const [isStack, setIsStack] = useState(false);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [selectedStackList, setSelectedStackList] = useState([]);

  const [search, setSearch] = useState("");

  const stackRef = useRef(0);
  const newStackRef = useRef(9);

  const [period, setPeriod] = useState("미정");
  const [isPeriod, setIsPeriod] = useState(false);

  const handleStackListClick = (e) => {
    e.preventDefault();
    setStack(e.target.innerText);
    setSelectedStackList([
      ...selectedStackList,
      { id: stackRef.current, techStackName: e.target.innerText },
    ]);
    stackRef.current = stackRef.current + 1;
    setIsStack(!isStack);
    setNewStackList(
      newStackList.filter((prev) => prev.stack !== e.target.innerText)
    );
  };

  const handleStackListRemove = (id) => {
    // target의 id
    const hi = selectedStackList.filter((prev) => prev.id === id);
    setNewStackList([
      ...newStackList,
      { id: newStackRef.current, stack: hi[0].techStackName },
    ]);
    newStackRef.current = newStackRef.current + 1;
    setSelectedStackList(selectedStackList.filter((prev) => prev.id !== id));
  };

  const searchStack = newStackList.filter((prev) => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <>
      <FirstDivision>
        <FirstLeft>
          <label htmlFor="repo">모집 구분</label>
          <div className="Check-box">
            <input
              id="study"
              type="radio"
              value="study"
              checked={isMethod === "study"}
              onChange={(e) => setIsMethod(e.target.value)}
            />
            <label htmlFor="study">스터디</label>
            <input
              id="project"
              type="radio"
              value="project"
              checked={isMethod === "project"}
              onChange={(e) => setIsMethod(e.target.value)}
            />
            <label htmlFor="project">프로젝트</label>
          </div>
        </FirstLeft>
        <FirstRight>
          <label htmlFor="online">모임 방식</label>
          <div className="Check-box">
            <input
              id="online"
              type="radio"
              value="online"
              checked={isChecked === "online"}
              onChange={(e) => setIsChecked(e.target.value)}
            />
            <label htmlFor="online">온라인</label>
            <input
              id="offline"
              type="radio"
              value="offline"
              checked={isChecked === "offline"}
              onChange={(e) => setIsChecked(e.target.value)}
            />
            <label htmlFor="offline">오프라인</label>
            {isChecked === "offline" ? (
              <select id="region">
                {regionLists.map((el) => (
                  <option key={el.id}>{el.region}</option>
                ))}
              </select>
            ) : null}
          </div>
        </FirstRight>
      </FirstDivision>
      <SecondDivision>
        <SecondLeft>
          <label htmlFor="classification">기술 스택</label>
          <div
            onClick={(e) => {
              e.preventDefault();
              setIsStack(!isStack);
            }}
          >
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="프로젝트 사용 스택"
            />

            <AiOutlineDown
              className="AiOutlineDown"
              onClick={(e) => {
                e.preventDefault();
                setIsStack(!isStack);
              }}
            />
          </div>
          {isStack ? (
            <ul className="Stacklists" value={stack}>
              {searchStack.map((el) => {
                return (
                  <li key={el.id} onClick={handleStackListClick}>
                    {el.stack}
                  </li>
                );
              })}
            </ul>
          ) : null}
          {selectedStackList ? (
            <span className="Added-stack-list">
              {selectedStackList.map((el) => (
                <div key={el.id}>
                  <img
                    src={`/assets/stack/${el.techStackName}.svg`}
                    alt={`${el.techStackName}`}
                  />
                  <span onClick={() => handleStackListRemove(el.id)}>
                    <GoX className="Gox" />
                  </span>
                </div>
              ))}
            </span>
          ) : null}
        </SecondLeft>
        <SecondRight>
          <label htmlFor="period">기간</label>
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsPeriod(!isPeriod);
              }}
            >
              {period}
            </button>
            <AiOutlineDown
              className="AiOutlineDown"
              onClick={(e) => {
                e.preventDefault();
                setIsPeriod(!isPeriod);
              }}
            />
          </div>
          {isPeriod ? (
            <ul className="Periodlists">
              {periodLists.map((el) => (
                <li
                  key={el.id}
                  value={el.period}
                  onClick={() => {
                    setIsPeriod(!isPeriod);
                    setPeriod(el.period);
                  }}
                >
                  {el.period}
                </li>
              ))}
            </ul>
          ) : null}
        </SecondRight>
      </SecondDivision>
    </>
  );
}

export default DivisionForm;
