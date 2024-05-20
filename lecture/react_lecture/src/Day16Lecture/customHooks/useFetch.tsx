import { useEffect, useState } from "react";

export default function useFetch(url: string) {
  const [data, setData] = useState<any>([]);

  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        // throw new Error("some error");
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
      } catch (err) {
        setIsError(true);
      }
      setIsLoading(false);
    }

    fetchData();
  }, []);

  return { data, isLoading, isError };
}
