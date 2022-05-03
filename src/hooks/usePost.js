import { useState, useEffect } from "react";

export const usePost = (url, postdata) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  const postItem = async () => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postdata),
    });
    const result = await response.json();
    setData(result);
    setLoading(false);
  };

  useEffect(() => {
    postItem();
  }, [url]);

  return { loading, data };
};
