export const stackLists = [
  // { id: 0, stack: "- 프로젝트 사용 스택 -" },
  { id: 1, stack: "Java" },
  { id: 2, stack: "JavaScript" },
  { id: 3, stack: "React" },
  { id: 4, stack: "Node" },
  { id: 5, stack: "Next" },
  { id: 6, stack: "Express" },
  { id: 7, stack: "Vue" },
  { id: 8, stack: "TypeScript" },
  { id: 9, stack: "AWS" },
  { id: 10, stack: "Docker" },
  { id: 11, stack: "Unity" },
  { id: 12, stack: "Swift" },
  { id: 13, stack: "Svelte" },
  { id: 14, stack: "Spring" },
  { id: 15, stack: "ReactNative" },
  { id: 16, stack: "Python" },
  { id: 17, stack: "Php" },
  { id: 18, stack: "Nest" },
  { id: 19, stack: "MySQL" },
  { id: 20, stack: "MongoDB" },
  { id: 21, stack: "Kotlin" },
  { id: 22, stack: "GraphQl" },
  { id: 23, stack: "Go" },
  { id: 24, stack: "Flutter" },
  { id: 25, stack: "Firebase" },
  { id: 26, stack: "Figma" },
];

interface StackNum {
  [key: string]: number;
}

export const stackNumbers: StackNum[] = [
  {
    Java: 1,
    JavaScript: 2,
    React: 3,
    Node: 4,
    Next: 5,
    Express: 6,
    Vue: 7,
    TypeScript: 8,
    AWS: 9,
    Docker: 10,
    Unity: 11,
    Swift: 12,
    Svelte: 13,
    Spring: 14,
    ReactNative: 15,
    Python: 16,
    Php: 17,
    Nest: 18,
    MySQL: 19,
    MongoDB: 20,
    Kotlin: 21,
    GraphQl: 22,
    Go: 23,
    Flutter: 24,
    Firebase: 25,
    Figma: 26,
  },
];

interface StackRev {
  [key: number]: string;
}

export const stackReverse: StackRev[] = [
  {
    1: "Java",
    2: "JavaScript",
    3: "React",
    4: "Node",
    5: "Next",
    6: "Express",
    7: "Vue",
    8: "TypeScript",
    9: "AWS",
    10: "Docker",
    11: "Unity",
    12: "Swift",
    13: "Svelte",
    14: "Spring",
    15: "ReactNative",
    16: "Python",
    17: "Php",
    18: "Nest",
    19: "MySQL",
    20: "MongoDB",
    21: "Kotlin",
    22: "GraphQl",
    23: "Go",
    24: "Flutter",
    25: "Firebase",
    26: "Figma",
  },
];

export const regionLists = [
  { id: 0, region: "지역 무관", value: "NO_CHOICE" },
  { id: 1, region: "서울", value: "SEOUL" },
  { id: 2, region: "인천", value: "INCHEON" },
  { id: 3, region: "경기", value: "GYEONGGI" },
  { id: 4, region: "강원", value: "GANGWON" },
  { id: 5, region: "경상", value: "GYEONGSANG" },
  { id: 6, region: "전라", value: "JEOLLA" },
  { id: 7, region: "충청", value: "CHUNGCHEONG" },
  { id: 8, region: "제주", value: "JEJU" },
];

interface Period {
  id: number;
  period: string;
  value: string;
}

export const periodLists: Period[] = [
  { id: 1, period: "미정", value: "NO_CHOICE" },
  { id: 2, period: "1개월", value: "ONE_MONTH" },
  { id: 3, period: "2개월", value: "TWO_MONTH" },
  { id: 4, period: "3개월", value: "THREE_MONTH" },
  { id: 5, period: "4개월", value: "FOUR_MONTH" },
  { id: 6, period: "5개월", value: "FIVE_MONTH" },
  { id: 7, period: "6개월", value: "SIX_MONTH" },
  { id: 8, period: "장기", value: "LONG_TERM" },
];

export const careerLists = [
  { id: 1, career: "웹 프론트엔드", value: 1 },
  { id: 2, career: "웹 백엔드", value: 2 },
  { id: 3, career: "웹 디자이너", value: 3 },
  { id: 4, career: "모바일", value: 4 },
  { id: 5, career: "기타", value: 5 },
];

export const levelLists = [
  { id: 1, level: "초보" },
  { id: 2, level: "중수" },
  { id: 3, level: "고수" },
];
