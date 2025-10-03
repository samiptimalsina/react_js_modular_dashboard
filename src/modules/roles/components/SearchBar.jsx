// src/modules/users/components/SearchBar.jsx
import React from "react";
const SearchBar = ({ value, onChange, status, onStatusChange, placeholder = "Search Roles..." }) => {
  return (
    <div className="flex gap-2 items-center">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="border p-2 rounded flex-1"
      />
    </div>
  );
};

export default SearchBar;
