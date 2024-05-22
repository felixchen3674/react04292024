import { useEffect, useState } from 'react';

export default function useDebounce<T>(value: T, delay: number): T {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebounceValue(value);
    }, 500);
    return clearTimeout(handler);
  }, [value, delay]);

  return debounceValue;
}
