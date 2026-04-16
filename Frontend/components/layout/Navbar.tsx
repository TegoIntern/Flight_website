"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/book-flight", label: "Flights" },
  {
    href: "https://ridetego.com/",
    label: "Corporate Transportation",
    external: true,
  },
];

const primaryNavTextClass =
  "text-[13px] font-semibold uppercase tracking-[0.08em] text-[#2737a7] transition-colors hover:text-[#1d2d8f]";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => typeof window !== "undefined" && !!localStorage.getItem("user"),
  );
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const syncAuthState = () => {
      setIsLoggedIn(!!localStorage.getItem("user"));
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (!aboutRef.current?.contains(event.target as Node)) {
        setAboutOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setAboutOpen(false);
      }
    };

    const handlePageShow = () => {
      syncAuthState();
      setAboutOpen(false);
    };

    const handleWindowFocus = () => {
      syncAuthState();
      setAboutOpen(false);
    };

    const handleStorage = () => {
      syncAuthState();
    };

    const handleAuthChange = () => {
      syncAuthState();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("pageshow", handlePageShow);
    window.addEventListener("focus", handleWindowFocus);
    window.addEventListener("storage", handleStorage);
    window.addEventListener("authchange", handleAuthChange);
    syncAuthState();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("pageshow", handlePageShow);
      window.removeEventListener("focus", handleWindowFocus);
      window.removeEventListener("storage", handleStorage);
      window.removeEventListener("authchange", handleAuthChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.dispatchEvent(new Event("authchange"));
    window.location.href = "/";
  };

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-[#2537a5] bg-white">
      <div className="flex w-full items-center justify-between gap-2 px-11 py-4 sm:px-12 lg:px-16">
        <Link
          href="/"
          className="shrink-0 flex items-center transition-opacity hover:opacity-90"
          aria-label="RideTEGO home"
        >
          <Image
            src="/tego-logo.png"
            alt="RideTEGO"
            width={245}
            height={78}
            priority
            className="h-auto w-[170px] sm:w-[205px]"
          />
        </Link>

        <div className="flex min-w-0 flex-1 items-center justify-end gap-4 lg:gap-6">
          <div className="flex min-w-0 items-center gap-4 lg:gap-7">
            {navLinks.map((link) => (
              link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  {link.label}
                </Link>
              )
            ))}

            <div ref={aboutRef} className="relative shrink-0">
              <button
                type="button"
                onClick={() => setAboutOpen((open) => !open)}
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
                className={`${primaryNavTextClass} flex items-center gap-1 whitespace-nowrap`}
              >
                About
                <svg
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  className={`h-4 w-4 transition-transform ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  fill="currentColor"
                >
                  <path d="M5.25 7.5 10 12.25 14.75 7.5" />
                </svg>
              </button>

              {aboutOpen && (
                <div className="absolute right-0 top-full mt-4 w-60 rounded-xl border border-slate-200 bg-white py-3 text-left text-sm font-medium normal-case tracking-normal text-slate-700 shadow-xl">
                  <Link
                    href="/about"
                    className="block px-5 py-2.5 hover:bg-slate-50"
                    onClick={() => setAboutOpen(false)}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/mission"
                    className="block px-5 py-2.5 hover:bg-slate-50"
                    onClick={() => setAboutOpen(false)}
                  >
                    Our Mission
                  </Link>
                  <Link
                    href="/solutions"
                    className="block px-5 py-2.5 hover:bg-slate-50"
                    onClick={() => setAboutOpen(false)}
                  >
                    Solutions
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-5 py-2.5 hover:bg-slate-50"
                    onClick={() => setAboutOpen(false)}
                  >
                    Contact
                  </Link>
                  <a
                    href="https://ridetego.com/"
                    className="block px-5 py-2.5 hover:bg-slate-50"
                    onClick={() => setAboutOpen(false)}
                  >
                    Corporate Transportation
                  </a>
                </div>
              )}
            </div>
          </div>

          <div className="flex shrink-0 items-center gap-5 pl-2 lg:gap-6 lg:pl-4">
            {isLoggedIn ? (
              <>
                <Link
                  href="/dashboard"
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  Dashboard
                </Link>
                <button
                  onClick={handleLogout}
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  href="/login"
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  Login
                </Link>
                <Link
                  href="/signup"
                  className={`${primaryNavTextClass} whitespace-nowrap`}
                >
                  Signup
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
