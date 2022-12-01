import { getMypageApply } from "../../apis/myPageApis/myPageApply";
import { useQuery } from "@tanstack/react-query";

const useMypageApply = () => {
  const { data: mypageApply, isLoading: applyLoading } = useQuery(
    ["getMypageApply"],
    () => getMypageApply()
  );
  return { mypageApply, applyLoading };
};

export default useMypageApply;
