import React from "react";

export default function ManagePromotionsPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Manage Promotions</h2>
        <p>Add or edit promotions for movies or special events.</p>
        <button className="p-2 bg-blue-500 text-white mt-4">Add New Promotion</button>
        <button className="p-2 bg-blue-500 text-white mt-4">Edit Promotion</button>
      </main>
    </div>
  );
}
