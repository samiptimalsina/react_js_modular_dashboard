// auth/service/authService.js
import axios from "axios";

const API_URL = process.env.REACT_APP_API_BASE_URL;

// Register new user
export const register = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  if (response.data.token) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};

// Login user
export const login = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  if (response.data.token) {
    sessionStorage.setItem("user", JSON.stringify(response.data));
  }
  return response.data;
};


// Logout user
export const logout = () => {
  sessionStorage.removeItem("user");
};


export const authHeader = () => {
  const user = JSON.parse(sessionStorage.getItem("user"));
  return user?.token ? { Authorization: `Bearer ${user.token}` } : {};
};