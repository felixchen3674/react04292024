// import { useEffect, useState } from "react";

import { useEffect, useState } from "react";

// export default function useDebounce(passingValue: string, wait: number) {
//   const [debounceValue, setDebounceValue] = useState("");
//   useEffect(() => {
//     let timeId = null;
//     timeId = setTimeout(() => {
//       setDebounceValue(passingValue);
//     }, wait);
//     return () => {
//       clearTimeout(timeId);
//     };
//   }, [passingValue, wait]);
//   return debounceValue;
// }

export default function useDebounce(searchTerm, wait) {
  const [debounceValue, setDebounceValue] = useState(searchTerm);
  useEffect(() => {
    let timeId = setTimeout(() => {
      setDebounceValue(searchTerm);
    }, wait);
    console.log("update");
    return () => {
      console.log("clear");
      clearTimeout(timeId);
    };
  }, [searchTerm, wait]);
  return debounceValue;
}
