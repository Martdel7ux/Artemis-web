"use client";

import type { ReactNode } from "react";
import { EASE, useInView, WordReveal, FadeUp } from "./anim";

const SOLUTIONS: {
  no: string;
  title: string;
  tagline: string;
  body: string;
  href?: string;
  icon: ReactNode;
}[] = [
  {
    no: "01",
    title: "AI Agents",
    tagline: "Engineered for scale. Built to commercialize.",
    body: "Autonomous, multi agent systems that take on real work, reasoning over your data, making decisions, and explaining the logic in plain terms. Your launchpad to impact.",
    icon: (
      <path
        d="M16 4v6m0 12v6M4 16h6m12 0h6M7.5 7.5l4 4m9 9 4 4m0-17-4 4m-9 9-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    no: "02",
    title: "Software as a Service",
    tagline: "Enterprise grade. Tailored intelligence.",
    body: "Production ready platforms shaped around your workflow, not the other way around. Secure, compliant, and built around you, from first prototype to scaled deployment.",
    icon: (
      <>
        <rect x="5" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 11h22M9 26h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    no: "03",
    title: "Artemis Academy",
    tagline: "Hands on learning. Global collaboration.",
    body: "The Graduate Readiness Accelerator, a fast track to becoming a skilled, mentored, and experienced AI professional. Empowering tomorrow's innovation.",
    href: "#academy",
    icon: (
      <path
        d="M16 5 4 11l12 6 12-6-12-6Zm-8 9v6c0 1.7 3.6 4 8 4s8-2.3 8-4v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

function SolutionCard({
  item,
  index,
}: {
  item: (typeof SOLUTIONS)[number];
  index: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  const Wrapper = (item.href ? "a" : "div") as "a" | "div";

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(26px)",
        transition: `opacity 0.8s ${EASE}, transform 0.8s ${EASE}`,
        transitionDelay: `${index * 120}ms`,
      }}
    >
      <Wrapper
        href={item.href}
        className="group relative flex h-full flex-col rounded-3xl border border-line bg-paper p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-ink/10 hover:shadow-[0_30px_60px_-28px_rgba(15,20,19,0.22)] md:p-10"
      >
        {/* Header: number + icon */}
        <div className="flex items-center justify-between">
          <span className="font-display text-sm text-ink-soft/50">{item.no}</span>
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper-soft text-teal-deep transition-colors duration-500 group-hover:bg-teal-deep group-hover:text-white">
            <svg width="26" height="26" viewBox="0 0 32 32" fill="none">
              {item.icon}
            </svg>
          </span>
        </div>

        {/* Draw-in hairline on hover */}
        <div className="relative mt-8 h-px w-full overflow-hidden bg-line">
          <span className="absolute inset-y-0 left-0 w-0 bg-teal-deep transition-all duration-500 ease-out group-hover:w-full" />
        </div>

        <h3 className="mt-7 font-display text-2xl text-ink md:text-[1.7rem]">
          {item.title}
        </h3>
        <p className="mt-2 text-sm font-medium text-teal-deep">{item.tagline}</p>
        <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-ink-soft">
          {item.body}
        </p>

        {item.href && (
          <span className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-teal-deep">
            Discover the Academy
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path
                d="M3 8h10M9 4l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </svg>
          </span>
        )}
      </Wrapper>
    </div>
  );
}

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-paper px-5 py-28 sm:px-8 md:py-44"
    >
      {/* Ambient drifting glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="sol-glow" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Intro */}
        <div className="grid gap-8 md:grid-cols-[1fr_0.78fr] md:items-end">
          <div>
            <FadeUp>
              <p className="eyebrow inline-flex items-center gap-3 text-teal-deep">
                <span className="h-px w-8 bg-teal-deep/60" />
                What we do
              </p>
            </FadeUp>
            <WordReveal
              text="Two ways we create value: solutions that ship, and people who lead."
              highlight="value"
              start={120}
              className="mt-6 max-w-2xl font-display text-[clamp(1.9rem,4.2vw,3.4rem)] font-normal leading-[1.12] tracking-tight text-ink"
            />
          </div>

          <FadeUp delay={200} className="md:pb-2">
            <p className="max-w-md text-lg leading-relaxed text-ink-soft">
              Comprehensive solutions designed to help businesses grow and talent
              flourish, from autonomous AI to the people who will build what comes
              next.
            </p>
          </FadeUp>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:mt-20 md:grid-cols-3">
          {SOLUTIONS.map((item, i) => (
            <SolutionCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .sol-glow {
          position: absolute;
          top: -10rem;
          right: -6rem;
          width: 38rem;
          height: 38rem;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.5;
          background: radial-gradient(circle, rgba(22,201,195,0.16), transparent 66%);
          animation: solDrift 26s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes solDrift {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-4rem, 3rem) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .sol-glow { animation: none; }
        }
      `}</style>
    </section>
  );
}
