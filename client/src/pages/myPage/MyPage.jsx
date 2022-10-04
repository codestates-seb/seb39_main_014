import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MypageContainer,
  ContentWrapper,
  Content,
  UserInfoWrapper,
  Profile,
  UserBoardWrapper,
  UserBoard,
} from "./styled";
import {
  careerLists,
  levelLists,
  stackLists,
} from "../../pages/writeForm/WriteFormData";
import { GoX } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";
import axios from "axios";

export const levelData = [
  { level: "초보", value: "BEGINNER" },
  { level: "중수", value: "INTERMEDIATE" },
  { level: "고수", value: "MASTER" },
];

function MyPage() {
  const navigate = useNavigate();
  const MYPAGE_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/my-page`;
  const [career, setCareer] = useState({
    name: "웹 프론트엔드",
    level: "초보",
  });
  const [isCareer, setIsCareer] = useState(false);
  const outSection = useRef();
  const [info, setInfo] = useState([]);

  const [nickname, setNickname] = useState("");
  const [activeScore, setActiveScore] = useState(0);

  const [techStack, setTechStack] = useState([]);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [istechStackList, setIsTechStackList] = useState(false);
  const stackRef = useRef(0);
  const newStackRef = useRef(27);

  const [search, setSearch] = useState("");

  const [bookmarkList, setBookmarkList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [checkLists, setCheckLists] = useState([]);

  const careerClickRef = useRef();
  const stackClickRef = useRef();

  /** 유저정보 get 요청 함수 */
  const getMypage = () => {
    axios
      .get(`${MYPAGE_URL}/info`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setInfo(res.data);
        setNickname(res.data.nickname);
        setTechStack(
          res.data.techStack.map((el) => ({ name: el.name, id: el.name }))
        );
        setCareer({
          name: res.data.career[0].name,
          level: res.data.career[0].level,
        });
      })
      .catch((err) => console.log(err));
  };

  /** 북마크 get 요청 함수 */
  const getBookmark = () => {
    axios
      .get(`${MYPAGE_URL}/bookmark`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res);
        setBookmarkList(res.data.bookmarkList);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    setLoading(true);
    getMypage();
    getBookmark();
    setLoading(false);
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

  useOutsideClick(careerClickRef, setIsCareer);
  useOutsideClick(stackClickRef, setIsTechStackList);

  /** 스택 검색 필터 */
  const searchStack = newStackList.filter((prev) => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  const handleMypageSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/my-page/info`,
        {
          nickname: nickname,
          activeScore: 0,
          techStack: techStack.map((el) => ({ name: el.name })),
          career: [
            {
              name: career.name,
              level: levelData.filter((prev) => prev.level === career.level)[0]
                .value,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => navigate("/"))
      .catch((err) => console.log(err));
  };

  const handleSingleCheck = (checked, id, title) => {
    if (checked) {
      setCheckLists([...checkLists, { boardId: id, title: title }]);
    } else {
      setCheckLists(checkLists.filter((el) => el !== id));
    }
  };

  const handleAllCheck = (checked) => {
    if (checked) {
      const idArr = [];

      bookmarkList.forEach((el) =>
        idArr.push({ boardId: el.boardId, title: el.title })
      );
      setCheckLists(idArr);
    } else {
      setCheckLists([]);
    }
  };

  const handleBookmarkListDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`${MYPAGE_URL}/bookmark`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: { bookmarkList: checkLists },
      })
      .then((res) => {
        setBookmarkList(res.data.bookmarkList);
        setCheckLists([]);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return null;

  return (
    <MypageContainer>
      <ContentWrapper>
        <Content>
          <UserInfoWrapper>
            <Profile>
              <img alt="profile" src="/assets/logo/only_logo.svg" />
            </Profile>
            <label className="Nickname-label">닉네임</label>
            <input
              className="Nickname"
              type="text"
              defaultValue={info.nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <div
              className="Career"
              ref={outSection}
              onClick={(e) => {
                if (outSection.current === e.target) {
                  setIsCareer(!isCareer);
                }
              }}
            >
              <p onClick={() => setIsCareer(!isCareer)}>
                {career.name} / {career.level}
              </p>
              {isCareer ? (
                <div className="Career-level-lists">
                  <ul className="Career-list" ref={careerClickRef}>
                    {careerLists.map((el) => (
                      <li
                        key={el.id}
                        onClick={() =>
                          setCareer((prev) => {
                            return { ...prev, name: el.career };
                          })
                        }
                      >
                        {el.career}
                      </li>
                    ))}
                  </ul>
                  <ul className="Level-list">
                    {levelLists.map((el) => (
                      <li
                        key={el.id}
                        onClick={() =>
                          setCareer((prev) => {
                            return { ...prev, level: el.level };
                          })
                        }
                      >
                        {el.level}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
            <label className="Activity-label">활동 점수</label>
            <div className="Activity">{activeScore}점</div>
            <label className="Stack-label">기술 스택</label>
            <div
              className="Registration-box"
              onClick={(e) => {
                e.preventDefault();
                setIsTechStackList(!istechStackList);
              }}
            >
              <input
                className="Registration"
                type="text"
                placeholder="기술 스택을 등록하세요!"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <AiOutlineDown
                className="AiOutlineDown"
                onClick={(e) => {
                  e.preventDefault();
                  setIsTechStackList(!istechStackList);
                }}
              />{" "}
              {istechStackList ? (
                <ul className="Stacklist" ref={stackClickRef}>
                  {searchStack.map((el) => (
                    <li
                      key={el.id}
                      onClick={(e) => {
                        setTechStack([
                          ...techStack,
                          { name: el.stack, id: stackRef.current },
                        ]);
                        stackRef.current = stackRef.current + 1;
                        setNewStackList(
                          newStackList.filter((prev) => prev.stack !== el.stack)
                        );
                      }}
                    >
                      {el.stack}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>

            <div className="Stack">
              {techStack
                ? techStack.map((el) => (
                    <div key={el.id}>
                      <img alt={el.name} src={`/assets/stack/${el.name}.svg`} />
                      <GoX
                        className="Gox"
                        onClick={() => {
                          setTechStack(
                            techStack.filter((prev) => prev.id !== el.id)
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
                  ))
                : null}
            </div>
          </UserInfoWrapper>
          <UserBoardWrapper>
            <UserBoard>
              <div className="Myboard">
                <div className="Bookmark">북마크한 게시글</div>
                <div>지원한 게시글</div>
              </div>
              {bookmarkList
                ? bookmarkList.map((el) => (
                    <div className="Checkboard" key={el.boardId}>
                      <input
                        type="checkbox"
                        onChange={(e) =>
                          handleSingleCheck(
                            e.target.checked,
                            el.boardId,
                            el.title
                          )
                        }
                        checked={
                          checkLists
                            .map((el) => el.boardId)
                            .includes(el.boardId)
                            ? true
                            : false
                        }
                      />
                      <div onClick={() => navigate(`/board/${el.boardId}`)}>
                        {el.title}
                      </div>
                    </div>
                  ))
                : null}
              <div className="Select-all">
                <div>
                  <input
                    type="checkbox"
                    onChange={(e) => handleAllCheck(e.target.checked)}
                    checked={
                      checkLists.length === bookmarkList.length ? true : false
                    }
                  />
                  <div>전체 선택</div>
                </div>
                <button onClick={handleBookmarkListDelete}>삭제</button>
              </div>
              <div className="Modification">
                <button onClick={handleMypageSubmit}>완료</button>
                <button className="Withdrawal">회원 탈퇴</button>
              </div>
            </UserBoard>
          </UserBoardWrapper>
        </Content>
      </ContentWrapper>
    </MypageContainer>
  );
}

export default MyPage;
