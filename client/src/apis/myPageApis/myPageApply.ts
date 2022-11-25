import { Apply, List } from "./../../types/mypage";
import { httpMethod, API_PATH } from "../common";
import requester from "../requester";

export const getMypageApply = async () => {
  const {
    mypage: { mypage },
    apply,
  } = API_PATH;

  const { payload } = await requester<Apply>({
    method: httpMethod.GET,
    url: `${mypage}${apply}`,
  });
  return payload;
};

export const deleteMypageApply = async (applyList: List[]) => {
  const {
    mypage: { mypage },
    apply,
  } = API_PATH;

  const { payload } = await requester<Apply>({
    method: httpMethod.DELETE,
    url: `${mypage}${apply}`,
    data: applyList,
  });
  return payload;
};
