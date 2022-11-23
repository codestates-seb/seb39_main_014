import { httpMehthod, API_PATH } from "./common";
import requester from "./requester";
import { Comments } from "../types/api";

export const getComments = async (boardId?: string) => {
  const {
    board: { board, comment },
  } = API_PATH;

  const { payload } = await requester<Comments>({
    method: httpMehthod.GET,
    url: `${board}/${boardId}${comment}`,
  });
  return payload;
};
type Post = { boardId?: string; content: string };
export const postComments = async ({ boardId, content }: Post) => {
  const {
    board: { board, comment },
  } = API_PATH;

  const { payload } = await requester<Comments>({
    method: httpMehthod.POST,
    url: `${board}/${boardId}${comment}`,
    data: { content },
  });
  return payload;
};

type Update = { boardId?: string; groupNumber: number; content: string };
export const updateComments = async ({
  boardId,
  groupNumber,
  content,
}: Update) => {
  const {
    board: { board, comment },
  } = API_PATH;

  const { payload } = await requester<Comments>({
    method: httpMehthod.PATCH,
    url: `${board}/${boardId}${comment}`,
    data: { groupNumber, content },
  });
  return payload;
};

type Delete = { boardId?: string; groupNumber: number };
export const deleteComments = async ({ boardId, groupNumber }: Delete) => {
  const {
    board: { board, comment },
  } = API_PATH;

  const { payload } = await requester<Comments>({
    method: httpMehthod.DELETE,
    url: `${board}/${boardId}${comment}`,
    data: { groupNumber },
  });
  return payload;
};
