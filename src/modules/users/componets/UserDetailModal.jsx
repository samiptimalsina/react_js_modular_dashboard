// src/modules/users/components/UserDetailModal.jsx
import React from "react";

const UserDetailModal = ({ user, onClose }) => {
  if (!user) return null;
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded w-11/12 md:w-2/3 lg:w-1/3">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">User details</h3>
          <button onClick={onClose} className="px-2 py-1">Close</button>
        </div>
        <div className="space-y-2">
          <div><strong>Name:</strong> {user.name}</div>
          <div><strong>Email:</strong> {user.email}</div>
          <div><strong>Status:</strong> {user.status}</div>
          <div><strong>Created:</strong> {new Date(user.createdAt || user.created_at || Date.now()).toLocaleString()}</div>
          {/* add more fields as needed */}
        </div>
      </div>
    </div>
  );
};

export default UserDetailModal;
