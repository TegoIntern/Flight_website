"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    localStorage.setItem("user", JSON.stringify({ email }));
    window.dispatchEvent(new Event("authchange"));

    setLoading(false);
    router.push("/dashboard");
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-white px-4">
      <img
        src="/tego-logo.png"
        alt="Background Logo"
        className="absolute opacity-10 w-[1600px] max-w-none top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      <div className="relative w-full max-w-md">
        <h1 className="mb-6 text-center text-3xl font-semibold leading-tight text-blue-900 md:text-4xl">
          Welcome back
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-xl border border-blue-200 bg-white px-4 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-blue-200 bg-white px-4 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-4 text-lg font-medium text-white transition hover:bg-red-700"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-blue-200" />
          <span className="text-sm text-blue-900">or</span>
          <div className="h-px flex-1 bg-blue-200" />
        </div>

        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white py-4 text-lg font-medium text-blue-900 transition hover:bg-blue-50">
            Continue with Google
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white py-4 text-lg font-medium text-blue-900 transition hover:bg-blue-50">
            Continue with Apple
          </button>
        </div>

        <p className="mt-6 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold text-blue-700">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
