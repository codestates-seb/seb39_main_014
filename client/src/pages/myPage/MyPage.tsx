import React, { useRef, useState, useEffect, MutableRefObject } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import {
  careerLists,
  levelLists,
  stackLists,
} from "../../constants/WriteFormData";
import { GoX } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import { useOutsideClick } from "../../hooks/useOutsideClick";
import {
  ConfirmModal,
  SuccessModal,
} from "../../components/shared/modal/Modal";
import { useMypage, useMypageBookmark } from "../../hooks/myPageQueries";
import {
  deleteMypageApply,
  getMypageApply,
} from "../../apis/myPageApis/myPageApply";
import { deleteUser, postMypageInfo } from "../../apis/myPageApis/myPageApi";
import { Check, List, Mypage, TechStack } from "../../types/mypage";
import { deleteMypageBookmark } from "../../apis/myPageApis/myPageBookMark";

export const levelData = [
  { level: "초보", value: "BEGINNER" },
  { level: "중수", value: "INTERMEDIATE" },
  { level: "고수", value: "MASTER" },
];

function MyPage() {
  const navigate = useNavigate();
  const [career, setCareer] = useState({
    name: "웹 프론트엔드",
    level: "초보",
  });
  const { mypageInfo, isLoading } = useMypage();
  const { mypageBookmark, bookmarkLoading } = useMypageBookmark();
  const [isCareer, setIsCareer] = useState(false);
  const outSection = useRef();

  const [nickname, setNickname] = useState<string | undefined>("");

  const [techStack, setTechStack] = useState<TechStack[]>([]);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [istechStackList, setIsTechStackList] = useState(false);
  const stackRef = useRef(0);
  const newStackRef = useRef(27);

  const [search, setSearch] = useState("");

  const [isTab, setIsTab] = useState(true);
  const [bookmarkList, setBookmarkList] = useState<List[]>([]);
  const [applyList, setApplyList] = useState<List[]>([]);

  const [bookmarkCheckLists, setBookmarkCheckLists] = useState([]);
  const [applyCheckLists, setApplyCheckLists] = useState([]);

  const careerClickRef = useRef() as MutableRefObject<HTMLDivElement>;
  const stackClickRef = useRef() as MutableRefObject<HTMLDivElement>;

  /** 유저정보 get 요청 함수 */
  const getMypage = () => {
    setNickname(mypageInfo.nickname);
    setTechStack(
      mypageInfo.techStack.map(el => ({ name: el.name, id: el.name }))
    );
    setCareer({
      name: mypageInfo.career[0].name,
      level: mypageInfo.career[0].level,
    });
  };

  /** 북마크 get 요청 함수 */
  const getBookmark = () => {
    setBookmarkList(mypageBookmark.bookmarkList);
  };

  /** 지원한 게시글 get 요청 함수 */
  const getApply = () => {
    getMypageApply()
      .then(res => {
        setApplyList(res.boardApplyList);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getMypage();
    getBookmark();
    getApply();
  }, []);

  /** 외부 클릭시 창 사라지는 기능 */
  useOutsideClick(careerClickRef, setIsCareer);
  useOutsideClick(stackClickRef, setIsTechStackList);

  /** 스택 검색 필터 */
  const searchStack = newStackList.filter(prev => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  const postApplyForm: Mypage = {
    nickname: nickname,
    activeScore: 0,
    techStack: techStack.map(el => ({ name: el.name })),
    career: [
      {
        name: career.name,
        level: levelData.filter(prev => prev.level === career.level)[0].value,
      },
    ],
  };

  /** 마이페이지 변경 완료 */
  const handleMypageSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ConfirmModal("정보 수정을 완료 하시겠습니까?").then(result => {
      if (result.isConfirmed) {
        postMypageInfo(postApplyForm).catch(err => console.log(err));
        SuccessModal("수정 완료!").then(res => {
          if (res.isConfirmed) {
            navigate("/board");
          }
        });
      }
    });
  };

  /** 북마크,지원 체크 리스트 */
  const handleSingleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    title: string,
    state: List[],
    setState: React.Dispatch<React.SetStateAction<List[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      setState([...state, { boardId: id, title: title }]);
    } else {
      setState(state.filter(el => el.boardId !== id));
    }
  };

  const handleAllCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: List[],
    setState: React.Dispatch<React.SetStateAction<List[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      const idArr: List[] = [];
      state.forEach(el => idArr.push({ boardId: el.boardId, title: el.title }));
      setState(idArr);
    } else {
      setState([]);
    }
  };

  /** 북마크 리스트 삭제 */
  const handleBookmarkListDelete = () => {
    deleteMypageBookmark(bookmarkCheckLists)
      .then(res => {
        setBookmarkList(res.bookmarkList);
        setBookmarkCheckLists([]);
      })
      .catch(err => console.log(err));
  };

  /** 지원 리스트 삭제 */
  const handleApplyListDelete = () => {
    deleteMypageApply(applyList)
      .then(res => {
        setApplyList(res.boardApplyList);
        setApplyCheckLists([]);
        getApply();
      })
      .catch(err => console.log(err));
  };

  /** 회원 탈퇴 */
  const handleWithdrawalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ConfirmModal("회원 탈퇴 하시겠습니까?").then(res => {
      if (res.isConfirmed) {
        deleteUser().catch(err => console.log(err));
        SuccessModal("탈퇴 완료!").then(res => navigate("/board"));
      }
    });
  };

  if (isLoading || bookmarkLoading) return <div>로딩중!</div>;

  return (
    <S.MypageContainer>
      <S.ContentWrapper>
        <S.Content>
          <S.UserInfoWrapper>
            <S.Profile>
              <img alt="profile" src="/assets/logo/only_logo.svg" />
            </S.Profile>
            <label className="Nickname-label">닉네임</label>
            <input
              className="Nickname"
              type="text"
              defaultValue={mypageInfo?.nickname}
              onChange={e => setNickname(e.target.value)}
            />
            <div
              className="Career"
              ref={outSection}
              onClick={e => {
                if (outSection.current === e.target) {
                  setIsCareer(!isCareer);
                }
              }}
            >
              <p onClick={() => setIsCareer(!isCareer)}>
                {career.name} / {career.level}
              </p>
              {isCareer && (
                <div className="Career-level-lists" ref={careerClickRef}>
                  <ul className="Career-list">
                    {careerLists.map(el => (
                      <li
                        key={el.id}
                        onClick={() =>
                          setCareer(prev => {
                            return { ...prev, name: el.career };
                          })
                        }
                      >
                        {el.career}
                      </li>
                    ))}
                  </ul>
                  <ul className="Level-list">
                    {levelLists.map(el => (
                      <li
                        key={el.id}
                        onClick={() =>
                          setCareer(prev => {
                            return { ...prev, level: el.level };
                          })
                        }
                      >
                        {el.level}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <label className="Activity-label">활동 점수</label>
            <div className="Activity">{mypageInfo.activeScore}점</div>
            <label className="Stack-label">기술 스택</label>
            <div
              className="Registration-box"
              onClick={e => {
                e.preventDefault();
                setIsTechStackList(!istechStackList);
              }}
              ref={stackClickRef}
            >
              <input
                className="Registration"
                type="text"
                placeholder="기술 스택을 등록하세요!"
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
              <AiOutlineDown
                className="AiOutlineDown"
                onClick={e => {
                  e.preventDefault();
                  setIsTechStackList(!istechStackList);
                }}
              />{" "}
              {istechStackList && (
                <ul className="Stacklist">
                  {searchStack.map(el => (
                    <li
                      key={el.id}
                      onClick={e => {
                        setTechStack([
                          ...techStack,
                          { name: el.stack, id: stackRef.current },
                        ]);
                        stackRef.current = stackRef.current + 1;
                        setNewStackList(
                          newStackList.filter(prev => prev.stack !== el.stack)
                        );
                      }}
                    >
                      {el.stack}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="Stack">
              {techStack &&
                techStack.map(el => (
                  <div key={el.id}>
                    <img alt={el.name} src={`/assets/stack/${el.name}.svg`} />
                    <GoX
                      className="Gox"
                      onClick={() => {
                        setTechStack(
                          techStack.filter(prev => prev.id !== el.id)
                        );
                        setNewStackList([
                          ...newStackList,
                          {
                            id: newStackRef.current,
                            stack: el.name,
                          },
                        ]);
                        newStackRef.current = newStackRef.current + 1;
                      }}
                    />
                  </div>
                ))}
            </div>
          </S.UserInfoWrapper>
          <S.UserBoardWrapper>
            <S.UserBoard>
              <div className="Myboard">
                <div
                  className={isTab ? "Bookmark" : ""}
                  onClick={() => setIsTab(true)}
                >
                  북마크한 게시글
                </div>
                <div
                  className={isTab ? "" : "Bookmark"}
                  onClick={() => setIsTab(false)}
                >
                  지원한 게시글
                </div>
              </div>
              {isTab ? (
                bookmarkList ? (
                  <>
                    {bookmarkList.map(el => (
                      <div className="Checkboard" key={el.boardId}>
                        <input
                          type="checkbox"
                          onChange={e =>
                            handleSingleCheck(
                              e,
                              el.boardId,
                              el.title,
                              bookmarkCheckLists,
                              setBookmarkCheckLists
                            )
                          }
                          checked={
                            bookmarkCheckLists
                              .map(el => el.boardId)
                              .includes(el.boardId)
                              ? true
                              : false
                          }
                        />
                        <div onClick={() => navigate(`/board/${el.boardId}`)}>
                          {el.title}
                        </div>
                      </div>
                    ))}
                    <div className="Select-all">
                      <div>
                        <input
                          type="checkbox"
                          onChange={e =>
                            handleAllCheck(
                              e,
                              bookmarkList,
                              setBookmarkCheckLists
                            )
                          }
                          checked={
                            bookmarkCheckLists.length === bookmarkList.length
                              ? true
                              : false
                          }
                        />
                        <div>전체 선택</div>
                      </div>
                      <button onClick={handleBookmarkListDelete}>삭제</button>
                    </div>
                  </>
                ) : null
              ) : (
                applyList && (
                  <>
                    {applyList.map(el => (
                      <div className="Checkboard" key={el.boardId}>
                        <input
                          type="checkbox"
                          onChange={e =>
                            handleSingleCheck(
                              e,
                              el.boardId,
                              el.title,
                              applyCheckLists,
                              setApplyCheckLists
                            )
                          }
                          checked={
                            applyCheckLists
                              .map(el => el.boardId)
                              .includes(el.boardId)
                              ? true
                              : false
                          }
                        />
                        <div onClick={() => navigate(`/board/${el.boardId}`)}>
                          {el.title}
                        </div>
                      </div>
                    ))}
                    <div className="Select-all">
                      <div>
                        <input
                          type="checkbox"
                          onChange={e =>
                            handleAllCheck(e, applyList, setApplyCheckLists)
                          }
                          checked={
                            applyCheckLists.length === applyList.length
                              ? true
                              : false
                          }
                        />
                        <div>전체 선택</div>
                      </div>
                      <button onClick={handleApplyListDelete}>삭제</button>
                    </div>
                  </>
                )
              )}

              <div className="Modification">
                <button onClick={handleMypageSubmit}>완료</button>
                <button className="Withdrawal" onClick={handleWithdrawalDelete}>
                  회원 탈퇴
                </button>
              </div>
            </S.UserBoard>
          </S.UserBoardWrapper>
        </S.Content>
      </S.ContentWrapper>
    </S.MypageContainer>
  );
}

export default MyPage;
