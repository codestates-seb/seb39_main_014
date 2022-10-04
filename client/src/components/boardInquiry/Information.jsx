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
} from "../../pages/boardInquiryPage/styled";
import Swal from "sweetalert2";
import axios from "axios";

function Information() {
  const { boardId } = useParams();
  const navigate = useNavigate();
  /** 로컬스토리지에서 로그인한 유저 nickname */
  const user = localStorage.getItem("nickname");
  const BOARD_URL = `${process.env.REACT_APP_API_URL}/api/v1/board/${boardId}`;

  const [boardInfo, setBoardInfo] = useState([]);
  const [createdAt, setCreatedAt] = useState("");

  const [loading, setLoading] = useState(true);
  const [dday, setDday] = useState(null);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get(BOARD_URL)
      .then((res) => {
        setBoardInfo([res.data.board]);
        setCreatedAt(res.data.board.createdAt.slice(0, 10));

        const createdAtDay = new Date(res.data.board.createdAt);
        const today = new Date();
        const dayGap = today.getTime() - createdAtDay.getTime();
        const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
        const deadline = 30 - Number(result);
        setDday(deadline);
        setBookmarkCount(res.data.board.bookmarkCount);

        setLoading(false);
      })
      .catch((err) => console.log(err));
    axios
      .get(`${BOARD_URL}/bookmark`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        if (res.data.userBookmarks.includes(Number(boardId))) {
          setIsBookmark(true);
        } else setIsBookmark(false);
      })
      .catch((err) => console.log(err));
  }, []);

  /** 북마크 추가 */
  const handleBookmarkClick = (e) => {
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
      .then((res) => {
        setIsBookmark(!isBookmark);
        isBookmark
          ? setBookmarkCount(bookmarkCount - 1)
          : setBookmarkCount(bookmarkCount + 1);
      })
      .catch((err) => console.log(err));
  };

  /** 게시글 삭제 */
  const handleFormDelete = (e) => {
    e.preventDefault();
    Swal.fire({
      title: "게시글을 삭제 하시겠습니까?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#69D06F",
      cancelButtonColor: "#FF6464",
      confirmButtonText: "삭제",
      cancelButtonText: "취소",
    }).then((res) => {
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
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/board");
          }
        });
      }
    });
  };

  if (loading) return null;
  return (
    <>
      <Title>
        <Buttons>
          <BiArrowBack className="BiArrowBack" onClick={() => navigate(-1)} />
          {user === boardInfo.nickName ? (
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
            <span className="Recruitment-classification">
              {boardInfo[0].recruitCategory}
            </span>
            <button>{dday > 0 ? `D-${dday}` : `모집 마감`}</button>
          </div>
        </UserInfo>
        <BoardInfo>
          <li>
            <span className="Subject">모임 기간</span>
            <span className="Span-box">{boardInfo[0].period}</span>
          </li>
          <li>
            <span className="Subject">진행 방식</span>
            <span className="Span-box">{boardInfo[0].recruitMethod}</span>
            <span className="Span-box">{boardInfo[0].location}</span>
          </li>
          <li className="Using-stack">
            <span className="Subject">사용 언어</span>

            {boardInfo[0].techStackNames.map((el) => (
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
            <span className="Contact-method">{boardInfo[0].contact}</span>
          </li>
          <li className="Applicants">
            <span className="Subject">모집 인원</span>
            <ul className="Applicants-list">
              {boardInfo
                ? boardInfo[0].boardCareers.map((el) => (
                    <li key={el.careerTotalRecruit}>
                      <div> {el.careerName}</div>
                      <div>0/{el.careerTotalRecruit}</div>
                      <div>
                        <span className="Apply-box">지원</span>
                      </div>
                    </li>
                  ))
                : null}
            </ul>
          </li>
        </BoardInfo>
      </InformationContainer>
      <Body dangerouslySetInnerHTML={{ __html: boardInfo[0].contents }}></Body>
    </>
  );
}

export default Information;
