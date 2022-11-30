import { getMypageBookmark } from "../../apis/myPageApis/myPageBookMark";
import { useQuery } from "@tanstack/react-query";

const useMypageBookmark = () => {
  const { data: mypageBookmark, isLoading: bookmarkLoading } = useQuery(
    ["getMypageBookmark"],
    () => getMypageBookmark()
  );
  return { mypageBookmark, bookmarkLoading };
};

export default useMypageBookmark;
