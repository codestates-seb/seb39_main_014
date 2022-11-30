import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useOutsideClick } from "../../../hooks/useOutsideClick";
import { careerLists } from "../../../constants/createBoardData";
import { Career, Crew } from "../../../pages/boardCreatePage/styled";
import { getBoard } from "../../../apis/detailBoardApis/detailBoard";

import {
  Object,
  CrewState,
  CareersState,
  CareerState,
} from "../../../types/createBoard";
import SubmitForm from "./SubmitForm";
import _ from "lodash";
import DropDownButton from "../../shared/dropDown/dropDownButton/DropDownButton";

function CareerForm({ object }: Object) {
  const { boardId } = useParams();

  const [career, setCareer] = useState<CareerState>({
    career: "모집 분류",
    value: 0,
  });
  const [isCareer, setIsCareer] = useState(false);

  const [count, setCount] = useState(1);
  const [crew, setCrew] = useState<CrewState[]>([]);
  const [careers, setCareers] = useState<CareersState[]>([]);
  const [newCareerList, setNewCareerList] = useState(careerLists);

  const [loading, setLoading] = useState(false);

  const idCount = useRef(0);
  const careerClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  useOutsideClick(careerClickRef, setIsCareer);

  useEffect(() => {
    if (boardId) {
      setLoading(true);
      getBoard(boardId)
        .then(res => {
          setCrew(
            res.board.boardCareers.map(el => ({
              id: el.careerName,
              career: el.careerName,
              careerTotalRecruit: el.careerTotalRecruit,
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
            }))
          );
          setCareers(
            res.board.boardCareers.map(el => ({
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
              careerTotalRecruit: el.careerTotalRecruit,
            }))
          );
          setNewCareerList(
            newCareerList.filter(
              prev =>
                !res.board.boardCareers
                  .map(el => el.careerName)
                  .includes(prev.career)
            )
          );
        })
        .then(res => setLoading(false));
    }
  }, [boardId, newCareerList]);

  /** props 전달할 객체 */
  const newObject = { ...object, boardCareers: careers };

  /** 인원 증가 감소 버튼 */
  const onCountHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const event = e.target as HTMLButtonElement;
    if (event.value === "-") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(prev => prev - 1);
      }
    } else if (event.value === "+") {
      setCount(prev => prev + 1);
    }
  };

  /** 추가 버튼 핸들러 */
  const onCrewAdditionHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (career.career !== "모집 분류") {
      setCrew([
        ...crew,
        {
          id: idCount.current,
          career: career.career,
          careerTotalRecruit: count,
          careerId: career.value,
        },
      ]);
      setCareers([
        ...careers,
        {
          careerId: career.value,
          careerTotalRecruit: count,
        },
      ]);
      setCount(1);
      setCareer({ career: "모집 분류", value: 0 });
      setNewCareerList(
        newCareerList.filter(prev => prev.career !== career.career)
      );
      idCount.current = idCount.current + 1;
    }
  };

  /** 삭제 버튼 핸들러 */
  const onDeleteHandler = (careerId: number, career: string) => {
    setCrew(crew.filter(prev => prev.careerId !== careerId));
    setCareers(careers.filter(prev => prev.careerId !== careerId));
    setNewCareerList([
      ...newCareerList,
      careerLists.filter(prev => prev.career === career)[0],
    ]);
  };

  if (loading) return null;

  return (
    <>
      <Career>
        <label htmlFor="categorization">모집 분류 / 인원</label>
        <div className="Bundle">
          <div className="Select-option" ref={careerClickRef}>
            <DropDownButton isState={isCareer} setIsState={setIsCareer}>
              {career.career ? career.career : `모집 분류`}
            </DropDownButton>
            {isCareer && (
              <ul className="Careerlists">
                {newCareerList.map(el => (
                  <li
                    key={el.id}
                    onClick={() => {
                      setIsCareer(!isCareer);
                      setCareer({ career: el.career, value: el.value });
                    }}
                  >
                    {el.career}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="BundleButton">
            <button className="Count minus" value="-" onClick={onCountHandler}>
              -
            </button>
            <div className="Count-div">{count}</div>
            <button className="Count plus" value="+" onClick={onCountHandler}>
              +
            </button>
            <button className="Add-Crew" onClick={onCrewAdditionHandler}>
              추가
            </button>
          </div>
        </div>
        {crew &&
          crew.map(el => (
            <Crew key={el.careerId}>
              <div>
                {el.career} : {el.careerTotalRecruit}명
              </div>
              <button onClick={() => onDeleteHandler(el.careerId, el.career)}>
                삭제
              </button>
            </Crew>
          ))}
      </Career>
      <SubmitForm newObject={newObject} />
    </>
  );
}

export default CareerForm;
