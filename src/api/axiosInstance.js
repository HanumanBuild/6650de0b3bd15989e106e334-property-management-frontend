import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL,
});

export default axiosInstance;