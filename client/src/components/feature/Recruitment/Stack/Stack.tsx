import React, { useState, useRef, useEffect } from "react";
import { useParams } from "react-router";
import { AiOutlineDown } from "react-icons/ai";
import { GoX } from "react-icons/go";

import * as S from "./styled";
import { SelectedStack, TechStack } from "../../../../types/createBoard";
import {
  stackLists,
  stackNumbers,
  stackReverse,
} from "../../../../constants/createBoardData";
import { getBoard } from "../../../../apis/detailBoardApis/detailBoard";

export default function Stack() {
  const { boardId } = useParams();

  const [search, setSearch] = useState("");
  const [isStack, setIsStack] = useState(false);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [loading, setLoading] = useState(false);

  const [techStacks, setTechStacks] = useState<TechStack[]>([]);
  const [selectedStackList, setSelectedStackList] = useState<SelectedStack[]>(
    []
  );

  const stackClickRef = useRef() as React.MutableRefObject<HTMLDivElement>;
  const stackRef = useRef(0);
  const newStackRef = useRef(9);

  useEffect(() => {
    setLoading(true);
    if (boardId) {
      getBoard(boardId)
        .then(res => {
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
        })
        .then(res => {
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, [boardId, newStackList]);

  const searchStack = newStackList.filter(prev => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

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

  if (loading) return null;
  return (
    <S.RecruitmentStack ref={stackClickRef}>
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
                src={`/assets/stack/${stackReverse[0][el.techStackName]}.svg`}
                alt={`${el.techStackName}`}
              />
              <span onClick={() => handleStackListRemove(el.id)}>
                <GoX className="Gox" />
              </span>
            </div>
          ))}
        </span>
      )}
    </S.RecruitmentStack>
  );
}
