"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { buildUserFromSignup, saveStoredUser } from "@/lib/auth";

export default function SignupPage() {
  const router = useRouter();

  const [contact, setContact] = useState("");
  const [error, setError] = useState("");

  const handleContinue = (e: React.FormEvent) => {
    e.preventDefault();

    if (!contact.trim()) {
      setError("Please enter a phone number or email");
      return;
    }

    setError("");
    saveStoredUser(buildUserFromSignup(contact));
    localStorage.setItem("signupContact", contact);
    window.dispatchEvent(new Event("authchange"));
    router.push("/dashboard");
  };

  return (
    <div className="relative min-h-screen bg-white flex items-center justify-center px-4 overflow-hidden">
      
      {/* BACKGROUND LOGO */}
      <img
        src="/tego-logo.png"
        alt="Background Logo"
        className="absolute opacity-10 w-[1600px] max-w-none top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      />

      {/* CONTENT */}
      <div className="w-full max-w-md relative">
        
        {/* TITLE */}
        <h1 className="text-3xl md:text-4xl font-semibold text-blue-900 leading-tight mb-6">
          What&apos;s your phone number or email?
        </h1>

        {/* FORM */}
        <form onSubmit={handleContinue} className="space-y-4">
          <input
            type="text"
            placeholder="Enter phone number or email"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="w-full rounded-xl bg-white border border-blue-200 px-4 py-4 text-lg placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* ERROR */}
          {error && <p className="text-sm text-red-600">{error}</p>}

          {/* CONTINUE BUTTON */}
          <button
            type="submit"
            className="w-full rounded-xl bg-red-600 py-4 text-lg font-medium text-white transition hover:bg-red-700"
          >
            Continue
          </button>
        </form>

        {/* DIVIDER */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-blue-200" />
          <span className="text-sm text-blue-900">or</span>
          <div className="h-px flex-1 bg-blue-200" />
        </div>

        {/* SOCIAL BUTTONS */}
        <div className="space-y-3">
          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white py-4 text-lg font-medium text-blue-900 transition hover:bg-blue-50">
            Continue with Google
          </button>

          <button className="flex w-full items-center justify-center gap-3 rounded-xl border border-blue-200 bg-white py-4 text-lg font-medium text-blue-900 transition hover:bg-blue-50">
      
            Continue with Apple
          </button>
        </div>

        {/* LOGIN LINK */}
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold text-blue-700 hover:text-blue-900">
            Log in
          </Link>
        </p>
        <p className="mt-3 text-center text-sm text-slate-500">
          New accounts are created as employees by default.
        </p>
      </div>
    </div>
  );
}
