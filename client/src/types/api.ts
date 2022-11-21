export type Comments = {
  boardId: number;
  content: {
    nickname: string;
    content: string;
    groupNumber: number;
    groupSeq?: string;
    createdAt: string;
    modifiedAt: string;
    groupDepth: boolean;
  }[];
};
