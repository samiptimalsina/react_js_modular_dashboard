// src/modules/users/services/userService.js
import apiClient from "../api/apiClient";

/**
 * API contract assumptions:
 * GET /users?search=&page=1&limit=10&status=active
 * Response: { data: [...users], meta: { total, page, limit } }
 */

export const fetchUsers = async ({ page = 1, limit = 10, search = "", status = "" } = {}) => {
  const params = { page, limit };
  if (search) params.search = search;
  if (status) params.status = status;

  const res = await apiClient.get("/users", { params });
  return res.data;
};

export const getUserById = async (id) => {
  const res = await apiClient.get(`/users/${id}`);
  return res.data;
};

export const createUser = async (payload) => {
  const res = await apiClient.post("/users", payload);
  return res.data;
};

export const updateUser = async (id, payload) => {
  const res = await apiClient.put(`/users/${id}`, payload);
  return res.data;
};

export const removeUser = async (id) => {
  const res = await apiClient.delete(`/users/${id}`);
  return res.data;
};
