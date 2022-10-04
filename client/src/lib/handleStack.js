const stacks = [
  "JavaScript",
  "TypeScript",
  "React",
  "Vue",
  "Svelte",
  "Next",
  "Graphql",
  "Java",
  "Spring",
  "Node",
  "Nest",
  "Go",
  "Kotlin",
  "Express",
  "MySQL",
  "MongoDB",
  "Python",
  "Php",
  "GraphQL",
  "Flutter",
  "Swift",
  "ReactNative",
  "Unity",
  "Aws",
  "Docker",
];

export const handleStack = (datas, stackFilter, setFilterDatas) => {
  if (stackFilter.length === 0) {
    const allStackList = datas
      .map((e) => e.techStackNames)
      .map((el) => el.map((el) => el.techStackName))
      .map((elm) => stacks.some((r) => elm.indexOf(r) >= 0));

    const foo = () => {
      const result = [];
      allStackList.map((el, idx) => {
        if (el === true) {
          result.push(datas[idx]);
        }
      });
      setFilterDatas(result);
    };

    foo();
    return;
  }

  const isIncludeList = datas
    .map((e) => e.techStackNames)
    .map((el) => el.map((el) => el.techStackName))
    .map((elm) => stackFilter.some((r) => elm.indexOf(r) >= 0));

  //

  const foo = () => {
    const result = [];
    isIncludeList.map((el, idx) => {
      if (el === true) {
        result.push(datas[idx]);
      }
    });
    setFilterDatas(result);
  };

  foo();
};
