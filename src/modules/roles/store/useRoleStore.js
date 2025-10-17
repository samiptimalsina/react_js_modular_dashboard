import { create } from "zustand";
import { getRoles, updateRole, createRole, deleteRole } from "../service/roleService";

const useRolesStore = create((set, get) => ({
  roles: [],
  meta: {},
  loading: false,
  error: null,
  query: {
    page: 1,
    limit: 10,
    search: "",
  },

  loadRoles: async () => {
    const { query } = get();
    set({ loading: true, error: null });
    try {
      const data = await getRoles(query);
      set({
        roles: data.roles,
        meta: data.meta,
      });
    } catch (error) {
      set({ error: error.message || "Failed to load roles" });
    } finally {
      set({ loading: false });
    }
  },

  setQuery: (newQuery) => {
    set((state) => ({
      query: { ...state.query, ...newQuery },
    }));
  },

  addRole: async (role) => {
    set({ loading: true, error: null });
    try {
      const newRole = await createRole(role);
      set((state) => ({
        roles: [...state.roles, newRole],
      }));
    } catch (error) {
      set({ error: error.message || "Failed to add role" });
    } finally {
      set({ loading: false });
    }
  },

  editRole: async (id, updatedRole) => {
    set({ loading: true, error: null });
    try {
      const role = await updateRole(id, updatedRole);
      set((state) => ({
        roles: state.roles.map((r) => (r.id === id ? role : r)),
      }));
    } catch (error) {
      set({ error: error.message || "Failed to update role" });
    } finally {
      set({ loading: false });
    }
  },


  deleteRole: async (id) => {
    set({ loading: true, error: null });
    try {
      await deleteRole(id);
      set((state) => ({
        roles: state.roles.filter((r) => r.id !== id),
      }));
    } catch (error) {
      set({ error: error.message || "Failed to delete role" });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useRolesStore;
