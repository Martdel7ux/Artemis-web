"use client";

import { useEffect, useRef, useState } from "react";

const STATS = [
  { value: 88, label: "AI SaaS Solutions" },
  { value: 88, label: "SMEs Helped" },
  { value: 88, label: "Clients & Partners" },
  { value: 88, label: "Internship Graduates" },
];

function useCountUp(target: number, run: boolean, duration = 1600) {
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

function Stat({ value, label, run }: { value: number; label: string; run: boolean }) {
  const n = useCountUp(value, run);
  return (
    <div className="text-center">
      <div className="font-display text-[clamp(3.5rem,9vw,7rem)] leading-none text-white">
        {n}
      </div>
      <p className="mt-3 text-sm font-medium uppercase tracking-wider text-white/70 sm:text-base">
        {label}
      </p>
    </div>
  );
}

export default function Stats() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [run, setRun] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setRun(true);
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="bg-teal-ink px-5 py-24 sm:px-8 md:py-32">
      <div ref={ref} className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow text-teal">Our ambition</p>
          <h2 className="display-xl mt-5 text-[clamp(1.9rem,4vw,3rem)] text-white">
            We aim to achieve our first&hellip;
          </h2>
        </div>
        <div className="mt-16 grid grid-cols-2 gap-y-12 gap-x-6 md:grid-cols-4 md:gap-8">
          {STATS.map((s) => (
            <Stat key={s.label} value={s.value} label={s.label} run={run} />
          ))}
        </div>
      </div>
    </section>
  );
}
