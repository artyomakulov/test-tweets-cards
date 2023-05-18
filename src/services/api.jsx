import axios from 'axios';

export const getUsers = (page, limit) => {
  return axios.get(`https://6464aa05043c103502bf6426.mockapi.io/users?completed=false&page=${page}&limit=${limit}`);
};
