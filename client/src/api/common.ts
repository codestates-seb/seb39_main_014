export const httpMethod = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
} as const;

export const ACCESS_TOKEN = "ACCESS_TOKEN";

export const NICK_NAME = "NICK_NAME";

export const API_PATH = {
  auth: {
    signup: "/signup",
    login: "/login",
    mypage: "mypage",
  },
  board: {
    board: "/board",
    write: "/write",
    comment: "/comment",
    bookmark: "/bookmark",
    apply: "/apply",
  },
};
