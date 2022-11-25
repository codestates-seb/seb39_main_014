import { getMypageInfo } from "../../apis/myPageApis/myPageApi";
import { useQuery } from "@tanstack/react-query";

const useMypage = () => {
  const { data: mypageInfo, isLoading } = useQuery(
    ["getMypage"],
    getMypageInfo
  );
  return { mypageInfo, isLoading };
};

export default useMypage;
