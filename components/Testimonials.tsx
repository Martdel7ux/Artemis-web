"use client";

import { useCallback, useEffect, useState } from "react";

const ITEMS = [
  {
    quote:
      "They encouraged me to reach beyond my limits, which helped me to grow both personally and professionally.",
    name: "Nasser Aker",
    role: "Intern, Artemis Intelligence",
    initials: "NA",
  },
  {
    quote:
      "I've always felt supported and guided, while also being encouraged to think independently and grow with my team.",
    name: "Eman Ishtawi",
    role: "Intern, Artemis Intelligence",
    initials: "EI",
  },
  {
    quote:
      "The mentorship and collaboration at Artemis have helped me grow by guiding me through challenges and encouraging me to think differently.",
    name: "Riham Katout",
    role: "Intern, Artemis Intelligence",
    initials: "RK",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const next = useCallback(() => setI((v) => (v + 1) % ITEMS.length), []);
  const prev = () => setI((v) => (v - 1 + ITEMS.length) % ITEMS.length);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

  const item = ITEMS[i];

  return (
    <section id="testimonials" className="bg-teal px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-teal-ink/70">Our interns say</p>

        <div className="mt-10 min-h-[18rem] md:min-h-[16rem]">
          <blockquote
            key={i}
            className="font-display text-[clamp(1.6rem,3.6vw,2.9rem)] leading-tight text-white"
            style={{ animation: "fadeUp 0.7s var(--ease-out-soft) both" }}
          >
            &ldquo;{item.quote}&rdquo;
          </blockquote>

          <div
            key={`m-${i}`}
            className="mt-8 flex items-center gap-4"
            style={{ animation: "fadeUp 0.7s 0.05s var(--ease-out-soft) both" }}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-teal-ink font-display text-sm text-white">
              {item.initials}
            </span>
            <div>
              <p className="font-semibold text-white">{item.name}</p>
              <p className="text-sm text-white/75">{item.role}</p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between">
          <div className="flex gap-2.5">
            {ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Go to testimonial ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === i ? "w-8 bg-white" : "w-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-teal-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={next}
              aria-label="Next"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-teal-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: none; }
        }
      `}</style>
    </section>
  );
}
