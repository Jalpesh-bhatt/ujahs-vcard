"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {

  async function handleLogin() {
    await signIn("credentials");
  }

  return (
    <div>
      <button onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}