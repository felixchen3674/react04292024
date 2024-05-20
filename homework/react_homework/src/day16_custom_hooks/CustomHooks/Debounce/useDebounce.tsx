import { useEffect, useState } from "react";

export default function useDebounce(passingValue: string, wait: number) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    let timeId = null;
    timeId = setTimeout(() => {
      setDebounceValue(passingValue);
    }, wait);
    return () => {
      clearTimeout(timeId);
    };
  }, [passingValue, wait]);
  return debounceValue;
}
