import { Datas } from "../types/board";

export const handleFilter = (
  boards: Datas[],
  stackFilter: string[],
  setFilterDatas: any,
  isDone: boolean,
  group: string
) => {
  const isIncludeList = boards
    .map(item => item.techStackNames)
    .map(techStackNames =>
      techStackNames.map(techStackNames => techStackNames.techStackName)
    )
    .map(techStackName => stackFilter.some(r => techStackName.indexOf(r) >= 0));

  if (group === "전체") {
    const makeFilterdList = () => {
      const stackResult: any = [];
      if (stackFilter.length === 0) {
        const doneResult = boards.filter(el => el.recruitDone === isDone);
        setFilterDatas(doneResult);
      } else {
        isIncludeList.map((el: boolean, idx: number) => {
          if (el === true) {
            stackResult.push(boards[idx]);
          }
        });
        const doneResult = stackResult.filter(
          (stack: any) => stack.recruitDone === isDone
        );

        setFilterDatas(doneResult);
        if (doneResult.length !== 0) {
        }
      }
    };

    makeFilterdList();
  } else if (stackFilter.length === 0) {
    const makeFilterdList = () => {
      const doneResult = boards.filter(el => el.recruitDone === isDone);
      const groupResult = doneResult.filter(el => el.recruitCategory === group);
      setFilterDatas(groupResult);
      if (groupResult.length !== 0) {
      }
    };
    makeFilterdList();
  } else if (stackFilter.length !== 0 && group !== "전체") {
    const isIncludeList = boards
      .map(item => item.techStackNames)
      .map(el => el.map(el => el.techStackName))
      .map(elm => stackFilter.some(r => elm.indexOf(r) >= 0));

    const makeFilterdList = () => {
      const stackResult: any = [];
      isIncludeList.map((el, idx) => {
        if (el === true) {
          stackResult.push(boards[idx]);
        }
      });

      const doneResult = stackResult.filter(
        (el: any) => el.recruitDone === isDone
      );
      const groupResult = doneResult.filter(
        (el: any) => el.recruitCategory === group
      );
      setFilterDatas(groupResult);
      if (groupResult.length !== 0) {
      }
    };

    makeFilterdList();
  }
};
