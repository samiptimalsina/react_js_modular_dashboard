// src/modules/users/store/useUserStore.js
import {create} from "zustand";
import { fetchUsers,getUserById,createUser,updateUser,removeUser } from "../service/userService";


const useUserStore = create((set, get) => ({
  users: [],
  meta: { total: 0, page: 1, limit: 10 },
  loading: false,
  error: null,
  query: { search: "", page: 1, limit: 10, status: "" },

  // fetch server-side users with current query
  loadUsers: async (overrides = {}) => {
    set({ loading: true, error: null });
    const q = { ...get().query, ...overrides };

    try {
      const res = await fetchUsers(q);
      // expecting res = { data, meta }
      set({
        users: res.data || [],
        meta: res.meta || { total: 0, page: q.page, limit: q.limit },
        query: q,
        loading: false,
      });
    } catch (err) {
      set({ error: err, loading: false });
    }
  },

  // single user fetch (for details)
  loadUser: async (id) => {
    set({ loading: true, error: null });
    try {
      const res = await getUserById(id);
      set({ loading: false });
      return res;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  addUser: async (payload) => {
    set({ loading: true });
    try {
      const res = await createUser(payload);
      // refresh list (keeps consistent with server-side)
      await get().loadUsers();
      set({ loading: false });
      return res;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  editUser: async (id, payload) => {
    set({ loading: true });
    try {
      const res = await updateUser(id, payload);
      await get().loadUsers();
      set({ loading: false });
      return res;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  deleteUser: async (id) => {
    set({ loading: true });
    try {
      const res = await removeUser(id);
      await get().loadUsers();
      set({ loading: false });
      return res;
    } catch (err) {
      set({ error: err, loading: false });
      throw err;
    }
  },

  // helpers
  setQuery: (partial) => {
    const q = { ...get().query, ...partial, page: partial.page ?? get().query.page };
    set({ query: q });
  },
}));

export default useUserStore;
