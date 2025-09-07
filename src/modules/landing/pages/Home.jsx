import React from "react";

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to MyCompany</h1>
      <p className="text-lg text-gray-600 mb-6">
        We provide world-class services to help your business grow.
      </p>
      <button className="px-6 py-3 bg-blue-600 text-blue rounded-lg hover:bg-blue-700">
        Get Started
      </button>
    </div>
  );
}
