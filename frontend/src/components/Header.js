import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full p-4 bg-gray-800 text-white flex justify-between items-center">
      <h1>Cinema E-Booking</h1>
      <nav>
        <Link href="/HomePage">
          <a className="mr-4">Home</a>
        </Link>
        <Link href="/LoginPage">
          <a className="mr-4">Login</a>
        </Link>
        <Link href="/RegisterPage">
          <a>Register</a>
        </Link>
      </nav>
    </header>
  );
}
