// import { useEffect, useState } from "react";
// import useDebounce from "./useDebounce";

// function apiCall(searchQuery: string) {
//   console.log("api called...");
// }

// export default function DebouncedInput() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const deboncedInput = useDebounce(searchTerm, 2000);

//   useEffect(() => {
//     // currently, every letter I type, the api is called
//     // create a useDebounce custom hook to reduce the
//     // number of times api is called
//     if (deboncedInput) {
//       apiCall(searchTerm);
//     }
//   }, [deboncedInput]);

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//       />
//     </div>
//   );
// }
import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import React from "react";

function apiCall(searchQuery: string) {
  console.log("api called...");
}

export default function DebouncedInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounceValue = useDebounce(searchTerm, 3000);

  useEffect(() => {
    if (debounceValue) {
      apiCall(searchTerm);
    }
    // currently, every letter I type, the api is called
    // create a useDebounce custom hook to reduce the
    // number of times api is called
  }, [debounceValue]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}
