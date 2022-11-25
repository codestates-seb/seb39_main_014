import { httpMethod, API_PATH } from "../common";
import requester from "../requester";
import { Bookmark, List } from "../../types/mypage";

export const getMypageBookmark = async () => {
  const {
    mypage: { mypage },
    bookmark,
  } = API_PATH;

  const { payload } = await requester<Bookmark>({
    method: httpMethod.GET,
    url: `${mypage}${bookmark}`,
  });
  return payload;
};

export const deleteMypageBookmark = async (bookmarkList: List[]) => {
  const {
    mypage: { mypage },
    bookmark,
  } = API_PATH;

  const { payload } = await requester<Bookmark>({
    method: httpMethod.DELETE,
    url: `${mypage}${bookmark}`,
    data: bookmarkList,
  });
  return payload;
};
