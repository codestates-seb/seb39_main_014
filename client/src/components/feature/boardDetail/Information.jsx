import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";
import {
  Title,
  Buttons,
  InformationContainer,
  UserInfo,
  BoardInfo,
  Body,
} from "../../../pages/boardDetailPage/styled";
import { careerLists } from "../../../constants/WriteFormData";
import Swal from "sweetalert2";
import axios from "axios";

function Information() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  /** 로컬스토리지에서 로그인한 유저 nickname */
  const user = localStorage.getItem("nickname");
  const BOARD_URL = `${process.env.REACT_APP_API_URL}/board/${boardId}`;

  const [boardInfo, setBoardInfo] = useState([]);
  const [createdAt, setCreatedAt] = useState("");

  const [loading, setLoading] = useState(true);
  const [dday, setDday] = useState(null);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  const [applicantList, setApplicantList] = useState([]);
  //지원하기 눌렀을때 -> 지원 취소
  //인원 다 찼을 때 -> 마감
  const getApply = () => {
    axios
      .get(`${BOARD_URL}/apply`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(res => {
        setApplicantList(res.data.board);
      });
  };

  const getBoard = () => {
    axios
      .get(BOARD_URL)
      .then(res => {
        setBoardInfo([res.data.board]);
        setCreatedAt(res.data.board.createdAt.slice(0, 10));

        const createdAtDay = new Date(res.data.board.createdAt);
        const today = new Date();
        const dayGap = today.getTime() - createdAtDay.getTime();
        const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
        const deadline = 30 - Number(result);
        setDday(deadline);
        setBookmarkCount(res.data.board.bookmarkCount);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(BOARD_URL)
      .then(res => {
        setBoardInfo([res.data.board]);
        setCreatedAt(res.data.board.createdAt.slice(0, 10));

        const createdAtDay = new Date(res.data.board.createdAt);
        const today = new Date();
        const dayGap = today.getTime() - createdAtDay.getTime();
        const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
        const deadline = 30 - Number(result);
        setDday(deadline);
        setBookmarkCount(res.data.board.bookmarkCount);
      })
      .catch(err => console.log(err));

    axios
      .get(`${BOARD_URL}/apply`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(res => {
        setApplicantList(res.data.board);
      });

    axios
      .get(`${BOARD_URL}/bookmark`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then(res => {
        if (res.data.userBookmarks.includes(Number(boardId))) {
          setIsBookmark(true);
        } else setIsBookmark(false);
      })
      .catch(err => console.log(err));

    setLoading(false);
  }, []);

  /** 북마크 추가 */
  const handleBookmarkClick = e => {
    e.preventDefault();
    axios
      .post(
        `${BOARD_URL}/bookmark`,
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(res => {
        setIsBookmark(!isBookmark);
        isBookmark
          ? setBookmarkCount(bookmarkCount - 1)
          : setBookmarkCount(bookmarkCount + 1);
      })
      .catch(err => console.log(err));
  };

  /** 게시글 삭제 */
  const handleFormDelete = e => {
    e.preventDefault();
    Swal.fire({
      title: "게시글을 삭제 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#69D06F",
      cancelButtonColor: "#FF6464",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then(res => {
      if (res.isConfirmed) {
        axios.delete(BOARD_URL, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        Swal.fire({
          title: "삭제 완료!",
          icon: "success",
          confirmButtonColor: "#69D06F",
        }).then(res => {
          if (res.isConfirmed) {
            navigate("/board");
          }
        });
      }
    });
  };

  /** 지원 클릭 핸들러 */
  const handleApplyClick = (e, careerName) => {
    console.log(e.innerText);
    if (e.target.innerText === "지원") {
      Swal.fire({
        title: "지원 하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#69D06F",
        cancelButtonColor: "#FF6464",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(res => {
        if (res.isConfirmed) {
          if (!user) {
            Swal.fire({
              title: "로그인이 필요합니다.",
              icon: "warning",
              confirmButtonColor: "#69D06F",
            });
          } else {
            axios
              .post(
                `${BOARD_URL}/apply`,
                {
                  careerId: careerLists.filter(
                    prev => prev.career === careerName
                  )[0].id,
                },
                {
                  headers: {
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                  },
                }
              )
              .then(res => {})
              .catch(err => console.log(err));
            Swal.fire({
              title: "지원 완료!",
              icon: "success",
              confirmButtonColor: "#69D06F",
            }).then(res => {
              if (res.isConfirmed) {
                window.location.replace(`/board/${boardId}`);
              }
            });
          }
        }
      });
    } else if (e.target.innerText === "지원 취소") {
      Swal.fire({
        title: "지원을 취소 하시겠습니까?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#69D06F",
        cancelButtonColor: "#FF6464",
        confirmButtonText: "확인",
        cancelButtonText: "취소",
      }).then(res => {
        if (res.isConfirmed) {
          axios.delete(`${BOARD_URL}/apply`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          });
          Swal.fire({
            title: "지원을 취소 했습니다.",
            icon: "success",
            confirmButtonColor: "#69D06F",
          }).then(res => {
            if (res.isConfirmed) {
              window.location.replace(`/board/${boardId}`);
            }
          });
        }
      });
    }
  };

  if (boardInfo.length === 0) return null;
  return (
    <>
      <Title>
        <BiArrowBack className="BiArrowBack" onClick={() => navigate(-1)} />
        <Buttons>
          <div className="Recruitment-classification">
            <span>{boardInfo[0].recruitCategory}</span>
            <button>{dday > 0 ? `D-${dday}` : `모집 마감`}</button>
          </div>
          {user === boardInfo[0].nickName ? (
            <div className="Patch-delete">
              <button onClick={() => navigate(`/board/${boardId}/modify`)}>
                수정
              </button>
              <button onClick={handleFormDelete}>삭제</button>
            </div>
          ) : null}
        </Buttons>
        <p>{boardInfo[0].title}</p>
      </Title>
      <InformationContainer>
        <UserInfo>
          <div className="User-info">
            <img src="/assets/logo/only_logo.svg" alt="profile" />
            <div>{boardInfo[0].nickName}</div>
            <div>{createdAt}</div>
          </div>
          <div className="Board-info">
            <div className="Bookmark">
              {isBookmark ? (
                <AiFillHeart
                  className="AiOutlineHeart full"
                  onClick={handleBookmarkClick}
                />
              ) : (
                <AiOutlineHeart
                  className="AiOutlineHeart"
                  onClick={handleBookmarkClick}
                />
              )}
              <span>{bookmarkCount}</span>
            </div>
          </div>
        </UserInfo>
        <BoardInfo>
          <li>
            <span className="Subject">모임 기간</span>
            <span className="Span-box">{boardInfo[0].period}</span>
          </li>
          <li>
            <span className="Subject">진행 방식</span>
            <span className="Span-box">{boardInfo[0]?.recruitMethod}</span>
            <span className="Span-box">{boardInfo[0]?.location}</span>
          </li>
          <li className="Using-stack">
            <span className="Subject">사용 언어</span>

            {boardInfo[0].techStackNames.map(el => (
              <span key={el.techStackName} className="Stack">
                <img
                  src={`/assets/stack/${el.techStackName}.svg`}
                  alt={`${el.techStackName}`}
                />
              </span>
            ))}
          </li>
          <li>
            <span className="Subject">연락 방법</span>
            <span className="Contact-method">{boardInfo[0]?.contact}</span>
          </li>
          <li className="Applicants">
            <span className="Subject">모집 인원</span>
            <ul className="Applicants-list">
              {/**el.careerCurrentRecruit=== el.careerCurrentRecruit && user */}
              {boardInfo[0].boardCareers
                ? boardInfo[0].boardCareers.map(el => (
                    <li key={el.careerTotalRecruit}>
                      <div> {el.careerName}</div>
                      <div>
                        {el.careerCurrentRecruit}/{el.careerTotalRecruit}
                      </div>
                      <div>
                        <button
                          className="Apply-box"
                          disabled={
                            el.careerCurrentRecruit === el.careerTotalRecruit &&
                            applicantList.map(el => el.nickName).includes(!user)
                              ? true
                              : false
                          }
                          onClick={e => handleApplyClick(e, el.careerName)}
                        >
                          {applicantList.map(el => el.nickName).includes(user)
                            ? el.careerName ===
                              applicantList.filter(
                                el => user === el.nickName
                              )[0].careerName
                              ? "지원 취소"
                              : el.careerCurrentRecruit ===
                                el.careerTotalRecruit
                              ? "마감"
                              : "지원"
                            : "지원"}
                        </button>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        </BoardInfo>
      </InformationContainer>
      <Body dangerouslySetInnerHTML={{ __html: boardInfo[0].contents }} />
    </>
  );
}

export default Information;
