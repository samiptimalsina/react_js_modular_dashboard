// src/auth/components/PublicRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  // Check if user exists in sessionStorage (you can also use localStorage)
  const user = JSON.parse(sessionStorage.getItem("user"));

  // If logged in → redirect to dashboard
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }

  // If not logged in → render the nested routes (login, register, etc.)
  return <Outlet />;
};

export default PublicRoute;
