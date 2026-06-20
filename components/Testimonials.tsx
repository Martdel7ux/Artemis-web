"use client";

import { useCallback, useEffect, useState } from "react";

const DURATION = 7000;

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
  const go = useCallback((n: number) => setI((n + ITEMS.length) % ITEMS.length), []);
  const next = useCallback(() => setI((v) => (v + 1) % ITEMS.length), []);

  useEffect(() => {
    const t = setTimeout(next, DURATION);
    return () => clearTimeout(t);
  }, [i, next]);

  const item = ITEMS[i];

  return (
    <section id="testimonials" className="relative overflow-hidden bg-teal px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-5xl">
        <p className="eyebrow text-teal-ink/70">Our interns say</p>

        {/* Oversized quotation mark */}
        <div
          aria-hidden
          className="pointer-events-none -mb-10 font-display text-[10rem] leading-none text-white/25 md:text-[14rem]"
        >
          &ldquo;
        </div>

        <div className="relative min-h-[15rem] md:min-h-[13rem]">
          <blockquote
            key={`q-${i}`}
            className="max-w-4xl font-display text-[clamp(1.6rem,3.8vw,3rem)] font-normal leading-[1.18] text-white"
            style={{ animation: "tBlurIn 0.8s cubic-bezier(0.16,1,0.3,1) both" }}
          >
            {item.quote}
          </blockquote>

          <div
            key={`m-${i}`}
            className="mt-10 flex items-center gap-4"
            style={{ animation: "tBlurIn 0.8s 0.1s cubic-bezier(0.16,1,0.3,1) both" }}
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

        {/* Controls: progress segments + arrows */}
        <div className="mt-12 flex items-center justify-between">
          <div className="flex flex-1 gap-3 pr-8 sm:max-w-sm">
            {ITEMS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => go(idx)}
                aria-label={`Testimonial ${idx + 1}`}
                className="group relative h-1 flex-1 overflow-hidden rounded-full bg-white/30"
              >
                <span
                  className="absolute inset-y-0 left-0 rounded-full bg-white"
                  style={
                    idx === i
                      ? { animation: `tFill ${DURATION}ms linear both` }
                      : { width: idx < i ? "100%" : "0%" }
                  }
                />
              </button>
            ))}
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => go(i - 1)}
              aria-label="Previous"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/40 text-white transition hover:bg-white hover:text-teal-ink"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={() => go(i + 1)}
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
        @keyframes tBlurIn {
          from { opacity: 0; transform: translateY(18px); filter: blur(8px); }
          to { opacity: 1; transform: none; filter: blur(0); }
        }
        @keyframes tFill {
          from { width: 0%; }
          to { width: 100%; }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="tBlurIn"], [style*="tFill"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
