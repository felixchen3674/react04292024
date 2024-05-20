import { useEffect, useState } from "react";

function getSavedValue<T>(key: string, initialValue: T | (() => T)): T {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}
export default function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState(() => getSavedValue(key, initialValue));
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue];
}
