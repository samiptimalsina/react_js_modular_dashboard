// src/auth/components/PublicRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  // Check if user is logged in
  const user = JSON.parse(sessionStorage.getItem("user"));

  // If logged in, redirect to dashboard
  return user ? <Navigate to="/dashboard" replace /> : <Outlet />;
};

export default PublicRoute;
