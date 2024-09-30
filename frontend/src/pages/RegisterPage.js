import React from "react";
import "../styles/RegisterPage.css";

export default function RegisterPage() {
  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
  };

  return (
    <div className="register-container">
      <main className="register-content">
        <h2>Register</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required className="input-field" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required className="input-field" />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required className="input-field" />
          <br />
          <div className="button-group">
            <button type="submit" className="register-button">Register</button>
            <button type="button" onClick={handleGoBack} className="go-back-button">Go Back</button>
          </div>
        </form>
      </main>
    </div>
  );
}