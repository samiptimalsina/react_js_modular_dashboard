import React, { useState } from "react";
import InputField from "../../../shared/components/InputField";
import Button from "../../../shared/components/Button";
import * as authService from "../service/authService";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");


  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
        setError("");

    try {
      const user = await authService.login({ email, password });
      console.log("Logged in user:", user);

      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-purple-900 bg-opacity-90">
      <div className="w-full max-w-md p-8 rounded-xl shadow-lg text-white bg-gradient-to-r from-purple-700 to-purple-900">
        <h1 className="text-3xl font-bold text-center mb-6 text-red-500">RubyStake Wallet</h1>
        <h2 className="text-xl font-semibold text-center mb-6">Hi, Welcome Back</h2>
        <p className="text-center text-gray-300 mb-6">Enter your credentials to continue</p>

        <form onSubmit={onSubmit} className="space-y-4">
          <InputField
            label="User Email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter user email"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />
          <InputField
            label="Password"
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-700 text-white border-none focus:outline-none"
          />

          <div className="flex justify-end">
            <a href="/auth/forgot-password" className="text-sm text-pink-400 hover:underline">
              Forgot Password?
            </a>
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white p-3 rounded"
          >
            {loading ? "Signing in..." : "Log In"}
          </Button>

          <p className="text-center mt-4 text-gray-400">
            Don't have a wallet?{" "}
            <a href="/auth/register" className="text-blue-400 underline">
              Register
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
