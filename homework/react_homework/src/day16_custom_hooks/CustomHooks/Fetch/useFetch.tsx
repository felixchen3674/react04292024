import React, { useEffect, useState } from "react";

// this is your homework, create a custom hook "useFetch" to simplify the fetching process

// imagine you have to implement the same fetching, loading, and error logic for another component
// such as Comments, Todos, Users, etc. (if you are not sure what I'm talking about, just try to
// create another component that fetches from https://jsonplaceholder.typicode.com/todos, and you will
// find yourself rewriting the same logic)

export default function useFetch<T>(url: string): {
  data: T | null;
  isLoading: boolean;
  isError: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("url is not found");
      }
      const data = await response.json();
      setData(data);
    } catch (err) {
      setIsError(true);
      setData(null);
    } finally {
      setIsLoading(false);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, isLoading, isError };
}
