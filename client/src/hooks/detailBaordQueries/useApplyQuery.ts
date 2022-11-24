import { getApply } from "../../apis/detailBoardApis/detailBoard";
import { useQuery } from "@tanstack/react-query";

const useApplyQuery = (boardId?: string) => {
  const { data: applyList } = useQuery(
    ["getApply", boardId],
    () => getApply(boardId),
    { select: data => data.board }
  );

  return { applyList };
};

export default useApplyQuery;
