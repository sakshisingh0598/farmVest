
import { useMutation, useQueryClient } from 'react-query';
import axios from '../';


export const _loginUser = async (payload) => {
  const { data } = await axios.post('user/login-user', { ...payload });
  return data;
};

export const useLoginUser = (options = {}) => {
  // const queryClient = useQueryClient();
  return useMutation(_loginUser, {
    ...options,

    onSettled: () => {
      //called if either mutatiin is settld or contains an error. also runs a refresh of query
      // queryClient.invalidateQueries('buses');
    },
  });
};

