"use client";

import { useEffect, useState } from "react";
import { EASE, useInView, WordReveal } from "./anim";

const STATS = [
  { value: 88, label: "AI SaaS Solutions" },
  { value: 88, label: "SMEs Helped" },
  { value: 88, label: "Clients & Partners" },
  { value: 88, label: "Internship Graduates" },
];

function useCountUp(target: number, run: boolean, duration = 1700) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function Stat({
  value,
  label,
  run,
  index,
}: {
  value: number;
  label: string;
  run: boolean;
  index: number;
}) {
  const n = useCountUp(value, run);
  const delay = index * 130;
  return (
    <div className="relative px-3 text-center md:px-8">
      {/* Animated vertical divider (desktop) */}
      {index > 0 && (
        <span
          aria-hidden
          className="absolute left-0 top-1/2 hidden w-px -translate-y-1/2 bg-white/15 md:block"
          style={{
            height: run ? "72%" : "0%",
            transition: `height 1s ${EASE}`,
            transitionDelay: `${delay}ms`,
          }}
        />
      )}

      <div className="overflow-hidden">
        <div
          className="font-display text-[clamp(3.2rem,8vw,6.5rem)] leading-none text-white"
          style={{
            transform: run ? "translateY(0)" : "translateY(110%)",
            transition: `transform 0.9s ${EASE}`,
            transitionDelay: `${delay}ms`,
          }}
        >
          {n}
        </div>
      </div>

      <span
        className="mx-auto mt-5 block h-0.5 w-10 origin-center bg-teal"
        style={{
          transform: run ? "scaleX(1)" : "scaleX(0)",
          transition: `transform 0.8s ${EASE}`,
          transitionDelay: `${delay + 320}ms`,
        }}
      />
      <p className="mt-4 text-sm font-medium uppercase tracking-wider text-white/65 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const { ref, inView } = useInView<HTMLDivElement>(0.3);

  return (
    <section className="relative overflow-hidden bg-teal-ink px-5 py-28 sm:px-8 md:py-40">
      {/* Ambient: faint grid + drifting highlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage: "radial-gradient(ellipse 70% 60% at 50% 40%, #000 30%, transparent 75%)",
        }}
      />
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="stats-glow" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-teal">Our ambition</p>
          <WordReveal
            text="We aim to achieve our first…"
            start={100}
            className="mt-5 font-display text-[clamp(1.9rem,4vw,3rem)] font-normal leading-tight text-white"
          />
        </div>

        <div ref={ref} className="mt-16 grid grid-cols-2 gap-y-14 md:mt-20 md:grid-cols-4 md:gap-y-0">
          {STATS.map((s, i) => (
            <Stat key={s.label} value={s.value} label={s.label} run={inView} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .stats-glow {
          position: absolute;
          top: -20%;
          left: 50%;
          width: 50rem;
          height: 30rem;
          transform: translateX(-50%);
          border-radius: 9999px;
          filter: blur(100px);
          opacity: 0.5;
          background: radial-gradient(circle, rgba(22,201,195,0.22), transparent 65%);
          animation: statsGlow 20s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes statsGlow {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
          50% { transform: translateX(-42%) translateY(2rem) scale(1.12); }
        }
        @media (prefers-reduced-motion: reduce) {
          .stats-glow { animation: none; }
        }
      `}</style>
    </section>
  );
}
