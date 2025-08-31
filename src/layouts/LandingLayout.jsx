import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function LandingLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold">MyApp</div>
        <nav className="space-x-4">
          <Link className="hover:underline" to="/">Home</Link>
          <Link className="hover:underline" to="/about">About</Link>
          <Link className="hover:underline" to="/auth/login">Login</Link>
        </nav>
      </header>

      <main className="flex-1 bg-gray-50">
        <Outlet />
      </main>

      <footer className="bg-white text-sm text-gray-600 p-4 text-center">
        © {new Date().getFullYear()} MyApp. All rights reserved.
      </footer>
    </div>
  );
}
