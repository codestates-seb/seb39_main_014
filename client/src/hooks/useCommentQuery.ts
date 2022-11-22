import { useQuery } from "@tanstack/react-query";
import { getComments } from "../api/boardComment";

const useCommentQuery = (boardId: number) => {
  const { data: commentLists } = useQuery(
    ["getComments", boardId],
    () => getComments(boardId),
    { select: data => data.content }
  );
  return { commentLists };
};

export default useCommentQuery;
