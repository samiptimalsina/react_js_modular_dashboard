// src/modules/users/components/UserTable.jsx
import React from "react";

const UserTable = ({ users = [], onEdit, onDelete, onView }) => {
  return (
    <div className="overflow-x-auto bg-white rounded shadow">
      <table className="min-w-full text-left">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2">#</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Created</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr><td className="p-4" colSpan={6}>No users found</td></tr>
          )}
          {users.map((u, idx) => (
            <tr key={u.id || u._id || idx} className="border-t">
              <td className="px-4 py-2">{u.id ?? idx + 1}</td>
              <td className="px-4 py-2">{u.name}</td>
              <td className="px-4 py-2">{u.email}</td>
              <td className="px-4 py-2">{u.status ?? "—"}</td>
              <td className="px-4 py-2">{new Date(u.createdAt || u.created_at || Date.now()).toLocaleString()}</td>
              <td className="px-4 py-2 space-x-2">
                <button onClick={() => onView(u)} className="px-2 py-1 rounded border">View</button>
                <button onClick={() => onEdit(u)} className="px-2 py-1 rounded bg-blue-600 text-white">Edit</button>
                <button onClick={() => onDelete(u.id)} className="px-2 py-1 rounded bg-red-600 text-white">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
