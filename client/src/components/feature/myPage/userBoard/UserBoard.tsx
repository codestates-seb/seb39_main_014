import { useState } from "react";
import { useNavigate } from "react-router";

import { useMypageBookmark, useMypageApply } from "@hooks/myPageQueries";
import { deleteMypageApply } from "@apis/myPageApis/myPageApply";

import { deleteMypageBookmark } from "@apis/myPageApis/myPageBookMark";
import { List } from "types/mypage";
import * as S from "./styled";
import useBoardMutation from "@hooks/useBoradMutation";

const UserBoard = () => {
  const [isTab, setIsTab] = useState(true);

  const [bookmarkCheckLists, setBookmarkCheckLists] = useState<List[]>([]);
  const [applyCheckLists, setApplyCheckLists] = useState<List[]>([]);

  const { mypageApply, applyLoading } = useMypageApply();
  const { mypageBookmark, bookmarkLoading } = useMypageBookmark();

  const applyMutate = useBoardMutation(deleteMypageApply, "getMypageApply");
  const bookmarkMutate = useBoardMutation(
    deleteMypageBookmark,
    "getMypageBookmark"
  );

  const navigate = useNavigate();

  const handleSingleCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    id: number,
    title: string,
    state: List[],
    setState: React.Dispatch<React.SetStateAction<List[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      setState([...state, { boardId: id, title: title }]);
    } else {
      setState(state.filter(el => el.boardId !== id));
    }
  };

  const handleAllCheck = (
    e: React.ChangeEvent<HTMLInputElement>,
    state: List[],
    setState: React.Dispatch<React.SetStateAction<List[]>>
  ) => {
    const event = e.target as HTMLInputElement;
    if (event.checked) {
      const idArr: List[] = [];
      state.forEach(el => idArr.push({ boardId: el.boardId, title: el.title }));
      setState(idArr);
    } else {
      setState([]);
    }
  };

  const handleBookmarkListDelete = () => {
    bookmarkMutate.mutate({ bookmarkList: bookmarkCheckLists });
    setBookmarkCheckLists([]);
  };

  const handleApplyListDelete = () => {
    applyMutate.mutate({ applyList: applyCheckLists });
    setApplyCheckLists([]);
  };

  if (bookmarkLoading || applyLoading) return <div>로딩중!</div>;
  return (
    <S.UserBoardWrapper>
      <S.UserBoard>
        <div className="Myboard">
          <div
            className={isTab ? "Bookmark" : ""}
            onClick={() => setIsTab(true)}
          >
            북마크한 게시글
          </div>
          <div
            className={isTab ? "" : "Bookmark"}
            onClick={() => setIsTab(false)}
          >
            지원한 게시글
          </div>
        </div>
        {isTab
          ? mypageBookmark && (
              <>
                {mypageBookmark.bookmarkList.map(el => (
                  <div className="Checkboard" key={el.boardId}>
                    <input
                      type="checkbox"
                      onChange={e =>
                        handleSingleCheck(
                          e,
                          el.boardId,
                          el.title,
                          bookmarkCheckLists,
                          setBookmarkCheckLists
                        )
                      }
                      checked={
                        bookmarkCheckLists
                          .map(el => el.boardId)
                          .includes(el.boardId)
                          ? true
                          : false
                      }
                    />
                    <div onClick={() => navigate(`/board/${el.boardId}`)}>
                      {el.title}
                    </div>
                  </div>
                ))}
                <div className="Select-all">
                  <div>
                    <input
                      type="checkbox"
                      onChange={e =>
                        handleAllCheck(
                          e,
                          mypageBookmark.bookmarkList,
                          setBookmarkCheckLists
                        )
                      }
                      checked={
                        bookmarkCheckLists.length ===
                        mypageBookmark.bookmarkList.length
                          ? true
                          : false
                      }
                    />
                    <div>전체 선택</div>
                  </div>
                  <button onClick={handleBookmarkListDelete}>삭제</button>
                </div>
              </>
            )
          : mypageApply && (
              <>
                {mypageApply.boardApplyList.map(el => (
                  <div className="Checkboard" key={el.boardId}>
                    <input
                      type="checkbox"
                      onChange={e =>
                        handleSingleCheck(
                          e,
                          el.boardId,
                          el.title,
                          applyCheckLists,
                          setApplyCheckLists
                        )
                      }
                      checked={
                        applyCheckLists
                          .map(el => el.boardId)
                          .includes(el.boardId)
                          ? true
                          : false
                      }
                    />
                    <div onClick={() => navigate(`/board/${el.boardId}`)}>
                      {el.title}
                    </div>
                  </div>
                ))}
                <div className="Select-all">
                  <div>
                    <input
                      type="checkbox"
                      onChange={e =>
                        handleAllCheck(
                          e,
                          mypageApply.boardApplyList,
                          setApplyCheckLists
                        )
                      }
                      checked={
                        applyCheckLists.length ===
                        mypageApply.boardApplyList.length
                          ? true
                          : false
                      }
                    />
                    <div>전체 선택</div>
                  </div>
                  <button onClick={handleApplyListDelete}>삭제</button>
                </div>
              </>
            )}
      </S.UserBoard>
    </S.UserBoardWrapper>
  );
};

export default UserBoard;
