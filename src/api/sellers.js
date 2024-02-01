import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from './'

export const _getSeller = async (payload) => {
  const response = await axios.get('shop/admin-all-sellers');
  return response;
};

export const useGetSellers = (options = {}) => {


  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return useQuery(
    "seller", _getSeller,
    {
      enabled,
      select: (data) => data?.data,
      ...options,
    }
  );
};