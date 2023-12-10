import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { CanceledError } from "axios";
export interface Products {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
  }

const UseProducts = (url: string) => {
    const [products, setProducts] = useState<Products[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
const controller = new AbortController();

    apiClient
      .get<Products[]>(url, {signal: controller.signal})
      .then((res) => setProducts(res.data))
      .catch((err) => {
      if (err instanceof CanceledError) return;
      setError(err.message)
  });

      return () => controller.abort()
  }, []);

  return {products, error}

}

export default UseProducts