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
  group
) => {
  // 스텍 필터 기준으로 true, false
  const isIncludeList = datas
    .map((e) => e.techStackNames)
    .map((el) => el.map((el) => el.techStackName))
    .map((elm) => stackFilter.some((r) => elm.indexOf(r) >= 0));

  // 그룹이 전체일 경우
  if (group === "전체") {
    console.log("1번 실행 전체 선택됨");
    console.log(isDone);

    const makeFilterdList = () => {
      const stackResult = [];
      if (stackFilter.length === 0) {
        const doneResult = datas.filter((el) => el.recruitDone === isDone);
        console.log(doneResult);
        setFilterDatas(doneResult);
      } else {
        isIncludeList.map((el, idx) => {
          if (el === true) {
            stackResult.push(datas[idx]);
          }
        });
        const doneResult = stackResult.filter(
          (el) => el.recruitDone === isDone
        );

        setFilterDatas(doneResult);
      }
    };

    makeFilterdList();

    // 스텍 필터가 안 걸려 있을 경우
  } else if (stackFilter.length === 0) {
    console.log("2번 실행");
    const makeFilterdList = () => {
      const doneResult = datas.filter((el) => el.recruitDone === isDone);
      const groupResult = doneResult.filter(
        (el) => el.recruitCategory === group
      );
      setFilterDatas(groupResult);
    };
    makeFilterdList();
  } else if (stackFilter.length !== 0 && group !== "전체") {
    console.log("3번 실행");
    // 스택으로 필터링된 리스트
    const isIncludeList = datas
      .map((e) => e.techStackNames)
      .map((el) => el.map((el) => el.techStackName))
      .map((elm) => stackFilter.some((r) => elm.indexOf(r) >= 0));

    const makeFilterdList = () => {
      const stackResult = [];
      isIncludeList.map((el, idx) => {
        if (el === true) {
          stackResult.push(datas[idx]);
        }
      });

      // [모집중, 모집완료]
      const doneResult = stackResult.filter((el) => el.recruitDone === isDone);
      // [전체, 스터디, 프로젝트]
      const groupResult = doneResult.filter(
        (el) => el.recruitCategory === group
      );
      setFilterDatas(groupResult);
    };

    makeFilterdList();
  }
};
