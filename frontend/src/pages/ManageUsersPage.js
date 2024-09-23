import React from "react";

export default function ManageUsersPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Manage Users</h2>
        <p>View, edit, or delete user accounts.</p>
        <button className="p-2 bg-blue-500 text-white mt-4">View Users</button>
        <button className="p-2 bg-blue-500 text-white mt-4">Edit User</button>
        <button className="p-2 bg-blue-500 text-white mt-4">Delete User</button>
      </main>
    </div>
  );
}
