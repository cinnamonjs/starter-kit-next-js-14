import { useState, useEffect, useRef } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldRefetch, setShouldRefetch] = useState(0);
  const abortController = useRef(new AbortController());

  const refetch = () => {
    setShouldRefetch((prev) => prev + 1);
  };

  const cancel = () => {
    abortController.current.abort();
    abortController.current = new AbortController();
  };

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          signal: abortController.current.signal,
        });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setData(data);
      } catch (error) {
        if (error.name !== "AbortError") {
          console.error("Fetch error:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      abortController.current.abort();
    };
  }, [url, shouldRefetch]);

  return [data, loading, refetch, cancel];
};

// const [data, loading, refetch, cancel] = useFetch(url)
// caution: this function example from chat-gpt
export default useFetch;
