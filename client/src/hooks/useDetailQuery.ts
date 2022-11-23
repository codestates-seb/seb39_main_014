import { useQuery } from "@tanstack/react-query";
import { getInformation } from "../api/boardDetailInformation";

const useDetailQuery = (boardId: number) => {
  const { data: detailInfo } = useQuery(
    ["getInformation", boardId],
    () => getInformation(boardId),
    { select: data => data.board }
  );
  return { detailInfo };
};

export default useDetailQuery;
