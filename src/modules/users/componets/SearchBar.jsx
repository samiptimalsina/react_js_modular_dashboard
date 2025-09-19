// src/modules/users/components/SearchBar.jsx
import React from "react";

const SearchBar = ({ value, onChange, status, onStatusChange, placeholder = "Search users..." }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border p-2 rounded flex-1"
      />
      <select value={status} onChange={(e) => onStatusChange(e.target.value)} className="border p-2 rounded">
        <option value="">All</option>
        <option value="active">Active</option>
        <option value="inactive">Inactive</option>
      </select>
    </div>
  );
};

export default SearchBar;
