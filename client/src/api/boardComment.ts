import { httpMehthod, API_PATH } from "./common";
import requester from "./requester";
import { Comments } from "../types/api";

export const getComments = async (boardId: number) => {
  const {
    board: { board, comment },
  } = API_PATH;

  const { payload } = await requester<Comments>({
    method: httpMehthod.GET,
    url: `${board}/${boardId}${comment}`,
  });
  return payload;
};

export const postComments = async (boardId: number, content: string) => {
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

export const updateComments = async (
  boardId: number,
  groupNumber: number,
  content: string
) => {
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

export const deleteComments = async (boardId: number, groupNumber: number) => {
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
