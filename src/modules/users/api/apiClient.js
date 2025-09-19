import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000/api";

const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 15000,
  headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use((config) => {
  try {
    const raw = sessionStorage.getItem("user");
    if (raw) {
      const user = JSON.parse(raw);
      if (user?.token) {
        config.headers.Authorization = `Bearer ${user.token}`;
      }
    }
  } catch (e) {
  }
  return config;
}, (error) => Promise.reject(error));

apiClient.interceptors.response.use((res) => res, (error) => {
  if (error?.response?.status === 401) {
    // Optionally: dispatch global logout or redirect
    // sessionStorage.removeItem('user');
    // window.location.href = '/login';
  }
  return Promise.reject(error);
});

export default apiClient;
