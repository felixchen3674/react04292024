import { useEffect, useState } from "react";

export default function useDebounce(value: string, wait: number) {
  const [debounceValue, setDebounceValue] = useState("");
  useEffect(() => {
    let time = null;
    time = setTimeout(() => {
      setDebounceValue(value);
    }, wait);
    return () => {
      clearTimeout(time);
    };
  }, [value, wait]);
  return debounceValue;
}