import React, { useEffect, useState } from 'react';
export default function useFetch(url: string) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null); // Reset error state before fetching new data

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setData(data);
      } catch (error: any) {
        setError({
          ...error,
          message: `Failed to fetch posts: ${error.message}`,
        });
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [url]);

  return { data, loading, error };
}
