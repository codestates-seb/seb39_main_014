import React, { useState } from "react";
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

function DivisionForm() {
  const [isMethod, setIsMethod] = useState("study");
  const [isChecked, setIsChecked] = useState("online");

  const [stack, setStack] = useState("");
  const [isStack, setIsStack] = useState(false);
  const [period, setPeriod] = useState("미정");
  const [isPeriod, setIsPeriod] = useState(false);

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
          <div>
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsStack(!isStack);
              }}
            >
              프로젝트 사용 스택
            </button>

            <AiOutlineDown
              className="AiOutlineDown"
              onClick={(e) => {
                e.preventDefault();
                setIsStack(!isStack);
              }}
            />
          </div>
          {isStack ? (
            <ul className="Stacklists">
              {stackLists.map((el) => (
                <li
                  key={el.id}
                  value={el.stack}
                  onClick={() => {
                    setIsStack(!isStack);
                    setStack(el.stack);
                  }}
                >
                  {el.stack}
                </li>
              ))}
            </ul>
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
