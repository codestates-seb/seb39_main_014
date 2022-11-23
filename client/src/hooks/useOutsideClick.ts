import { useEffect } from "react";

/** 외부 클릭시 드롭박스 사라지는 cumtom hook */
export const useOutsideClick = <T extends HTMLElement>(
  ref: React.MutableRefObject<T>,
  callback: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref && !ref.current.contains(e.target)) {
      callback(false);
    } else {
      callback(true);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });
};
