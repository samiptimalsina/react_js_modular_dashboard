import React from "react";

export default function Topbar() {
  return (
    <header className="bg-white border-b px-6 py-3 flex items-center justify-between">
      <div>
        <h2 className="text-lg font-medium">Welcome Back</h2>
        <p className="text-sm text-gray-500">Here's what's happening today</p>
      </div>

      <div className="flex items-center space-x-3">
        <button className="px-3 py-2 rounded border">Notifications (0)</button>
        <div className="rounded-full bg-gray-200 w-9 h-9 flex items-center justify-center">
          U
        </div>
      </div>
    </header>
  );
}
