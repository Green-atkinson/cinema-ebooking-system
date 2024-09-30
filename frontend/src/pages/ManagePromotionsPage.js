import React from "react";
import "../styles/ManagePromotionsPage.css";

export default function ManagePromotionsPage() {
  return (
    <div className="manage-promotions-container">
      <main>
        <h2>Manage Promotions</h2>
        <p>Add or edit promotions for movies or special events.</p>
        <button className="add-button">Add New Promotion</button>
        <button className="edit-button">Edit Promotion</button>
      </main>
    </div>
  );
}