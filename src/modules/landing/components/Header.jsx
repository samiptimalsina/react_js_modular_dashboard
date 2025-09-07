import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-blue-600">MyApp</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/about" className="hover:text-blue-500">About</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/contact" className="hover:text-blue-500">Contact</Link>
        </nav>
      </div>
    </header>
  );
}
