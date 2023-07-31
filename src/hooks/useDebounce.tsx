/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";

export const useDebounce = (
  callback: (...args: any) => void,
  delay: number,
) => {
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    return () => {
      if (timerId) clearTimeout(timerId);
    };
  }, [timerId]);

  return (...args: any) => {
    if (timerId) clearTimeout(timerId);

    const newTimerId = setTimeout(() => callback(...args), delay);
    setTimerId(newTimerId);
  };
};
