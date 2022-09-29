import React, { useRef, useState } from "react";
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

function MyPage() {
  const [career, setCareer] = useState({
    name: "웹 프론트엔드",
    level: "초보",
  });
  const [isCareer, setIsCareer] = useState(false);
  const outSection = useRef();

  const [nickname, setNickname] = useState("아무개");

  const [activeScore, setActiveScore] = useState(0);

  const [techStack, setTechStack] = useState([]);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [istechStackList, setIsTechStackList] = useState(false);
  const stackRef = useRef(0);
  const newStackRef = useRef(27);

  const [search, setSearch] = useState("");

  const searchStack = newStackList.filter((prev) => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

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
              defaultValue={nickname}
              onChange={(e) => setNickname(e.target.value)}
            />
            <div
              className="Career"
              ref={outSection}
              onClick={(e) => {
                if (outSection.current === e.target) {
                  setIsCareer(!career);
                }
              }}
            >
              <p onClick={() => setIsCareer(!isCareer)}>
                {career.name} / {career.level}
              </p>
              {isCareer ? (
                <div className="Career-level-lists">
                  <ul className="Career-list">
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
                <ul className="Stacklist">
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
              <div className="Checkboard">
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div className="Checkboard">
                <input type="checkbox" />
                <div>스터디 하면서 프로젝트까지 같이 하실분</div>
              </div>
              <div className="Select-all">
                <div>
                  <input type="checkbox" />
                  <div>전체 선택</div>
                </div>
                <button>삭제</button>
              </div>
              <div className="Modification">
                <button>완료</button>
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
