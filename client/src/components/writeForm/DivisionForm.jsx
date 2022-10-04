import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
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
import axios from "axios";
import _ from "lodash";

function DivisionForm() {
  const { boardId } = useParams();
  const BOARD_URL = `${process.env.REACT_APP_API_URL}/api/v1/board/${boardId}`;
  const [modifyInfo, setModifyInfo] = useState([]);

  const [recruitCategory, setRecruitCategory] = useState("STUDY");
  const [recruitMethod, setRecruitMethod] = useState("ONLINE");

  const [location, setLocation] = useState({
    region: "미정",
    value: "NO_CHOICE",
  });
  const [isLocation, setIsLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [stack, setStack] = useState("");
  const [isStack, setIsStack] = useState(false);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [selectedStackList, setSelectedStackList] = useState([]);
  const [techStacks, setTechStacks] = useState([]);

  const [search, setSearch] = useState("");

  /** 외부클릭 관련 ref */
  const recuirtClickRef = useRef();
  const stackClickRef = useRef();
  const periodClickRef = useRef();

  const stackRef = useRef(0);
  const newStackRef = useRef(9);

  const [periodValue, setPeriodValue] = useState({
    period: "미정",
    value: "NO_CHOICE",
  });
  const [isPeriod, setIsPeriod] = useState(false);

  useEffect(() => {
    setLoading(true);
    if (boardId) {
      axios
        .get(BOARD_URL)
        .then((res) => {
          console.log(res);
          setModifyInfo(res.data.board);
          setRecruitCategory(
            res.data.board.recruitCategory === "스터디" ? "STUDY" : "PROJECT"
          );
          setRecruitMethod(
            res.data.board.recruitMethod === "온라인" ? "ONLINE" : "OFFLINE"
          );
          setLocation({
            region: _.filter(regionLists, {
              region: res.data.board.location,
            })[0].region,
            value: _.filter(regionLists, { region: res.data.board.location })[0]
              .value,
          });
          setSelectedStackList(
            res.data.board.techStackNames.map((el) => ({
              id: el.techStackName,
              techStackName: stackNumbers[0][el.techStackName],
            }))
          );
          setTechStacks(
            res.data.board.techStackNames.map((el) => ({
              techStackId: stackNumbers[0][el.techStackName],
            }))
          );
          setPeriodValue({
            period: _.filter(periodLists, { period: res.data.board.period })[0]
              .period,
            value: _.filter(periodLists, { period: res.data.board.period })[0]
              .value,
          });
          setNewStackList(
            stackLists.filter(
              (prev) =>
                !res.data.board.techStackNames
                  .map((el) => el.techStackName)
                  .includes(prev.stack)
            )
          );
        })
        .then((res) => {
          setLoading(false);
        })
        .catch((err) => console.log(err));
    } else {
      setLoading(false);
    }
  }, []);

  /** 외부 클릭시 창 사라지는 기능 */
  const useOutsideClick = (ref, callback) => {
    const handleClick = (e) => {
      if (ref && !ref.current.contains(e.target)) {
        callback(false);
      } else {
        callback(true);
      }
    };

    useEffect(() => {
      document.addEventListener("mousedown", handleClick);

      return () => {
        document.removeEventListener("mousedown", handleClick);
      };
    });
  };

  useOutsideClick(recuirtClickRef, setIsLocation);
  useOutsideClick(stackClickRef, setIsStack);
  useOutsideClick(periodClickRef, setIsPeriod);

  /** props 내릴 데이터 */
  const object = {
    recruitCategory: recruitCategory,
    recruitMethod: recruitMethod,
    location: location.value,
    boardTechStacks: techStacks,
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
    setTechStacks([
      ...techStacks,
      { techStackId: stackNumbers[0][e.target.innerText] },
    ]);
    setIsStack(!isStack);
    setNewStackList(
      newStackList.filter((prev) => prev.stack !== e.target.innerText)
    );
  };
  /** 선택된 스택 추가 및 선택된 스택 기존 목록에서 제거*/
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

  /** 기간 변경 */
  const handlePeriodClick = (e) => {
    setIsPeriod(!isPeriod);
    setPeriodValue((prev) => {
      return { ...prev, period: e.period, value: e.value };
    });
  };

  /** 검색으로 스택 찾기 */
  const searchStack = newStackList.filter((prev) => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) return null;

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
                      // eslint-disable-next-line prettier/prettier
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
              {isLocation && recruitMethod === "OFFLINE" ? (
                <ul
                  className="location"
                  ref={recuirtClickRef}
                  // eslint-disable-next-line prettier/prettier
                  value={isLocation}
                >
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
                        // eslint-disable-next-line prettier/prettier
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
          <label htmlFor="classification">기술 스택 (최대 7개)</label>
          <div
            onClick={(e) => {
              e.preventDefault();
              setIsStack(!isStack);
              // eslint-disable-next-line prettier/prettier
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
            <ul className="Stacklists" ref={stackClickRef}>
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
            <div
              onClick={(e) => {
                e.preventDefault();
                setIsPeriod(!isPeriod);
                // eslint-disable-next-line prettier/prettier
              }}
            >
              {periodValue.period}
            </div>
            <AiOutlineDown
              className="AiOutlineDown"
              onClick={(e) => {
                e.preventDefault();
                setIsPeriod(!isPeriod);
              }}
            />
          </div>
          {isPeriod ? (
            <ul className="Periodlists" ref={periodClickRef}>
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
