import React, { useEffect, useState } from 'react';

// this is your homework, create a custom hook "useFetch" to simplify the fetching process

// imagine you have to implement the same fetching, loading, and error logic for another component
// such as Comments, Todos, Users, etc. (if you are not sure what I'm talking about, just try to
// create another component that fetches from https://jsonplaceholder.typicode.com/todos, and you will
// find yourself rewriting the same logic)

export default function useFetch(url: string) {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const fetchData = async () => {
      setState({ data: null, loading: true, error: null });

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = (await response.json()) as T;
        setState({ data, loading: false, error: null });
      } catch (error: any) {
        setState({
          data: null,
          loading: false,
          error: `Failed to fetch data: ${error.message}`,
        });
      }
    };

    fetchData();
  }, [url]);

  return state;
}
