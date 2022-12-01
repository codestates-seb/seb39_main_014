import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import _ from "lodash";

import * as S from "./styled";
import { getBoard } from "../../../../apis/detailBoardApis/detailBoard";
import { periodLists } from "../../../../constants/createBoardData";
import DropDownButton from "../../../shared/dropDown/dropDownButton/DropDownButton";

export default function RecruitmentPeriod() {
  const { boardId } = useParams();

  const periodClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [loading, setLoading] = useState(false);
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
          setPeriodValue({
            period: _.filter(periodLists, { period: res.board.period })[0]
              .period,
            value: _.filter(periodLists, { period: res.board.period })[0].value,
          });
        })
        .then(res => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [boardId]);

  const handlePeriodClick = (e: { period: string; value: string }) => {
    setIsPeriod(!isPeriod);
    setPeriodValue(prev => {
      return { ...prev, period: e.period, value: e.value };
    });
  };

  if (loading) return null;
  return (
    <S.Period ref={periodClickRef}>
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
    </S.Period>
  );
}
