// src/auth/components/ProtectedRoute.jsx
import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  // Check if user is logged in from sessionStorage
  const user = JSON.parse(sessionStorage.getItem("user"));

  // If user exists, render the child routes
  // Else, redirect to login
  return user ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
