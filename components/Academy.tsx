"use client";

import { EASE, useInView, WordReveal, FadeUp } from "./anim";

const STEPS = [
  {
    title: "Skilled",
    body: "Hands on work on real AI products such as agents, SaaS, and cloud, with the tools and practices teams actually use in production.",
  },
  {
    title: "Mentored",
    body: "Guidance from seasoned international professionals who push you to reach beyond your limits and think independently.",
  },
  {
    title: "Experienced",
    body: "Ship alongside a globally distributed team, collaborate across borders, and graduate ready for what's next.",
  },
];

function Stepper() {
  const { ref, inView } = useInView<HTMLDivElement>(0.25);
  return (
    <div ref={ref} className="relative pl-2">
      {/* track */}
      <span aria-hidden className="absolute left-[21px] top-6 bottom-6 w-px bg-line" />
      {/* animated fill */}
      <span
        aria-hidden
        className="absolute left-[21px] top-6 bottom-6 w-px origin-top bg-teal-deep"
        style={{
          transform: inView ? "scaleY(1)" : "scaleY(0)",
          transition: `transform 1.3s ${EASE}`,
          transitionDelay: "120ms",
        }}
      />

      <ul className="space-y-12">
        {STEPS.map((s, i) => {
          const delay = 200 + i * 240;
          return (
            <li key={s.title} className="relative flex items-start gap-6">
              {/* dot */}
              <span
                className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border font-display text-sm"
                style={{
                  backgroundColor: inView ? "var(--color-teal-deep)" : "var(--color-paper-soft)",
                  borderColor: inView ? "var(--color-teal-deep)" : "var(--color-line)",
                  color: inView ? "#fff" : "var(--color-ink-soft)",
                  transition: `background-color 0.6s ${EASE}, border-color 0.6s ${EASE}, color 0.6s ${EASE}`,
                  transitionDelay: `${delay}ms`,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>

              <div
                className="pt-1"
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? "none" : "translateX(16px)",
                  transition: `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`,
                  transitionDelay: `${delay + 80}ms`,
                }}
              >
                <h3 className="font-display text-2xl text-ink">{s.title}</h3>
                <p className="mt-2 max-w-md text-[0.97rem] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden border-y border-line bg-paper-soft px-5 py-28 sm:px-8 md:py-40"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="academy-glow" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-14 md:grid-cols-[0.95fr_1.05fr] md:gap-20">
          {/* Intro (sticky on desktop) */}
          <div className="md:sticky md:top-28 md:self-start">
            <FadeUp>
              <p className="eyebrow inline-flex items-center gap-3 text-teal-deep">
                <span className="h-px w-8 bg-teal-deep/60" />
                Artemis Academy
              </p>
            </FadeUp>
            <WordReveal
              text="The Graduate Readiness Accelerator"
              highlight="Accelerator"
              start={120}
              className="mt-6 font-display text-[clamp(2rem,4.4vw,3.6rem)] font-normal leading-[1.1] tracking-tight text-ink"
            />
            <FadeUp delay={220}>
              <p className="mt-7 max-w-md text-lg leading-relaxed text-ink-soft">
                Be one of the first to join, a fast track to becoming a future ready
                graduate who is skilled, mentored, and experienced. We invest in talent
                the way we invest in technology: with intention, and with empathy.
              </p>
            </FadeUp>
          </div>

          {/* Stepper */}
          <Stepper />
        </div>

        {/* CTA banner */}
        <FadeUp delay={80} className="mt-20 md:mt-28">
          <div className="flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-ink px-8 py-10 sm:flex-row sm:items-center sm:justify-between md:px-12 md:py-12">
            <div>
              <p className="font-display text-2xl text-paper md:text-3xl">
                Ready to accelerate your career?
              </p>
              <p className="mt-2 text-paper/65">
                Applications for the first cohort are open now.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-teal-ink transition-all hover:bg-white"
            >
              Join now
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
            </a>
          </div>
        </FadeUp>
      </div>

      <style>{`
        .academy-glow {
          position: absolute;
          bottom: -12rem;
          left: -8rem;
          width: 34rem;
          height: 34rem;
          border-radius: 9999px;
          filter: blur(90px);
          opacity: 0.5;
          background: radial-gradient(circle, rgba(22,201,195,0.16), transparent 66%);
          animation: academyGlow 24s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes academyGlow {
          0%, 100% { transform: translate(0,0) scale(1); }
          50% { transform: translate(4rem,-3rem) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .academy-glow { animation: none; }
        }
      `}</style>
    </section>
  );
}
