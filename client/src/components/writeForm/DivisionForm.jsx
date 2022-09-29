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
  stackNumbers,
  stackReverse,
} from "../../pages/writeForm/WriteFormData";
import { AiOutlineDown } from "react-icons/ai";
import { GoX } from "react-icons/go";
import CareerForm from "./CareerForm";

function DivisionForm() {
  const [recruitCategory, setRecruitCategory] = useState("STUDY");
  const [recruitMethod, setRecruitMethod] = useState("ONLINE");

  const [location, setLocation] = useState({
    region: "미정",
    value: "NO_CHOICE",
  });
  const [isLocation, setIsLocation] = useState(false);

  const [stack, setStack] = useState("");
  const [isStack, setIsStack] = useState(false);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [selectedStackList, setSelectedStackList] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  const [search, setSearch] = useState("");

  const stackRef = useRef(0);
  const newStackRef = useRef(9);

  const [periodValue, setPeriodValue] = useState({
    period: "미정",
    value: "NO_CHOICE",
  });
  const [isPeriod, setIsPeriod] = useState(false);

  const object = {
    recruitCategory: recruitCategory,
    recruitMethod: recruitMethod,
    location: location,
    techStacks: techStacks,
    period: periodValue.value,
  };

  const handleStackListClick = (e) => {
    e.preventDefault();

    setStack(e.target.innerText);
    setSelectedStackList([
      ...selectedStackList,
      {
        id: stackRef.current,
        techStackName: stackNumbers[0][e.target.innerText],
      },
    ]);
    stackRef.current = stackRef.current + 1;
    setTechStacks([...techStacks, { id: stackNumbers[0][e.target.innerText] }]);
    setIsStack(!isStack);
    setNewStackList(
      newStackList.filter((prev) => prev.stack !== e.target.innerText)
    );
  };

  const handleStackListRemove = (id) => {
    // target의 id
    const newSelectedStackList = selectedStackList.filter(
      (prev) => prev.id === id
    );
    setNewStackList([
      ...newStackList,
      {
        id: newStackRef.current,
        stack: stackReverse[0][newSelectedStackList[0].techStackName],
      },
    ]);
    newStackRef.current = newStackRef.current + 1;
    setSelectedStackList(selectedStackList.filter((prev) => prev.id !== id));
  };

  const handlePeriodClick = (e) => {
    setIsPeriod(!isPeriod);
    setPeriodValue((prev) => {
      return { ...prev, period: e.period, value: e.value };
    });
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
              id="STUDY"
              type="radio"
              value="STUDY"
              checked={recruitCategory === "STUDY"}
              onChange={(e) => setRecruitCategory(e.target.value)}
            />
            <label htmlFor="study">스터디</label>
            <input
              id="PROJECT"
              type="radio"
              value="PROJECT"
              checked={recruitCategory === "PROJECT"}
              onChange={(e) => setRecruitCategory(e.target.value)}
            />
            <label htmlFor="PROJECT">프로젝트</label>
          </div>
        </FirstLeft>
        <FirstRight>
          <label htmlFor="ONLINE">모임 방식</label>
          <div className="Check-box">
            <input
              id="ONLINE"
              type="radio"
              value="ONLINE"
              checked={recruitMethod === "ONLINE"}
              onChange={(e) => setRecruitMethod(e.target.value)}
            />
            <label htmlFor="OFFLINE">온라인</label>
            <input
              id="OFFLINE"
              type="radio"
              value="OFFLINE"
              checked={recruitMethod === "OFFLINE"}
              onChange={(e) => setRecruitMethod(e.target.value)}
            />
            <label htmlFor="OFFLINE">오프라인</label>
            <div className="Location-box">
              {recruitMethod === "OFFLINE" ? (
                <div className="Location-button">
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLocation(!isLocation);
                    }}
                  >
                    {location.region}
                  </button>
                  <AiOutlineDown
                    className="AiOutlineDown"
                    onClick={(e) => {
                      e.preventDefault();
                      setIsLocation(!isLocation);
                    }}
                  />
                </div>
              ) : null}
              {isLocation ? (
                <ul className="location">
                  {regionLists.map((el) => (
                    <li
                      key={el.id}
                      onClick={() => {
                        setIsLocation(!isLocation);
                        setLocation((prev) => {
                          return {
                            ...prev,
                            region: el.region,
                            value: el.value,
                          };
                        });
                      }}
                    >
                      {el.region}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
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
                    src={`/assets/stack/${
                      stackReverse[0][el.techStackName]
                    }.svg`}
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
              {periodValue.period}
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
                <li key={el.id} onClick={() => handlePeriodClick(el)}>
                  {el.period}
                </li>
              ))}
            </ul>
          ) : null}
        </SecondRight>
      </SecondDivision>
      <CareerForm object={object} />
    </>
  );
}

export default DivisionForm;
