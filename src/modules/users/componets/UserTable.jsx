// src/modules/users/components/UserTable.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const UserTable = ({ users = [], onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="table-responsive bg-white rounded shadow-sm p-3">
      <table className="table table-striped table-hover align-middle">
        <thead className="table-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Status</th>
            <th scope="col">Created</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length === 0 && (
            <tr>
              <td colSpan={6} className="text-center py-3">
                No users found
              </td>
            </tr>
          )}
          {users.map((u, idx) => (
            <tr key={u.id || u._id || idx}>
              <td>{u.id ?? idx + 1}</td>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.status ?? "—"}</td>
              <td>{new Date(u.createdAt || u.created_at || Date.now()).toLocaleString()}</td>
              <td>
                <div className="d-flex gap-2">
                  <button
                    onClick={() => navigate(`/dashboard/users/edit/${u.id}`)}
                    className="btn btn-outline-secondary btn-sm"
                  >
                    View
                  </button>
                  <button
                    onClick={() => navigate(`/dashboard/users/edit/${u.id}`)}
                    className="btn btn-primary btn-sm"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(u.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
