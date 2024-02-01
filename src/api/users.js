import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from './'

export const _getUsers = async (payload) => {
  const response = await axios.get('user/admin-all-users');
  return response;
};

export const useGetUsers = (options = {}) => {


  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return useQuery(
    "users", _getUsers,
    {
      enabled,
      select: (data) => data?.data,
      ...options,
    }
  );
};