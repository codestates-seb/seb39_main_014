import { useEffect } from "react";

export const useOutsideClick = <T extends HTMLElement>(
  ref: React.MutableRefObject<T>,
  callback: React.Dispatch<React.SetStateAction<boolean>>
) => {
  const handleClick = (e: React.BaseSyntheticEvent | MouseEvent) => {
    if (ref && !ref.current.contains(e.target)) {
      callback(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClick, true);

    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  });
};
