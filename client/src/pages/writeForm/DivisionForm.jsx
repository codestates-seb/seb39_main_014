import React, { useState } from "react";
import {
  FirstDivision,
  FirstLeft,
  FirstRight,
  SecondDivision,
  SecondLeft,
  SecondRight,
} from "./styled";
import { regionLists, stackLists, periodLists } from "./WriteFormData";

function DivisionForm() {
  const [isMethod, setIsMethod] = useState("study");
  const [isChecked, setIsChecked] = useState("online");

  const onMethodChangeHandler = (e) => {
    setIsMethod(e.target.value);
  };
  const onRecruitmentHandler = (e) => {
    setIsChecked(e.target.value);
  };

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
              onChange={onMethodChangeHandler}
            />
            <label htmlFor="study">스터디</label>
            <input
              id="project"
              type="radio"
              value="project"
              checked={isMethod === "project"}
              onChange={onMethodChangeHandler}
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
              onChange={onRecruitmentHandler}
            />
            <label htmlFor="online">온라인</label>
            <input
              id="offline"
              type="radio"
              value="offline"
              checked={isChecked === "offline"}
              onChange={onRecruitmentHandler}
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
          <select id="classification">
            {stackLists.map((el) => (
              <option key={el.id}>{el.stack}</option>
            ))}
          </select>{" "}
        </SecondLeft>
        <SecondRight>
          <label htmlFor="period">기간</label>
          <select id="period">
            {periodLists.map((el) => (
              <option key={el.id}>{el.period}</option>
            ))}
          </select>
        </SecondRight>
      </SecondDivision>
    </>
  );
}

export default DivisionForm;
