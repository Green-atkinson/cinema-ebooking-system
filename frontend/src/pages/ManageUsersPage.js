import React from "react";
import "../styles/ManageUsersPage.css";

export default function ManageUsersPage() {
  return (
    <div className="manage-users-container">
      <main>
        <h2>Manage Users</h2>
        <p>View, edit, or delete user accounts.</p>
        <button className="view-button">View Users</button>
        <button className="edit-button">Edit User</button>
        <button className="delete-button">Delete User</button>
      </main>
    </div>
  );
}