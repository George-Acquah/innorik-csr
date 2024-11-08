import React, { useEffect } from "react";

export const useOutsideClick = (
  ref: React.RefObject<HTMLDivElement | null>,
  callback: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
) => {
  useEffect(() => {
    const listener = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      callback(event);
    };
    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
};
