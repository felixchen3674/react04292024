import React, { useEffect, useState } from "react";

// this is your homework, create a custom hook "useFetch" to simplify the fetching process

// imagine you have to implement the same fetching, loading, and error logic for another component
// such as Comments, Todos, Users, etc. (if you are not sure what I'm talking about, just try to
// create another component that fetches from https://jsonplaceholder.typicode.com/todos, and you will
// find yourself rewriting the same logic)

interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}
//Note:
// "T" in typescript means any non-declared variable 
// And it is used as a placeholder for the type that should be passed to a function or class.

export default function useFetch<T>(url: string): FetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as T;

        setData(data);
      } catch (error: any) {
        setError({ ...error, message: `Failed to fetch data: ${error.message}` });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
