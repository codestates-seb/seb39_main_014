import { useQuery } from "@tanstack/react-query";
import { getBoard } from "@apis/detailBoardApis/detailBoard";

const useDetailQuery = (boardId?: string) => {
  const { data: detailInfo } = useQuery(
    ["getBoard", boardId],
    () => getBoard(boardId),
    { select: data => data.board }
  );
  return { detailInfo };
};

export default useDetailQuery;
