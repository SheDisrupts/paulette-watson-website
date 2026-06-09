import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BOOK_URL, trackBookingClick } from "@/lib/booking";

const NAV = [
  { label: "HOME", href: "https://www.paulettewatson.com" },
  { label: "ABOUT", href: "https://www.paulettewatson.com/about" },
  { label: "MY WORK", href: "https://www.paulettewatson.com/work" },
  { label: "AI LEADERSHIP", href: "/ai-leadership", internal: true },
  { label: "EVENTS", href: "https://www.paulettewatson.com/events" },
  { label: "SPEAKER", href: "https://www.paulettewatson.com/speaker" },
  { label: "BLOG", href: "https://www.paulettewatson.com/blog" },
  { label: "CONTACT", href: "https://www.paulettewatson.com/contact" },
];

export function SiteHeader({ onDark = false }: { onDark?: boolean }) {
  const [open, setOpen] = useState(false);
  const textColor = onDark ? "text-white" : "text-ink";
  return (
    <header className={`absolute top-0 left-0 right-0 z-40 ${textColor}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
        <Link to="/" className="font-display text-xl tracking-[0.25em] uppercase">
          Paulette Watson
        </Link>
        <nav className="hidden items-center gap-7 text-[11px] font-medium tracking-[0.18em] lg:flex">
          {NAV.map((n) => (
            <a key={n.label} href={n.href} className="opacity-90 transition hover:opacity-100">
              {n.label}
            </a>
          ))}
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackBookingClick("BOOK A CALL")}
            className={`border px-5 py-3 tracking-[0.18em] transition hover:bg-white hover:text-ink ${
              onDark ? "border-white text-white" : "border-ink text-ink hover:bg-ink hover:text-white"
            }`}
          >
            BOOK A CALL
          </a>
        </nav>
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="bg-background text-ink lg:hidden">
          <div className="flex flex-col gap-4 px-6 py-6 text-sm tracking-[0.18em]">
            {NAV.map((n) => (
              <a key={n.label} href={n.href}>
                {n.label}
              </a>
            ))}
            <a
              href={BOOK_URL}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackBookingClick("BOOK A CALL")}
              className="border border-ink px-5 py-3 text-center"
            >
              BOOK A CALL
            </a>
          </div>
        </div>
      )}
    </header>
  );
}