import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../modules/dashboard/components/Sidebar";
import Topbar from "../modules/dashboard/components/Topbar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        {/* Topbar */}
        <Topbar />

        {/* Nested routes will render here */}
        <main className="p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
