import Axios from 'axios';

export const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return Axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;