import React from "react";
import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-slate-100 to-white">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <Outlet />
      </div>
    </div>
  );
}
