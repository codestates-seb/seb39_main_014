import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { careerLists } from "../../../constants/WriteFormData";
import { Career, Crew } from "../../../pages/writeForm/styled";

import { AiOutlineDown } from "react-icons/ai";
import SubmitForm from "./SubmitForm";
import axios from "axios";
import _ from "lodash";

function CareerForm({ object }) {
  const { boardId } = useParams();
  const BOARD_URL = `${process.env.REACT_APP_API_URL}/api/v1/board/${boardId}`;

  const [career, setCareer] = useState("모집 분류");
  const [isCareer, setIsCareer] = useState(false);

  const [count, setCount] = useState(1);
  const [crew, setCrew] = useState([]);
  const [careers, setCareers] = useState([]);
  const [newCareerList, setNewCareerList] = useState(careerLists);

  const [loading, setLoading] = useState(false);

  const idCount = useRef(0);
  const careerClickRef = useRef();

  useEffect(() => {
    if (boardId) {
      setLoading(true);
      axios
        .get(BOARD_URL)
        .then(res => {
          setCrew(
            res.data.board.boardCareers.map(el => ({
              id: el.careerName,
              career: el.careerName,
              careerTotalRecruit: el.careerTotalRecruit,
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
            }))
          );
          setCareers(
            res.data.board.boardCareers.map(el => ({
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
              careerTotalRecruit: el.careerTotalRecruit,
            }))
          );
          setNewCareerList(
            newCareerList.filter(
              prev =>
                !res.data.board.boardCareers
                  .map(el => el.careerName)
                  .includes(prev.career)
            )
          );
        })
        .then(res => setLoading(false));
    } else setLoading(false);
  }, []);

  /** 외부 클릭시 창 사라지는 기능 */
  const handleClickOutside = event => {
    if (careerClickRef && !careerClickRef.current.contains(event.target)) {
      setIsCareer(false);
    } else {
      setIsCareer(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });

  /** props 전달할 객체 */
  const newObject = { ...object, boardCareers: careers };

  /** 인원 증가 감소 버튼 */
  const onCountHandler = e => {
    e.preventDefault();
    if (e.target.value === "-") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount(prev => prev - 1);
      }
    } else if (e.target.value === "+") {
      setCount(prev => prev + 1);
    }
  };

  /** 추가 버튼 핸들러 */
  const onCrewAdditionHandler = e => {
    e.preventDefault();
    if (career !== "모집 분류") {
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
      setCareer("모집 분류");
      setNewCareerList(
        newCareerList.filter(prev => prev.career !== career.career)
      );
      idCount.current = idCount.current + 1;
    }
  };

  /** 삭제 버튼 핸들러 */
  const onDeleteHandler = (careerId, career) => {
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
          <div className="Select-option">
            <div className="Career-select">
              <button
                onClick={e => {
                  e.preventDefault();
                  setIsCareer(!isCareer);
                  // eslint-disable-next-line prettier/prettier
                  // eslint-disable-next-line prettier/prettier
                  // eslint-disable-next-line prettier/prettier
                  // eslint-disable-next-line prettier/prettier
                }}
              >
                {career.career ? career.career : `모집 분류`}
              </button>

              <AiOutlineDown
                className="AiOutlineDown"
                onClick={e => {
                  e.preventDefault();
                  setIsCareer(!isCareer);
                }}
              />
            </div>
            {isCareer ? (
              <ul className="Careerlists" ref={careerClickRef}>
                {newCareerList.map(el => (
                  <li
                    key={el.id}
                    onClick={() => {
                      setIsCareer(!isCareer);
                      setCareer({ career: el.career, value: el.value });
                      // eslint-disable-next-line prettier/prettier
                    }}
                  >
                    {el.career}
                  </li>
                ))}
              </ul>
            ) : null}
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
        {crew
          ? crew.map(el => (
              <Crew key={el.careerId}>
                <div>
                  {el.career} : {el.careerTotalRecruit}명
                </div>
                <button
                  crew={crew}
                  // eslint-disable-next-line prettier/prettier
                  onClick={() => onDeleteHandler(el.careerId, el.career)}
                >
                  삭제
                </button>
              </Crew>
            ))
          : null}
      </Career>
      <SubmitForm newObject={newObject} />
    </>
  );
}

export default CareerForm;
