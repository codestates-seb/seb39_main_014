import { httpMethod, API_PATH } from "../common";
import requester from "../requester";
import { Mypage } from "../../types/mypage";

export const getMypageInfo = async () => {
  const {
    mypage: { mypage, info },
  } = API_PATH;

  const { payload } = await requester<Mypage>({
    method: httpMethod.GET,
    url: `${mypage}${info}`,
  });
  return payload;
};

export const postMypageInfo = async (postApplyForm: Mypage) => {
  const {
    mypage: { mypage, info },
  } = API_PATH;

  const { payload } = await requester<Mypage>({
    method: httpMethod.POST,
    url: `${mypage}${info}`,
    data: postApplyForm,
  });
  return payload;
};

export const deleteMypageInfo = async (
  bookmarkList: [{ boardId: number; title: string }]
) => {
  const {
    mypage: { mypage, info },
  } = API_PATH;

  const { payload } = await requester<Mypage>({
    method: httpMethod.DELETE,
    url: `${mypage}${info}`,
    data: bookmarkList,
  });
  return payload;
};

export const deleteUser = async () => {
  const {
    mypage: { mypage },
  } = API_PATH;

  const { payload } = await requester<Mypage>({
    method: httpMethod.DELETE,
    url: `${mypage}/delete`,
  });
  return payload;
};
