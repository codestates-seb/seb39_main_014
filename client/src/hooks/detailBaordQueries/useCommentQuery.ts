import { useQuery } from "@tanstack/react-query";
import { getComments } from "@apis/detailBoardApis/commentBoard";

const useCommentQuery = (boardId?: string) => {
  const { data: commentLists } = useQuery(
    ["getComments", boardId],
    () => getComments(boardId),
    { select: data => data.content }
  );
  return { commentLists };
};

export default useCommentQuery;
