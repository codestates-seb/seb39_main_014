import { useEffect } from "react";

/** 정합성 검사 커스텀 훅
 *
 * checkFunction : 정합성 검사 함수

 * checkedArg : 정합성 검사 함수의 인자
 *
 * setState : 변경할 상태
 */
export default function useCheck(checkFunction, checkedArg, setState) {
  useEffect(() => {
    if (checkFunction(checkedArg) === true) {
      setState(true);
    } else if (checkFunction(checkedArg) === false) {
      setState(false);
    }
  }, [checkedArg]);
}
