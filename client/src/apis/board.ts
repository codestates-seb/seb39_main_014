import { API_PATH, httpMethod } from "./common";
import requester from "./requester";
import { Submit } from "types/createBoard";
import { BoardDetail } from "types/api";

export const postBoard = async (submitForm: Submit) => {
  const {
    board: { board, write },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.POST,
    url: `${board}${write}`,
    data: submitForm,
  });
  return payload;
};

export const updateBoard = async (boardId: string, submitForm: Submit) => {
  const {
    board: { board },
  } = API_PATH;

  const { payload } = await requester<BoardDetail>({
    method: httpMethod.PATCH,
    url: `${board}/${boardId}`,
    data: submitForm,
  });
  return payload;
};
