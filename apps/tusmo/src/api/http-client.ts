import axios from 'axios';
import { ENV } from '../utils/env';

export const httpClient = axios.create({
  baseURL: ENV.api.baseUrl,
  timeout: 1000
});
