import React from 'react';

const CheckboxField = ({ label, name, checked, onChange, className }) => {
  return (
    <div className="flex items-center">
      <input
        type="checkbox"
        name={name}
        checked={checked}
        onChange={onChange}
        className="mr-2"
      />
      <label className={`text-sm ${className}`}>{label}</label>
    </div>
  );
};

export default CheckboxField;