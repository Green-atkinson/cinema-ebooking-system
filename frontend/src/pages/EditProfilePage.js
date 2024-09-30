import React from "react";
import "../styles/EditProfile.css";

export default function EditProfilePage() {
  return (
    <div className="edit-profile-container">
      <main>
        <h2>Edit Profile</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required className="input-field" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required className="input-field" />
          <br />
          <label>Password:</label>
          <input type="password" name="password" className="input-field" />
          <br />
          <button type="submit" className="submit-button">Save Changes</button>
        </form>
      </main>
    </div>
  );
}