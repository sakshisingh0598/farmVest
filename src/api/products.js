import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from './'

export const _getProducts = async (payload) => {
  const response = await axios.get('product/get-all-products');
  return response;
};

export const useGetProducts = (options = {}) => {


  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return useQuery(
    "all products", _getProducts,
    {
      enabled,
      select: (data) => data?.data?.products,
      ...options,
    }
  );
};

export const _getProduct = async ({ queryKey }) => {
  const { productId } = queryKey[1]
  const response = await axios.get(`product/get-all-products-shop/${productId}`);
  return response;
};

export const useGetProduct = (options = {}, values = {}) => {


  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(false);
  }, []);

  return useQuery(
    ["products", { ...values }], _getProduct,
    {
      enabled,
      select: (data) => data?.data?.products,
      ...options,
    }
  );
};

