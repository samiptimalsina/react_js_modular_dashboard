import React from "react";

const InputField = ({lable,type="text",value,onChange,placeholder}) => {
    return (
        <div className="mb-4">
            {label && <label className="block mb-1 font-medium">{label}</label>}
            <input
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring focus:ring-blue-500"
            />
        </div>
    )
}
export default InputField;
