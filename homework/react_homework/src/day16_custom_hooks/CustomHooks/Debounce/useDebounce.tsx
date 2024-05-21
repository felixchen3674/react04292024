import { useEffect, useRef, useState } from "react";

export default function useDebounce(value: string, delay: number) {
  const [debounceValue, setDebounceValue] = useState(value);
  const timeoutRef = useRef(null);
  
  useEffect(()=>{
    if(timeoutRef.current){
      clearTimeout((timeoutRef.current))
    }
    timeoutRef.current = setTimeout(() => {
      setDebounceValue(value)
    }, delay);
    return () => {
      if(timeoutRef.current){
        clearTimeout(timeoutRef.current)
      }
    }
  }, [value, delay])


  return debounceValue;
}
