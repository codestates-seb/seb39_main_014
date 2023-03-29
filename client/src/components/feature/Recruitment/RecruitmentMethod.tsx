import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import * as S from "@pages/RecruitmentPage/styled";
import {
  regionLists,
  stackLists,
  periodLists,
  stackNumbers,
  stackReverse,
} from "@constants/createBoardData";
import { AiOutlineDown } from "react-icons/ai";
import { GoX } from "react-icons/go";
import RecruitmentCareer from "./RecruitmentCareer";
import { getBoard } from "@apis/detailBoardApis/detailBoard";
import _ from "lodash";
import { useOutsideClick } from "@hooks/useOutsideClick";

import { SelectedStack, TechStack } from "types/createBoard";
import DropDownButton from "@components/shared/dropDown/dropDownButton/DropDownButton";

export default function RecruitmentMethod() {
  const { boardId } = useParams();

  const [recruitCategory, setRecruitCategory] = useState("STUDY");
  const [recruitMethod, setRecruitMethod] = useState("ONLINE");

  const [location, setLocation] = useState({
    region: "미정",
    value: "NO_CHOICE",
  });
  const [isLocation, setIsLocation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isStack, setIsStack] = useState(false);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [selectedStackList, setSelectedStackList] = useState<SelectedStack[]>(
    []
  );
  const [techStacks, setTechStacks] = useState<TechStack[]>([]);

  const [search, setSearch] = useState("");

  const recuirtClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const stackClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const periodClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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
      getBoard(boardId)
        .then(res => {
          setRecruitCategory(
            res.board.recruitCategory === "스터디" ? "STUDY" : "PROJECT"
          );
          setRecruitMethod(
            res.board.recruitMethod === "온라인" ? "ONLINE" : "OFFLINE"
          );
          setNewStackList(
            newStackList.filter(
              prev =>
                !res.board.techStackNames
                  .map(el => el.techStackName)
                  .includes(prev.stack)
            )
          );
          setSelectedStackList(
            res.board.techStackNames.map(el => ({
              id: el.techStackName,
              techStackName: stackNumbers[0][el.techStackName],
            }))
          );
          setTechStacks(
            res.board.techStackNames.map(el => ({
              techStackId: stackNumbers[0][el.techStackName],
            }))
          );
          setPeriodValue({
            period: _.filter(periodLists, { period: res.board.period })[0]
              .period,
            value: _.filter(periodLists, { period: res.board.period })[0].value,
          });
          setLocation({
            region: _.filter(regionLists, {
              region: res.board.location,
            })[0].region,
            value: _.filter(regionLists, { region: res.board.location })[0]
              .value,
          });
        })
        .then(res => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [boardId, newStackList]);

  useOutsideClick(recuirtClickRef, setIsLocation);
  useOutsideClick(stackClickRef, setIsStack);
  useOutsideClick(periodClickRef, setIsPeriod);

  const object = {
    recruitCategory: recruitCategory,
    recruitMethod: recruitMethod,
    location: location.value,
    boardTechStacks: techStacks,
    period: periodValue.value,
  };

  const handleStackListClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    const event = e.target as HTMLLIElement;

    if (selectedStackList.length < 7) {
      setSelectedStackList([
        ...selectedStackList,
        {
          id: stackRef.current,
          techStackName: stackNumbers[0][event.innerText],
        },
      ]);
      stackRef.current = stackRef.current + 1;
      setTechStacks([
        ...techStacks,
        { techStackId: stackNumbers[0][event.innerText] },
      ]);
      setIsStack(!isStack);
      setNewStackList(
        newStackList.filter(prev => prev.stack !== event.innerText)
      );
    }
  };

  const handleStackListRemove = (id: number | string) => {
    const newSelectedStackList = selectedStackList.filter(
      prev => prev.id === id
    );
    setNewStackList([
      ...newStackList,
      {
        id: newStackRef.current,
        stack: stackReverse[0][newSelectedStackList[0].techStackName],
      },
    ]);
    newStackRef.current = newStackRef.current + 1;
    setSelectedStackList(selectedStackList.filter(prev => prev.id !== id));
  };

  const handlePeriodClick = (e: { period: string; value: string }) => {
    setIsPeriod(!isPeriod);
    setPeriodValue(prev => {
      return { ...prev, period: e.period, value: e.value };
    });
  };

  const searchStack = newStackList.filter(prev => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) return null;

  return (
    <>
      <S.FirstDivision>
        <S.FirstLeft>
          <label htmlFor="repo">모집 구분</label>
          <div className="Check-box">
            <input
              id="STUDY"
              type="radio"
              value="STUDY"
              checked={recruitCategory === "STUDY"}
              onChange={e => setRecruitCategory(e.target.value)}
            />
            <label htmlFor="study">스터디</label>
            <input
              id="PROJECT"
              type="radio"
              value="PROJECT"
              checked={recruitCategory === "PROJECT"}
              onChange={e => setRecruitCategory(e.target.value)}
            />
            <label htmlFor="PROJECT">프로젝트</label>
          </div>
        </S.FirstLeft>
        <S.FirstRight>
          <label htmlFor="ONLINE">모임 방식</label>
          <div className="Check-box">
            <input
              id="ONLINE"
              type="radio"
              value="ONLINE"
              checked={recruitMethod === "ONLINE"}
              onChange={e => setRecruitMethod(e.target.value)}
            />
            <label htmlFor="OFFLINE">온라인</label>
            <input
              id="OFFLINE"
              type="radio"
              value="OFFLINE"
              checked={recruitMethod === "OFFLINE"}
              onChange={e => setRecruitMethod(e.target.value)}
            />
            <label htmlFor="OFFLINE">오프라인</label>
            <div className="Location-box" ref={recuirtClickRef}>
              {recruitMethod === "OFFLINE" && (
                <DropDownButton isState={isLocation} setIsState={setIsLocation}>
                  {location.region}
                </DropDownButton>
              )}
              {isLocation && recruitMethod === "OFFLINE" && (
                <ul className="location">
                  {regionLists.map(el => (
                    <li
                      key={el.id}
                      onClick={() => {
                        setIsLocation(!isLocation);
                        setLocation(prev => {
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
              )}
            </div>
          </div>
        </S.FirstRight>
      </S.FirstDivision>
      <S.SecondDivision>
        <S.SecondLeft ref={stackClickRef}>
          <label htmlFor="classification">기술 스택 (최대 7개)</label>
          <div
            onClick={e => {
              e.preventDefault();
              setIsStack(!isStack);
            }}
          >
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="프로젝트 사용 스택"
            />

            <AiOutlineDown
              className="AiOutlineDown"
              onClick={e => {
                e.preventDefault();
                setIsStack(!isStack);
              }}
            />
          </div>
          {isStack && (
            <ul className="Stacklists">
              {searchStack.map(el => {
                return (
                  <li key={el.id} onClick={handleStackListClick}>
                    {el.stack}
                  </li>
                );
              })}
            </ul>
          )}
          {selectedStackList && (
            <span className="Added-stack-list">
              {selectedStackList.map(el => (
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
          )}
        </S.SecondLeft>
        <S.SecondRight ref={periodClickRef}>
          <label htmlFor="period">기간</label>
          <DropDownButton isState={isPeriod} setIsState={setIsPeriod}>
            {periodValue.period}
          </DropDownButton>
          {isPeriod && (
            <ul className="Periodlists">
              {periodLists.map(el => (
                <li key={el.id} onClick={() => handlePeriodClick(el)}>
                  {el.period}
                </li>
              ))}
            </ul>
          )}
        </S.SecondRight>
      </S.SecondDivision>
      <RecruitmentCareer object={object} />
    </>
  );
}
