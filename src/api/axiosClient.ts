import axios from 'axios';
import { API_BASE_URL } from '../constants/routes';

export const axiosClient = axios.create({
  baseURL: API_BASE_URL,
});
