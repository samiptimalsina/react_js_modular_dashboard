import React from 'react';

const InputField = ({ label, name, type, value, onChange, placeholder, className, children }) => {
  return (
    <div>
      <label className="block text-sm font-medium">{label}</label>
      {type === 'select' ? (
        <select
          name={name}
          value={value}
          onChange={onChange}
          className={className}
        >
          {children}
        </select>
      ) : (
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={className}
        />
      )}
    </div>
  );
};

export default InputField;