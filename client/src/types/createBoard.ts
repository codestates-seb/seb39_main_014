∂export interface Object {
  object: {
    recruitCategory: string;
    recruitMethod: string;
    location: string;
    boardTechStacks: TechStack[];
    period: string;
  };
}

export interface NewObj {
  newObject: {
    recruitCategory: string;
    recruitMethod: string;
    location: string;
    boardTechStacks: TechStack[];
    period: string;
    boardCareers: CareersState[];
  };
}

export type Submit = {
  recruitCategory: string;
  recruitMethod: string;
  location: string;
  boardTechStacks: TechStack[];
  period: string;
  boardCareers: CareersState[];
  contact: string;
  title: string;
  contents: string;
};

export type CrewState = {
  id: string | number;
  career: string;
  careerTotalRecruit: number;
  careerId: number;
};

export type CareersState = {
  careerId: number;
  careerTotalRecruit: number;
};

export type CareerState = {
  career: string;
  value: number;
};

export type SelectedStack = {
  id: string | number;
  techStackName: number;
};

export type TechStack = {
  techStackId: number;
};
