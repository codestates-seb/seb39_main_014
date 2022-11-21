import { useEffect } from "react";

interface CheckProps {
  checkFunction: any;
  checkedArg: any;
  setIsState: any;
}

export default function useCheck(
  checkFunction: any,
  checkedArg: any,
  setIsState: any
) {
  useEffect(() => {
    setIsState(checkFunction(checkedArg));
  }, [checkFunction, checkedArg, setIsState]);
}
