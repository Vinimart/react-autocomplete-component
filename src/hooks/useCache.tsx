/* eslint-disable @typescript-eslint/no-explicit-any */

import { useState } from "react";

export function useCache<T>() {
  const [cache, setCache] = useState<{ [key: string]: T }>(() => {
    const cachedData = sessionStorage.getItem("cachedData");
    return cachedData ? JSON.parse(cachedData) : {};
  });

  const getFromCache = (key: string): T | undefined => cache[key];

  const setToCache = (key: string, value: any) => {
    setCache((prevCache) => {
      const newCache = { ...prevCache, [key]: value };
      sessionStorage.setItem("cachedData", JSON.stringify(newCache));

      return newCache;
    });
  };

  const clearCache = () => {
    setCache({});
    sessionStorage.removeItem("cachedData");
  };

  return { cache, getFromCache, setToCache, clearCache };
}
