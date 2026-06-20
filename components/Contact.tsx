"use client";

import { useState } from "react";
import Logo from "./Logo";
import { WordReveal, FadeUp } from "./anim";

const EMAIL = "mglaros@artemisindustries.tech";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ first: "", last: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Hello from ${form.first} ${form.last}`.trim());
    const body = encodeURIComponent(`${form.message}\n\n${form.first} ${form.last}\n${form.email}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-line bg-paper-soft px-5 py-28 sm:px-8 md:py-40"
    >
      <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-2 md:gap-20">
        {/* Left: invitation */}
        <div>
          <FadeUp>
            <p className="eyebrow text-teal-deep">Contact</p>
          </FadeUp>
          <WordReveal
            text="Let's work together."
            highlight="together."
            start={100}
            className="mt-5 font-display text-[clamp(2.4rem,5.5vw,4.4rem)] font-normal leading-[1.05] tracking-tight text-ink"
          />

          <FadeUp delay={180}>
            <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
              Whether you&rsquo;re an SME ready to put AI to work or a graduate ready to
              build it, we&rsquo;d love to hear from you.
            </p>
          </FadeUp>

          <FadeUp delay={260}>
            <div className="mt-12 space-y-6">
              <div>
                <p className="eyebrow text-ink-soft/70">Studio</p>
                <p className="mt-2 text-lg text-ink">62 Pericleous Street, 2021 Strovolo</p>
                <p className="text-ink-soft">Nicosia, Cyprus</p>
              </div>
              <div>
                <p className="eyebrow text-ink-soft/70">Email</p>
                <a href={`mailto:${EMAIL}`} className="link-underline mt-2 inline-block text-lg text-ink">
                  {EMAIL}
                </a>
              </div>
            </div>
            <div className="mt-12">
              <Logo />
            </div>
          </FadeUp>
        </div>

        {/* Right: form */}
        <FadeUp delay={120} threshold={0.2}>
          <div className="rounded-3xl border border-line bg-paper p-7 shadow-[0_20px_50px_-30px_rgba(15,20,19,0.2)] sm:p-9">
            {sent ? (
              <div className="flex h-full min-h-[22rem] flex-col items-center justify-center text-center">
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
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid gap-8 sm:grid-cols-2">
                  <Field label="First name *" required value={form.first} onChange={(v) => setForm({ ...form, first: v })} />
                  <Field label="Last name" value={form.last} onChange={(v) => setForm({ ...form, last: v })} />
                </div>
                <Field label="Email *" type="email" required value={form.email} onChange={(v) => setForm({ ...form, email: v })} />
                <Field label="Write a message" textarea value={form.message} onChange={(v) => setForm({ ...form, message: v })} />

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
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const base =
    "peer w-full border-0 border-b border-ink/20 bg-transparent py-3 text-ink placeholder:text-transparent focus:outline-none";
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      <div className="relative">
        {textarea ? (
          <textarea
            rows={4}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`${base} resize-none`}
          />
        ) : (
          <input
            type={type}
            required={required}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={base}
          />
        )}
        <span className="pointer-events-none absolute bottom-0 left-0 h-px w-full origin-left scale-x-0 bg-teal-deep transition-transform duration-500 ease-out peer-focus:scale-x-100" />
      </div>
    </label>
  );
}
