import { useNavigate } from "react-router";

import {
  deleteUser,
  postMypageInfo,
} from "../../../../apis/myPageApis/myPageApi";
import { ConfirmModal, SuccessModal } from "../../../shared/modal/Modal";
import { Mypage, TechStack } from "../../../../types/mypage";
import { levelData } from "../../../../constants/myPageData";
import * as S from "./styled";

type Props = {
  nickname: string;
  techStack: TechStack[];
  career: { name: string; level: string };
};

export default function WithDrawal({ ...props }: Props) {
  const navigate = useNavigate();

  const postApplyForm: Mypage = {
    nickname: props.nickname,
    activeScore: 0,
    techStack: props.techStack.map(el => ({ name: el.name })),
    career: [
      {
        name: props.career.name,
        level: levelData?.filter(prev => prev.level === props?.career?.level)[0]
          .value,
      },
    ],
  };

  const handleMypageSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ConfirmModal("정보 수정을 완료 하시겠습니까?").then(result => {
      if (result.isConfirmed) {
        postMypageInfo(postApplyForm);
        SuccessModal("수정 완료!").then(res => {
          if (res.isConfirmed) {
            navigate("/board");
          }
        });
      }
    });
  };

  const handleWithdrawalDelete = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    ConfirmModal("회원 탈퇴 하시겠습니까?").then(res => {
      if (res.isConfirmed) {
        deleteUser();
        SuccessModal("탈퇴 완료!").then(res => navigate("/board"));
      }
    });
  };

  return (
    <S.Container>
      <S.Button onClick={handleMypageSubmit}>완료</S.Button>
      <S.Button className="Withdrawal" onClick={handleWithdrawalDelete}>
        회원 탈퇴
      </S.Button>
    </S.Container>
  );
}
