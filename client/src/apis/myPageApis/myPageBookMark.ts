import { httpMethod, API_PATH } from "../common";
import requester from "../requester";
import { Bookmark, List } from "types/mypage";

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
type BookmarkList = { bookmarkList: List[] };
export const deleteMypageBookmark = async ({ bookmarkList }: BookmarkList) => {
  const {
    mypage: { mypage },
    bookmark,
  } = API_PATH;

  const { payload } = await requester<Bookmark>({
    method: httpMethod.DELETE,
    url: `${mypage}${bookmark}`,
    data: { bookmarkList },
  });
  return payload;
};
