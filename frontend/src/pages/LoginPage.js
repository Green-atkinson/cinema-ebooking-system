import React from 'react';

const LoginPage = () => {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Password:</label>
        <input type="password" name="password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
