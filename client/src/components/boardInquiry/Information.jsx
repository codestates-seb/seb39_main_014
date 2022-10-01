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
  const [boardInfo, setBoardInfo] = useState([]);
  const [createdAt, setCreatedAt] = useState("");
  const [comment, setComment] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`
      )
      .then((res) => {
        setBoardInfo([res.data.board]);
        setCreatedAt(res.data.board.createdAt.slice(0, 10));
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

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
            <AiOutlineHeart className="AiOutlineHeart" />
            <span>10</span>
          </div>
          <button>{boardInfo[0].recruitCategory}</button>
          <button>모집 완료</button>
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
        <li>
          <span className="Subject">사용 언어</span>
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
                  <li>
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
