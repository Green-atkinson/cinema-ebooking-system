import React from "react";

export default function RegisterPage() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <h2>Register</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required className="border p-2" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" required className="border p-2" />
          <br />
          <label>Password:</label>
          <input type="password" name="password" required className="border p-2" />
          <br />
          <button type="submit" className="p-2 bg-blue-500 text-white">Register</button>
        </form>
      </main>
    </div>
  );
}
