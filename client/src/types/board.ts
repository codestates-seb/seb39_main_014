interface Career {
  careerCurrentRecruit: number;
  careerName: string;
  careerTotalRecruit: number;
}
interface TechStack {
  techStackName: string;
}

export interface Datas {
  bookmarkCount: number;
  commentAmount: number;
  contact: string;
  contents: string;
  createdAt: string;
  currentRecruit: number;
  deleted: boolean;
  deletedAt: null;
  id: number;
  location: string;
  modifiedAt: string;
  nickName: string;
  period: string;
  recruitCategory: string;
  recruitDone: boolean;
  recruitMethod: string;
  title: string;
  totalRecruit: number;
  viewCount: number;
  boardCareers: Array<Career>;
  techStackNames: Array<TechStack>;
  isBookmarked?: string;
}
