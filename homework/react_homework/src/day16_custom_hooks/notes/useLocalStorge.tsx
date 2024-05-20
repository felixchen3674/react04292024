import React, { useEffect, useState } from 'react';

function getSavedValue<T>(key: string, initialValue: T): T {
  const savedValue = JSON.parse(localStorage.getItem(key));
  if (savedValue) return savedValue;
  if (initialValue instanceof Function) return initialValue();
  return initialValue;
}

export default function useLocalStorge<T>(key: string, initialValue: T) {
  const [value, setValue] = useState(() => {
    return getSavedValue(key, initialValue);
  });
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [value]);
  return [value, setValue] as [T, React.Dispatch<React.SetStateAction<T>>];
}
