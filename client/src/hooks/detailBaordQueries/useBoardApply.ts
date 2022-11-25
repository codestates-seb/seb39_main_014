import { getApply } from "../../apis/detailBoardApis/detailBoard";
import { useQuery } from "@tanstack/react-query";

const useBoardApply = (boardId?: string) => {
  const { data: applyList, isLoading } = useQuery(
    ["getApply", boardId],
    () => getApply(boardId),
    { select: data => data.board }
  );

  return { applyList, isLoading };
};

export default useBoardApply;
