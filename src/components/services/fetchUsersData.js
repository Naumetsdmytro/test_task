import axios from 'axios';

axios.defaults.baseURL = 'https://6446441fee791e1e29fa64a9.mockapi.io/api/v1';

export const fetchUsersData = async page => {
  const { data } = await axios.get(`/users?page=${page}&limit=3`);
  return data;
};
