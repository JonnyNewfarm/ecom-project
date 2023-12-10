import React, { useEffect, useState } from 'react'
import apiClient from '../services/api-client'
import { CanceledError } from 'axios';

export interface Products {
    id: string;
    title: string;
    price: number;
    imageUrl: string;
  }

const useData =  ( endpoint: string ) => {
    const [data, setData] = useState<Products[]>([])
    const [error, setError] = useState("")

    useEffect (() => {
        const controller = new AbortController();
        apiClient
        .get<Products[]>(endpoint, { signal: controller.signal })
        .then((res) => {
            setData(res.data);
            
        })
        .catch((err) => {
            if(err instanceof CanceledError) return;
            setError(err.message);

        });

        return () => controller.abort();

    }, []);
  return { data, error};
}

export default useData;