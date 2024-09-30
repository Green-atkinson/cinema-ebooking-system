import React from "react";
import "../styles/LoginPage.css";

export default function LoginPage() {
  return (
    <div className="login-container">
      <main>
        <h2>Login</h2>
        <form>
          <label>Email:</label>
          <input type="email" name="email" required className="input-field" />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required className="input-field" />
          <br />
          <button type="submit" className="submit-button">Login</button>
        </form>
      </main>
    </div>
  );
}