"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const LINKS = [
  { href: "#solutions", label: "Solutions" },
  { href: "#academy", label: "Academy" },
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#partners", label: "Partners" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Over the dark hero video (top of page, menu closed) we invert to light tones.
  const onDark = !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:top-5 sm:px-6">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border pl-5 pr-3 transition-all duration-500 sm:pl-7 sm:pr-3.5 ${
          scrolled ? "py-2" : "py-2.5"
        } ${
          onDark
            ? "border-white/20 bg-white/10 shadow-[0_8px_40px_rgba(0,0,0,0.22)] backdrop-blur-2xl"
            : "border-white/70 bg-white/65 shadow-[0_10px_40px_rgba(15,20,19,0.10)] ring-1 ring-black/[0.03] backdrop-blur-2xl"
        }`}
      >
        <a href="#home" aria-label="Artemis Intelligence home">
          <Logo tone={onDark ? "white" : "ink"} />
        </a>

        <div className="hidden items-center gap-9 lg:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`link-underline text-[0.95rem] font-medium transition-colors ${
                onDark
                  ? "text-white/80 hover:text-white"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-4 lg:flex">
          <a
            href="#contact"
            className={`group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all ${
              onDark
                ? "border border-white/40 text-white hover:bg-white hover:text-ink"
                : "bg-ink text-paper hover:bg-teal-ink"
            }`}
          >
            Get in touch
            <svg
              width="14"
              height="14"
              viewBox="0 0 16 16"
              fill="none"
              className="transition-transform duration-300 group-hover:translate-x-0.5"
            >
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-full transition lg:hidden ${
            onDark ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5"
          }`}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-current transition-all duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile overlay */}
      <div
        className={`fixed inset-0 z-40 bg-paper transition-all duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-center gap-2 px-8">
          {LINKS.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="font-display text-4xl font-light tracking-tight text-ink transition-transform"
              style={{
                transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(12px)",
                transitionProperty: "opacity, transform",
                transitionDuration: "500ms",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-6 py-3 text-base font-medium text-paper"
          >
            Get in touch
          </a>
        </div>
      </div>
    </header>
  );
}
