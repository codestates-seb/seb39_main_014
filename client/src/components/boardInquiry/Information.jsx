import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { AiOutlineHeart } from "react-icons/ai";
import {
  InformationContainer,
  UserInfo,
  BoardInfo,
} from "../../pages/boardInquiryPage/styled";
import axios from "axios";

function Information() {
  const { boardId } = useParams();
  const BOARD_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`;
  const [boardInfo, setBoardInfo] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dday, setDday] = useState(null);
  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  const user = localStorage.getItem("nickname");
  console.log(boardId);
  useEffect(() => {
    setLoading(true);
    axios
      .get(BOARD_URL)
      .then((res) => {
        console.log(res.data);
        setBoardInfo([res.data.board]);
        setCreatedAt(res.data.board.createdAt.slice(0, 10));

        const createdAtDay = new Date(res.data.board.createdAt);
        const today = new Date();
        const dayGap = today.getTime() - createdAtDay.getTime();
        const result = Math.ceil(dayGap / (1000 * 60 * 60 * 24));
        const deadline = 30 - Number(result);
        setBookmarkCount(res.data.board.bookmarkCount);
        setDday(deadline);

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
        console.log(res);
        if (res.data.userBookmarks.includes(boardId)) {
          setIsBookmark(true);
        } else setIsBookmark(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
        console.log(res);
        setIsBookmark(!isBookmark);
        isBookmark
          ? setBookmarkCount(bookmarkCount - 1)
          : setBookmarkCount(bookmarkCount + 1);
      })
      .catch((err) => console.log(err));
  };

  if (loading) return null;
  return (
    <InformationContainer>
      <UserInfo>
        <div className="User-info">
          <img src="/assets/logo/only_logo.svg" alt="profile" />
          <div>{boardInfo[0].nickName}</div>
          <div>{createdAt}</div>
        </div>
        <div className="Board-info">
          <div className="Bookmark">
            <AiOutlineHeart
              className="AiOutlineHeart"
              onClick={handleBookmarkClick}
            />
            <span>{bookmarkCount}</span>
          </div>
          <span className="Recruitment-classification">
            {boardInfo[0].recruitCategory}
          </span>
          <button>{dday > 0 ? `D - ${dday}` : `모집 마감`}</button>
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
  );
}

export default Information;
