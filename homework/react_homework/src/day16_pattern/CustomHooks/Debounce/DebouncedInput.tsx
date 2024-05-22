import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

function apiCall(searchQuery: string) {
  console.log("api called...");
}

export default function DebouncedInput() {
  const [searchTerm, setSearchTerm] = useState("");
  const debounced = useDebounce(searchTerm, 1000);


  useEffect(() => {
    // currently, every letter I type, the api is called
    // create a useDebounce custom hook to reduce the
    // number of times api is called
    if (debounced) {
      apiCall(searchTerm);
    }
  }, [debounced]);

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
