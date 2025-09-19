// src/modules/users/components/UsersPage.jsx
import React, { useEffect, useMemo, useState } from "react";
import useUserStore from "../store/useUserStore";
import UserTable from "../componets/UserTable";
import UserForm from "../componets/UserForm";
import UserDetailModal from "../componets/UserDetailModal";
import SearchBar from "../componets/SearchBar";
import useDebounce from "../hooks/useDebounce";
import { useNavigate } from "react-router-dom";


const UsersPage = () => {
  const {
    users, meta, loading, error, query, loadUsers, setQuery,
    addUser, editUser, deleteUser, loadUser,
  } = useUserStore();

  const [editingUser, setEditingUser] = useState(null);
  const [viewUser, setViewUser] = useState(null);

  useEffect(() => {
    // initial load
    loadUsers();
    // eslint-disable-next-line
  }, []);
 const navigate = useNavigate();
  // local search state with debounce
  const [search, setSearch] = useState(query.search || "");
  const debouncedSearch = useDebounce(search, 450);

  useEffect(() => {
    // when search changes, reset to first page
    loadUsers({ search: debouncedSearch, page: 1 });
    // eslint-disable-next-line
  }, [debouncedSearch]);

  const handlePage = (newPage) => {
    loadUsers({ page: newPage });
  };

  const handleLimit = (newLimit) => {
    loadUsers({ limit: newLimit, page: 1 });
  };

  const handleCreateOrUpdate = async (payload) => {
    if (editingUser) {
      await editUser(editingUser.id, payload);
      setEditingUser(null);
    } else {
      await addUser(payload);
    }
  };

const handleDelete = async (id) => {
  if (!window.confirm("Delete user?")) return; // window.confirm प्रयोग
  await deleteUser(id);
};

  const handleView = async (u) => {
    const fresh = await loadUser(u.id);
    setViewUser(fresh);
  };

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Users</h1>
        {/* Add create button to clear edit mode */}
        <button   onClick={() => navigate("/dashboard/users/create")}className="bg-green-600 text-white px-3 py-1 rounded">+ New User</button>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 space-y-4">
          <SearchBar value={search} onChange={setSearch} status={query.status} onStatusChange={(s) => loadUsers({ status: s, page: 1 })} />
          <UserTable users={users} onEdit={(u) => setEditingUser(u)} onDelete={handleDelete} onView={handleView} />
          {/* pagination controls */}
          <div className="flex items-center justify-between mt-2">
            <div>
              <button disabled={meta.page <= 1 || loading} onClick={() => handlePage(meta.page - 1)} className="px-3 py-1 border rounded mr-2">Prev</button>
              <button disabled={meta.page >= Math.ceil((meta.total || 0) / meta.limit) || loading} onClick={() => handlePage(meta.page + 1)} className="px-3 py-1 border rounded">Next</button>
            </div>

            <div className="flex gap-2 items-center">
              <div className="text-sm">Page {meta.page} of {Math.max(1, Math.ceil((meta.total || 0) / meta.limit))}</div>
              <select value={meta.limit} onChange={(e) => handleLimit(Number(e.target.value))} className="border p-1 rounded">
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={25}>25</option>
              </select>
            </div>
          </div>
        </div>

        {/* <div>
          <UserForm key={editingUser?.id ?? "new"} initial={editingUser} onSave={handleCreateOrUpdate} onCancel={() => setEditingUser(null)} />
        </div> */}
      </div>

      {viewUser && <UserDetailModal user={viewUser} onClose={() => setViewUser(null)} />}

      {loading && <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded">Loading…</div>}
      {error && <div className="text-red-600">Error: {error.message ?? String(error)}</div>}
    </div>
  );
};

export default UsersPage;
