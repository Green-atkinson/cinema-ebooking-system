import React from "react";
import "../styles/AdminDashboard.css";

export default function AdminDashboard() {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <h1>Admin Panel</h1>
        <p>Streamline movie management, user engagement, and promotions with ease.</p>
      </header>

      <div className="grid">
        <main>
          <h2>Admin Dashboard</h2>
          <p>Manage movies, users, and promotions from here.</p>
          <button>Manage Movies</button>
          <button>Manage Users</button>
          <button>Manage Promotions</button>
        </main>
      </div>

      <footer className="dashboard-footer">
        <p>© 2024 Cinema E-Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}