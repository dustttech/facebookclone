import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    // const response = await fetch(url);
        const response = await fetch(url, {
      method: "GET",
      mode: 'cors',
      referrerPolicy: 'no-referrer',
      redirect: 'follow',
      headers: {
        "Content-Type": "application/json",
      },
    });
    const products = await response.json();
    setProducts(products);
    setLoading(false);
  };

  useEffect(() => {
    getProducts();
  }, [url]);

  return { loading, products };
};
