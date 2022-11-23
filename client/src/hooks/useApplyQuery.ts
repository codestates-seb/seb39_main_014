import { getApply } from "./../api/boardDetailInformation";
import { useQuery } from "@tanstack/react-query";

const useApplyQuery = (boardId: number) => {
  const { data: applyList } = useQuery(
    ["getApply", boardId],
    () => getApply(boardId),
    { select: data => data.board }
  );

  return { applyList };
};

export default useApplyQuery;
