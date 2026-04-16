import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/book-flight", label: "Flights" },
  { href: "/solutions", label: "Solutions" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-6 text-sm text-slate-500 md:flex-row">
        <p className="mb-0 md:w-1/3">© 2026 RideTego. All rights reserved.</p>

        <Link
          href="/"
          className="flex items-center justify-center md:w-1/3"
          aria-label="RideTego"
        >
          <Image
            src="/tego-logo.png"
            alt="RideTego logo"
            width={120}
            height={40}
            className="h-auto w-[120px]"
          />
        </Link>

        <ul className="flex flex-wrap items-center justify-center gap-5 md:w-1/3 md:justify-end">
          {footerLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="transition hover:text-blue-700">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
