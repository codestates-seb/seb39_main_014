import requester from "./requester";
import { httpMethod, API_PATH } from "./common";
import { BoardDetail } from "../types/api";

export const getBoard = async (boardId?: string) => {
  const {
    board: { board },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.GET,
    url: `${board}/${boardId}`,
  });
  return payload;
};

type BoardId = { boardId?: string };
export const deleteBoard = async ({ boardId }: BoardId) => {
  const {
    board: { board },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.DELETE,
    url: `${board}/${boardId}`,
  });
  return payload;
};

export const postBookmark = async ({ boardId }: BoardId) => {
  const {
    board: { board, bookmark },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.POST,
    url: `${board}/${boardId}${bookmark}`,
  });
  return payload;
};

type ApplyList = { board: [{ careerName: string; nickName: string }] };

export const getApply = async (boardId?: string) => {
  const {
    board: { board, apply },
  } = API_PATH;

  const { payload } = await requester<ApplyList>({
    method: httpMethod.GET,
    url: `${board}/${boardId}${apply}`,
  });
  return payload;
};

type PostApply = { boardId?: string; careerId: number };

export const postApply = async ({ boardId, careerId }: PostApply) => {
  const {
    board: { board, apply },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.POST,
    url: `${board}/${boardId}${apply}`,
    data: { careerId },
  });
  return payload;
};

export const deleteApply = async ({ boardId }: BoardId) => {
  const {
    board: { board, apply },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.DELETE,
    url: `${board}/${boardId}${apply}`,
  });
  return payload;
};
