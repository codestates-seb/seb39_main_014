import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import axios from "axios";
import Swal from "sweetalert2";

import Information from "../../components/boardInquiry/Information";
import Comment from "../../components/boardInquiry/Comment";
import {
  InquiryContainer,
  ContentContainer,
  ContentWrapper,
  Title,
  Buttons,
  Body,
} from "./styled";

function BoardInquiryPage() {
  const { boardId } = useParams();
  const BOARD_URL = `http://ec2-13-125-239-56.ap-northeast-2.compute.amazonaws.com:8080/api/v1/board/${boardId}`;

  const navigate = useNavigate();

  const [boardInfo, setBoardInfo] = useState([]);

  /** 로컬스토리지에서 로그인한 유저 nickname */
  const user = localStorage.getItem("nickname");

  useEffect(() => {
    axios
      .get(BOARD_URL)
      .then((res) => setBoardInfo(res.data.board))
      .catch((err) => console.log(err));
  }, []);

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

  return (
    <InquiryContainer>
      <ContentContainer>
        <ContentWrapper>
          <Title>
            <Buttons>
              <BiArrowBack
                className="BiArrowBack"
                onClick={() => navigate(-1)}
              />
              {user === boardInfo.nickName ? (
                <div className="Patch-delete">
                  <button onClick={() => navigate(`/board/${boardId}/modify`)}>
                    수정
                  </button>
                  <button onClick={handleFormDelete}>삭제</button>
                </div>
              ) : null}
            </Buttons>
            <p>{boardInfo.title}</p>
          </Title>
          <Information />
          <Body dangerouslySetInnerHTML={{ __html: boardInfo.contents }}></Body>
          <Comment />
        </ContentWrapper>
      </ContentContainer>
    </InquiryContainer>
  );
}

export default BoardInquiryPage;
