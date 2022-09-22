import React, { useState, useRef } from "react";
import { careerLists } from "./WriteFormData";
import { Career, Crew } from "./styled";
function CareerForm() {
  const [career, setCareer] = useState("웹 프론트엔드");
  const [count, setCount] = useState(1);
  const [crew, setCrew] = useState([]);

  const idCount = useRef(0);

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
    setCrew([...crew, { id: idCount.current, career: career, count: count }]);
    setCount(1);
    setCareer("웹 프론트엔드");
    idCount.current = idCount.current + 1;
  };

  const onDeleteHandler = (e) => {
    setCrew(crew.filter((prev) => prev.id !== e));
  };

  return (
    <Career>
      <label htmlFor="categorization">모집 분류 / 인원</label>
      <div className="Bundle">
        <select onChange={(e) => setCareer(e.target.value)} value={career}>
          {careerLists.map((el) => (
            <option key={el.id}>{el.career}</option>
          ))}
        </select>
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
        {/* <button className="Delete">삭제</button> */}
      </div>
      {crew
        ? crew.map((el) => (
            <Crew key={el.id}>
              <div>
                {el.career} : {el.count}명
              </div>
              <button crew={crew} onClick={() => onDeleteHandler(el.id)}>
                삭제
              </button>
            </Crew>
          ))
        : null}
    </Career>
  );
}

export default CareerForm;
