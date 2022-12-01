import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import _ from "lodash";

import { getBoard } from "../../../../apis/detailBoardApis/detailBoard";
import { regionLists } from "../../../../constants/createBoardData";
import * as S from "./styled";
import DropDownButton from "../../../shared/dropDown/dropDownButton/DropDownButton";

export default function RecruitmentType() {
  const { boardId } = useParams();
  const [loading, setLoading] = useState(false);

  const [recruitCategory, setRecruitCategory] = useState("STUDY");
  const [recruitMethod, setRecruitMethod] = useState("ONLINE");

  const [isLocation, setIsLocation] = useState(false);
  const [location, setLocation] = useState({
    region: "미정",
    value: "NO_CHOICE",
  });

  const recuirtClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;

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
  }, [boardId]);

  if (loading) return null;
  return (
    <S.Container>
      <S.Category>
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
      </S.Category>
      <S.Meeting>
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
      </S.Meeting>
    </S.Container>
  );
}
