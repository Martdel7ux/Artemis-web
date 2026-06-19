"use client";

import { useState } from "react";
import Logo from "./Logo";

const EMAIL = "mglaros@artemisindustries.tech";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Graceful fallback: open the user's mail client pre-filled.
    const subject = encodeURIComponent(`Hello from ${form.first} ${form.last}`.trim());
    const body = encodeURIComponent(`${form.message}\n\n${form.first} ${form.last}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  const field =
    "w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-ink-soft/50 focus:border-teal-deep focus:outline-none transition-colors";

  return (
    <section id="contact" className="border-t border-line bg-paper-soft px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">
        {/* Left: invitation */}
        <div>
          <p className="eyebrow text-teal-deep">Contact</p>
          <h2 className="display-xl mt-5 text-[clamp(2.2rem,5vw,4rem)] text-ink">
            Let&rsquo;s work together.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
            Whether you&rsquo;re an SME ready to put AI to work or a graduate ready to
            build it, we&rsquo;d love to hear from you.
          </p>

          <div className="mt-12 space-y-6">
            <div>
              <p className="eyebrow text-ink-soft/70">Studio</p>
              <p className="mt-2 text-lg text-ink">62 Pericleous Street, 2021 Strovolo</p>
              <p className="text-ink-soft">Nicosia, Cyprus</p>
            </div>
            <div>
              <p className="eyebrow text-ink-soft/70">Email</p>
              <a
                href={`mailto:${EMAIL}`}
                className="link-underline mt-2 inline-block text-lg text-ink"
              >
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="mt-12">
            <Logo />
          </div>
        </div>

        {/* Right: form */}
        <div className="rounded-2xl border border-line bg-paper p-7 shadow-[0_1px_0_rgba(15,20,19,0.02)] sm:p-9">
          {sent ? (
            <div className="flex h-full min-h-[20rem] flex-col items-center justify-center text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-teal/15 text-teal-deep">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <path d="m5 13 4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
              <h3 className="mt-5 font-display text-2xl text-ink">Thank you</h3>
              <p className="mt-2 max-w-xs text-ink-soft">
                Your message is ready in your mail app. We&rsquo;ll be in touch shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div className="grid gap-7 sm:grid-cols-2">
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                    First name *
                  </span>
                  <input
                    required
                    value={form.first}
                    onChange={(e) => setForm({ ...form, first: e.target.value })}
                    className={field}
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                    Last name
                  </span>
                  <input
                    value={form.last}
                    onChange={(e) => setForm({ ...form, last: e.target.value })}
                    className={field}
                  />
                </label>
              </div>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                  Email *
                </span>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={field}
                />
              </label>
              <label className="block">
                <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
                  Write a message
                </span>
                <textarea
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${field} resize-none`}
                />
              </label>
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-ink px-8 py-4 text-base font-medium text-paper transition-all hover:bg-teal-ink sm:w-auto"
              >
                Send message
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M3 8h10M9 4l4 4-4 4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </svg>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
