// src/modules/roles/service/roleService.js
import apiClient from "../api/apiClient"; // from service folder to api folder

// GET roles with query params (page, limit, search)
export const getRoles = async (params = {}) => {
  const response = await apiClient.get("/roles", { params });
  return response.data;
};

// CREATE a new role
export const createRole = async (roleData) => {
  const response = await apiClient.post("/roles", roleData);
  return response.data;
};

// UPDATE an existing role
export const updateRole = async (id, roleData) => {
  const response = await apiClient.put(`/roles/${id}`, roleData);
  return response.data;
};

// DELETE a role
export const deleteRole = async (id) => {
  const response = await apiClient.delete(`/roles/${id}`);
  return response.data;
};


// GET a single role by ID
export const getRoleById = async (id) => {
  const response = await apiClient.get(`/roles/${id}`);
  return response.data;
};
