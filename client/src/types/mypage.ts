export type List = {
  boardId: number;
  title: string;
};

export type TechStack = {
  name: string;
  id: string | number;
};

export type Mypage = {
  activeScore: number;
  career: { name: string; level: string }[];
  nickname: string;
  techStack: { name: string; imageUri?: string | null }[];
};

export type Bookmark = {
  bookmarkList: List[];
};

export type Apply = {
  boardApplyList: List[];
};

export type Check = {
  id?: number;
  title?: string;
  state: List[];
  setState: React.Dispatch<React.SetStateAction<List[]>>;
};
