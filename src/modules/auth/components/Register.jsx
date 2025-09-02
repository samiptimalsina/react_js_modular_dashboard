import React, { useState } from 'react';
import InputField from "../../../shared/components/InputField";
import CheckboxField from '../../../shared/components/CheckboxField';

const Register = () => {
  const [formData, setFormData] = useState({
    referralCode: '',
    parentCode: '',
    email: '',
    fullName: '',
    country: '',
    mobile: '',
    password: '',
    reTypePassword: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-800 bg-opacity-90">
      <div className="w-full max-w-6xl p-8 rounded-xl shadow-lg text-white">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-600">RubyStake Wallet</h1>
        <h2 className="text-xl font-semibold text-center mb-6">Create Wallet</h2>
        <p className="text-center text-gray-300 mb-6">Enter your credentials to continue</p>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Column */}
          <InputField
            label="Referral Code (Optional)"
            name="referralCode"
            type="text"
            value={formData.referralCode}
            onChange={handleChange}
            placeholder="4B8D0E"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Parent Code (Optional)"
            name="parentCode"
            type="text"
            value={formData.parentCode}
            onChange={handleChange}
            placeholder="Enter Parent Code"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Email Address"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Full Name"
            name="fullName"
            type="text"
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Enter Full Name"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />

          {/* Right Column */}
          <InputField
            label="Country"
            name="country"
            type="select"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          >
            <option value="">-- Select Your Country --</option>
          </InputField>
          <InputField
            label="Mobile"
            name="mobile"
            type="tel"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Mobile"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Re-Type Password"
            name="reTypePassword"
            type="password"
            value={formData.reTypePassword}
            onChange={handleChange}
            placeholder="Re-Type Password"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />

          {/* Full-width Checkbox */}
          <div className="col-span-2">
            <CheckboxField
              label="Agree with Terms & Condition."
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="text-blue-300"
            />
          </div>

          {/* Full-width Submit Button */}
          <button
            type="submit"
            className="col-span-2 w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white p-2 rounded hover:from-purple-600 hover:to-pink-600"
          >
            Sign In
          </button>
        </form>

        <p className="text-center mt-4 text-gray-400 col-span-2">
          Already have a Wallet? <a href="/login" className="text-blue-400 underline">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
