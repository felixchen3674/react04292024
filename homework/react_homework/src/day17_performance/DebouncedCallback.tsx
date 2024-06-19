import React from "react";
import { ChangeEvent, useCallback, useEffect, useState } from "react";

function debounce<F extends (...args: any[]) => any>(func: F, wait: number): F {
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  // This is a function that has the same parameters as `func`.
  // It uses a rest parameter syntax `...args` to capture all the passed arguments.
  const debouncedFunction = (...args: Parameters<F>) => {
    // Clear the current timeout, if there is one
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // Set a new timeout
    timeoutId = setTimeout(() => {
      func(...args);
    }, wait);
  };

  // Return the debounced function cast to the type F
  return debouncedFunction as F;
}

function apiCall(searchQuery: string) {
  console.log("api called...");
}

export default function DebouncedCallback() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedApiCall = useCallback(debounce(apiCall, 500), []);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    // instead of using useDebounce hook, use debounce higher order function
    debouncedApiCall(e.target.value);
  };
  // using usecallback to make sure the debounce function won't create everytime when the component rerender, it keep the time of debounce in this case;
  // otherwise, it will keep starting new timer every rerendering.
  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleChange}
      />
    </div>
  );
}
