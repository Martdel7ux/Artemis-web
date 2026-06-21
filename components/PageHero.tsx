"use client";

import { WordReveal, FadeUp } from "./anim";

/**
 * Premium, minimal page header used across detail pages.
 * Light background, big top padding to clear the floating nav, ambient glow.
 */
export default function PageHero({
  eyebrow,
  title,
  highlight,
  intro,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  intro: string;
}) {
  return (
    <header className="relative overflow-hidden bg-paper px-5 pb-16 pt-36 text-center sm:px-8 md:pb-24 md:pt-52">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="ph-glow" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <FadeUp>
          <p className="eyebrow inline-flex items-center gap-3 text-teal-deep">
            <span className="h-px w-8 bg-teal-deep/60" />
            {eyebrow}
            <span className="h-px w-8 bg-teal-deep/60" />
          </p>
        </FadeUp>

        <WordReveal
          text={title}
          highlight={highlight}
          start={120}
          className="mx-auto mt-7 max-w-3xl font-display text-[clamp(2.4rem,5.5vw,4.6rem)] font-normal leading-[1.06] tracking-tight text-ink"
        />

        <FadeUp delay={250}>
          <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        </FadeUp>
      </div>

      <style>{`
        .ph-glow {
          position: absolute;
          top: -14rem;
          left: 50%;
          width: 46rem;
          height: 36rem;
          transform: translateX(-50%);
          border-radius: 9999px;
          filter: blur(100px);
          opacity: 0.5;
          background: radial-gradient(circle, rgba(22,201,195,0.16), transparent 66%);
          animation: phGlow 24s ease-in-out infinite;
          will-change: transform;
        }
        @keyframes phGlow {
          0%, 100% { transform: translateX(-50%) translateY(0) scale(1); }
          50% { transform: translateX(-46%) translateY(2rem) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) { .ph-glow { animation: none; } }
      `}</style>
    </header>
  );
}
