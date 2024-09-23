import React from "react";

export default function AdminDashboard() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Admin Dashboard</h2>
        <p>Manage movies, users, and promotions from here.</p>
        <button className="p-2 bg-blue-500 text-white mt-4">Manage Movies</button>
        <button className="p-2 bg-blue-500 text-white mt-4">Manage Users</button>
        <button className="p-2 bg-blue-500 text-white mt-4">Manage Promotions</button>
      </main>
    </div>
  );
}
