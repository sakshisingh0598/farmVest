import axios from 'axios';

export const baseURL = 'https://farm-cart-lqci.onrender.com/api/v2/';

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL,
});

// axiosInstance.interceptors.request.use(
//   config => {
//     let token = localStorage.getItem('__token__');
//     let cookie = Cookies.get('__cookie__', token)

//     config.headers = {
//       Authorization: `Bearer ${cookie}`,
//       "Content-Type": "application/json",
//     };
//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;