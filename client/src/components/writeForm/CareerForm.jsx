import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { careerLists } from "../../pages/writeForm/WriteFormData";
import { Career, Crew } from "../../pages/writeForm/styled";

import { AiOutlineDown } from "react-icons/ai";
import SubmitForm from "./SubmitForm";
import axios from "axios";
import _ from "lodash";

function CareerForm({ object }) {
  const { boardId } = useParams();
  const BOARD_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`;
  const [modifyInfo, setModifyInfo] = useState([]);

  const [career, setCareer] = useState({
    career: "웹 프론트엔드",
    value: 1,
  });
  const [isCareer, setIsCareer] = useState(false);

  const [count, setCount] = useState(1);
  const [crew, setCrew] = useState([]);
  const [careers, setCareers] = useState([]);

  const [loading, setLoading] = useState(false);

  const idCount = useRef(0);

  useEffect(() => {
    if (boardId) {
      setLoading(true);
      axios
        .get(BOARD_URL)
        .then((res) => {
          setCrew(
            res.data.board.boardCareers.map((el) => ({
              id: el.careerName,
              career: el.careerName,
              careerTotalRecruit: el.careerTotalRecruit,
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
            }))
          );
          setCareers(
            res.data.board.boardCareers.map((el) => ({
              careerId: _.filter(careerLists, {
                career: el.careerName,
              })[0].value,
              careerTotalRecruit: el.careerTotalRecruit,
            }))
          );
        })
        .then((res) => setLoading(false));
    } else setLoading(false);
  }, []);

  const newObject = { ...object, boardCareers: careers };

  const onCountHandler = (e) => {
    e.preventDefault();
    if (e.target.value === "-") {
      if (count === 1) {
        setCount(1);
      } else {
        setCount((prev) => prev - 1);
      }
    } else if (e.target.value === "+") {
      setCount((prev) => prev + 1);
    }
  };

  const onCrewAdditionHandler = (e) => {
    e.preventDefault();
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
    setCareer({ career: "웹 프론트엔드", value: 1 });
    idCount.current = idCount.current + 1;
  };

  const onDeleteHandler = (e) => {
    setCrew(crew.filter((prev) => prev.careerId !== e));
    setCareers(careers.filter((prev) => prev.careerId !== e));
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
                onClick={(e) => {
                  e.preventDefault();
                  setIsCareer(!isCareer);
                }}
              >
                {career.career}
              </button>

              <AiOutlineDown
                className="AiOutlineDown"
                onClick={(e) => {
                  e.preventDefault();
                  setIsCareer(!isCareer);
                }}
              />
            </div>
            {isCareer ? (
              <ul className="Careerlists">
                {careerLists.map((el) => (
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
          ? crew.map((el) => (
              <Crew key={el.careerId}>
                <div>
                  {el.career} : {el.careerTotalRecruit}명
                </div>
                <button
                  crew={crew}
                  onClick={() => onDeleteHandler(el.careerId)}
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
