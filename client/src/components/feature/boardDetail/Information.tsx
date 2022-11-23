import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BiArrowBack } from "react-icons/bi";

import * as S from "../../../pages/boardDetailPage/styled";
import { careerLists } from "../../../constants/WriteFormData";
import { ConfirmModal, SuccessModal } from "../../shared/modal/Modal";
import useDetailQuery from "../../../hooks/useDetailQuery";
import useDeadline from "../../../hooks/useDeadline";
import useBoardMutation from "../../../hooks/useBoradMutation";
import {
  deleteApply,
  deleteBoard,
  postApply,
  postBookmark,
} from "../../../api/boardDetailInformation";
import { getLocalStorage } from "../../../utils/storage";
import useApplyQuery from "../../../hooks/useApplyQuery";

function Information() {
  const { boardId } = useParams();
  const navigate = useNavigate();

  const user = getLocalStorage("nickname");

  const [bookmarkCount, setBookmarkCount] = useState(0);
  const [isBookmark, setIsBookmark] = useState(false);

  const { detailInfo } = useDetailQuery(Number(boardId));
  const { applyList } = useApplyQuery(Number(boardId));
  const deleteBoardMutate = useBoardMutation(deleteBoard, "getInformation");

  const postBookmarkMutate = useBoardMutation(postBookmark, "getInformation");
  const postApplyMutate = useBoardMutation(postApply, "getInformation");
  const deleteApplyMutate = useBoardMutation(deleteApply, "getInformation");
  const deadline = useDeadline(detailInfo?.createdAt);

  /** 북마크 추가 관련 수정 필요 */
  const handleBookmarkClick = () => {
    postBookmarkMutate.mutate({ boardId: Number(boardId) });
    setIsBookmark(!isBookmark);
    isBookmark
      ? setBookmarkCount(bookmarkCount - 1)
      : setBookmarkCount(bookmarkCount + 1);
  };

  const handleFormDelete = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ConfirmModal("게시글을 삭제 하시겠습니까?").then(res => {
      if (res.isConfirmed) {
        deleteBoardMutate.mutate({ boardId: Number(boardId) });
        SuccessModal("삭제 완료!");
        window.location.replace("/board");
      }
    });
  };

  const handleApplyClick = (
    e: React.MouseEvent<HTMLButtonElement>,
    careerName: string
  ) => {
    const event = e.target as HTMLElement;
    if (event.innerText === "지원") {
      ConfirmModal("지원 하시겠습니까?").then(res => {
        if (res.isConfirmed) {
          if (!user) {
            SuccessModal("로그인이 필요합니다.");
          } else {
            postApplyMutate.mutate({
              boardId: Number(boardId),
              careerId: careerLists.filter(
                prev => prev.career === careerName
              )[0].id,
            });
            SuccessModal("지원 완료!");
          }
        }
      });
    } else if (event.innerText === "지원 취소") {
      ConfirmModal("지원 취소 하시겠습니까?").then(res => {
        if (res.isConfirmed) {
          deleteApplyMutate.mutate({ boardId: Number(boardId) });
          SuccessModal("지원을 취소 했습니다.");
        }
      });
    }
  };

  if (!detailInfo) return null;
  return (
    <>
      <S.Title>
        <BiArrowBack className="BiArrowBack" onClick={() => navigate(-1)} />
        <S.Buttons>
          <div className="Recruitment-classification">
            <span>{detailInfo.recruitCategory}</span>
            <button>{deadline ? `D-${deadline}` : `모집 마감`}</button>
          </div>
          {user === detailInfo.nickName ? (
            <div className="Patch-delete">
              <button onClick={() => navigate(`/board/${boardId}/modify`)}>
                수정
              </button>
              <button onClick={handleFormDelete}>삭제</button>
            </div>
          ) : null}
        </S.Buttons>
        <p>{detailInfo.title}</p>
      </S.Title>
      <S.InformationContainer>
        <S.UserInfo>
          <div className="User-info">
            <img src="/assets/logo/only_logo.svg" alt="profile" />
            <div>{detailInfo.nickName}</div>
            <div>{detailInfo.createdAt?.slice(0, 10)}</div>
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
              <span>{detailInfo.bookmarkCount}</span>
            </div>
          </div>
        </S.UserInfo>
        <S.BoardInfo>
          <li>
            <span className="Subject">모임 기간</span>
            <span className="Span-box">{detailInfo.period}</span>
          </li>
          <li>
            <span className="Subject">진행 방식</span>
            <span className="Span-box">{detailInfo.recruitMethod}</span>
            <span className="Span-box">{detailInfo.location}</span>
          </li>
          <li className="Using-stack">
            <span className="Subject">사용 언어</span>

            {detailInfo.techStackNames.map(el => (
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
            <span className="Contact-method">{detailInfo?.contact}</span>
          </li>
          <li className="Applicants">
            <span className="Subject">모집 인원</span>
            <ul className="Applicants-list">
              {/**key 값 변경해야됨 */}
              {detailInfo.boardCareers &&
                detailInfo.boardCareers.map(el => (
                  <li key={el.careerName}>
                    <div> {el.careerName}</div>
                    <div>
                      {el.careerCurrentRecruit}/{el.careerTotalRecruit}
                    </div>
                    <div>
                      <button
                        className="Apply-box"
                        disabled={
                          el.careerCurrentRecruit === el.careerTotalRecruit &&
                          user &&
                          !applyList?.map(el => el.nickName).includes(user)
                            ? true
                            : false
                        }
                        onClick={e => handleApplyClick(e, el.careerName)}
                      >
                        {el.careerCurrentRecruit === el.careerTotalRecruit &&
                        user
                          ? applyList?.map(el => el.nickName).includes(user)
                            ? applyList.filter(el => user === el.nickName)[0]
                                .careerName
                              ? "지원 취소"
                              : "마감"
                            : "마감"
                          : "지원"}
                      </button>
                    </div>
                  </li>
                ))}
            </ul>
          </li>
        </S.BoardInfo>
      </S.InformationContainer>
      <S.Body dangerouslySetInnerHTML={{ __html: detailInfo.contents }} />
    </>
  );
}

export default Information;
