export type Comments = {
  content: [
    {
      nickname: string;
      content: string;
      groupNumber: number;
      groupSeq: string;
      createdAt: string;
      modifiedAt: string;
      groupDepth: boolean;
    }
  ];
};

export type BoardDetail = {
  board: {
    id: number;
    boardCareers: [
      {
        careerName: string;
        careerCurrentRecruit: number;
        careerTotalRecruit: number;
      }
    ];
    bookmarkCount: number;
    commentAmount: number;
    contact: string;
    contents: string;
    createdAt?: string | undefined;
    modifiedAt: string;
    currentRecruit: number;
    deleted: boolean;
    deletedAt?: string;
    location: string;
    nickName: string;
    period: string;
    recruitCategory: string;
    recruitDone: boolean;
    recruitMethod: string;
    techStackNames: [{ techStackName: string }];
    title: string;
    totalRecruit: number;
    viewCount: number;
  };
};
