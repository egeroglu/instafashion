import axios from 'axios';
import { User } from '../types';

const AUTH_API = 'YOUR_AUTH_API_URL';

export const authAPI = {
  login: async (email: string, password: string): Promise<User> => {
    try {
      const response = await axios.post(`${AUTH_API}/login`, { email, password });
      return response.data;
    } catch (error) {
      throw new Error('Login failed');
    }
  },

  register: async (email: string, password: string, username: string): Promise<User> => {
    try {
      const response = await axios.post(`${AUTH_API}/register`, { email, password, username });
      return response.data;
    } catch (error) {
      throw new Error('Registration failed');
    }
  },
};