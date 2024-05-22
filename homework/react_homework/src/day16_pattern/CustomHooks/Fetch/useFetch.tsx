import React, {useState, useEffect} from 'react'

// this is your homework, create a custom hook "useFetch" to simplify the fetching process

// imagine you have to implement the same fetching, loading, and error logic for another component
// such as Comments, Todos, Users, etc. (if you are not sure what I'm talking about, just try to 
// create another component that fetches from https://jsonplaceholder.typicode.com/todos, and you will
// find yourself rewriting the same logic)

export default function useFetch<T>(url : string) {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data: T = await response.json();
        setData(data);
      } catch (error) {
        setError(error as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}
