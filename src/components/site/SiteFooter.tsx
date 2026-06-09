import { BOOK_URL, trackBookingClick } from "@/lib/booking";

export function SiteFooter() {
  return (
    <footer className="bg-brand text-brand-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 lg:grid-cols-3 lg:px-10">
        <div>
          <div className="font-display text-2xl tracking-[0.2em] uppercase">Paulette Watson</div>
          <p className="mt-4 max-w-sm text-sm/relaxed opacity-80">
            AI Leadership Advisor, Workforce Transformation Expert and CEO of Academy Achievers.
          </p>
        </div>
        <div className="text-sm/relaxed opacity-80">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] opacity-70">Explore</div>
          <ul className="space-y-2">
            <li><a href="https://www.paulettewatson.com/about">About</a></li>
            <li><a href="https://www.paulettewatson.com/speaker">Speaker</a></li>
            <li><a href="https://www.paulettewatson.com/events">Events</a></li>
            <li><a href="/ai-leadership">AI Leadership</a></li>
          </ul>
        </div>
        <div className="text-sm/relaxed opacity-80">
          <div className="mb-3 text-xs uppercase tracking-[0.2em] opacity-70">Get in touch</div>
          <a
            href={BOOK_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackBookingClick("Book a Discovery Call")}
            className="inline-block border border-white/60 px-5 py-3 text-xs tracking-[0.2em] uppercase transition hover:bg-white hover:text-brand"
          >
            Book a Discovery Call
          </a>
        </div>
      </div>
      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-6 py-6 text-xs opacity-70 lg:px-10">
          © {new Date().getFullYear()} Paulette Watson MBE. All rights reserved.
        </div>
      </div>
    </footer>
  );
}