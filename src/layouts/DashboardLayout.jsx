import React from "react";
import { Link, useNavigate } from "react-router-dom";


export default function DashboardLayout({ children }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    // dispatch logout (dummy)
    try {
      await dispatch(logoutUser()).unwrap?.();
    } catch (_) {}
    navigate("/auth/login");
  };

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r flex flex-col">
        <div className="px-6 py-4 border-b">
          <h1 className="text-xl font-semibold">My Dashboard</h1>
        </div>

        <nav className="p-4 flex-1">
          <ul className="space-y-2">
            <li><Link to="/dashboard" className="block px-3 py-2 rounded hover:bg-gray-100">Overview</Link></li>
            <li><Link to="/customers" className="block px-3 py-2 rounded hover:bg-gray-100">Customers</Link></li>
            <li><Link to="/customers/1" className="block px-3 py-2 rounded hover:bg-gray-100">Customer (detail example)</Link></li>
            <li><Link to="#" className="block px-3 py-2 rounded hover:bg-gray-100">Reports</Link></li>
          </ul>
        </nav>

        <div className="p-4 border-t">
          <button
            onClick={handleLogout}
            className="w-full text-left px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-gray-50">
        <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-medium">Welcome Back</h2>
            <p className="text-sm text-gray-500">Here's what's happening today</p>
          </div>

          <div className="flex items-center space-x-3">
            <button className="px-3 py-2 rounded border">Notifications (0)</button>
            <div className="rounded-full bg-gray-200 w-9 h-9 flex items-center justify-center">U</div>
          </div>
        </header>

        <main className="p-6 overflow-auto">
          {/* render children from nested routes */}
          {children ?? <div><p>No content</p></div>}
        </main>
      </div>
    </div>
  );
}
