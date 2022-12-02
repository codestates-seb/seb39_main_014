import { useRef, useState, useEffect, MutableRefObject } from "react";
import { useNavigate } from "react-router";
import { GoX } from "react-icons/go";
import { AiOutlineDown } from "react-icons/ai";

import * as S from "./styled";
import {
  careerLists,
  levelLists,
  stackLists,
} from "../../constants/createBoardData";

import { useOutsideClick } from "../../hooks/useOutsideClick";

import { getLocalStorage } from "../../utils/storage";
import { getMypageInfo } from "../../apis/myPageApis/myPageApi";
import { TechStack } from "../../types/mypage";

import WithDrawal from "../../components/feature/myPage/withDrawal/WithDrawal";
import UserBoard from "../../components/feature/myPage/userBoard/UserBoard";
import { SuccessModal } from "../../components/shared/modal/Modal";

function MyPage() {
  const [loading, setLoading] = useState(false);
  const token = getLocalStorage("token");
  const navigate = useNavigate();

  const [career, setCareer] = useState({
    name: "웹 프론트엔드",
    level: "초보",
  });
  const [isCareer, setIsCareer] = useState(false);
  const outSection = useRef() as MutableRefObject<HTMLDivElement>;

  const [nickname, setNickname] = useState<string>("");

  const [techStack, setTechStack] = useState<TechStack[]>([]);
  const [newStackList, setNewStackList] = useState(stackLists);
  const [istechStackList, setIsTechStackList] = useState(false);
  const stackRef = useRef(0);
  const newStackRef = useRef(27);

  const [search, setSearch] = useState("");

  const careerClickRef = useRef() as MutableRefObject<HTMLDivElement>;
  const stackClickRef = useRef() as MutableRefObject<HTMLDivElement>;

  const getMypage = () => {
    getMypageInfo().then(res => {
      setLoading(true);
      setNickname(res.nickname);
      setTechStack(res.techStack.map(el => ({ name: el.name, id: el.name })));
      res.career[0].name &&
        setCareer({
          name: res.career[0].name,
          level: res.career[0].level,
        });
      setLoading(false);
    });
  };
  useEffect(() => {
    getMypage();
    if (!token) {
      SuccessModal("로그인이 필요합니다.").then(res => {
        if (res.isConfirmed) {
          navigate("/board");
        }
      });
    }
  }, [token, navigate]);

  useOutsideClick(careerClickRef, setIsCareer);
  useOutsideClick(stackClickRef, setIsTechStackList);

  const searchStack = newStackList.filter(prev => {
    if (search === "") {
      return prev;
    } else return prev.stack.toLowerCase().includes(search.toLowerCase());
  });

  if (loading) return null;
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
              defaultValue={nickname}
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
            <div className="Activity">0점</div>
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
              />
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
          <UserBoard />
          <WithDrawal
            nickname={nickname}
            techStack={techStack}
            career={career}
          />
        </S.Content>
      </S.ContentWrapper>
    </S.MypageContainer>
  );
}

export default MyPage;
