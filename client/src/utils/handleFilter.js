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

export const handleFilter = (
  datas,
  stackFilter,
  setFilterDatas,
  isDone,
  group,
  setIsNotExist
) => {
  const isIncludeList = datas
    .map(e => e.techStackNames)
    .map(el => el.map(el => el.techStackName))
    .map(elm => stackFilter.some(r => elm.indexOf(r) >= 0));

  if (group === "전체") {
    const makeFilterdList = () => {
      const stackResult = [];
      if (stackFilter.length === 0) {
        const doneResult = datas.filter(el => el.recruitDone === isDone);
        setFilterDatas(doneResult);
      } else {
        isIncludeList.map((el, idx) => {
          if (el === true) {
            stackResult.push(datas[idx]);
          }
        });
        const doneResult = stackResult.filter(el => el.recruitDone === isDone);

        setFilterDatas(doneResult);
        if (doneResult.length !== 0) {
        }
      }
    };

    makeFilterdList();
  } else if (stackFilter.length === 0) {
    const makeFilterdList = () => {
      const doneResult = datas.filter(el => el.recruitDone === isDone);
      const groupResult = doneResult.filter(el => el.recruitCategory === group);
      setFilterDatas(groupResult);
      if (groupResult.length !== 0) {
      }
    };
    makeFilterdList();
  } else if (stackFilter.length !== 0 && group !== "전체") {
    const isIncludeList = datas
      .map(e => e.techStackNames)
      .map(el => el.map(el => el.techStackName))
      .map(elm => stackFilter.some(r => elm.indexOf(r) >= 0));

    const makeFilterdList = () => {
      const stackResult = [];
      isIncludeList.map((el, idx) => {
        if (el === true) {
          stackResult.push(datas[idx]);
        }
      });

      const doneResult = stackResult.filter(el => el.recruitDone === isDone);
      const groupResult = doneResult.filter(el => el.recruitCategory === group);
      setFilterDatas(groupResult);
      if (groupResult.length !== 0) {
      }
    };

    makeFilterdList();
  }
};
