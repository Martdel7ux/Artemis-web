"use client";

import { WordReveal, FadeUp } from "./anim";

const INSTITUTIONAL = [
  "Microsoft",
  "CYENS Centre of Excellence",
  "DigiNN Cyprus",
  "Logicom Distribution",
  "MongoDB",
  "University of Cyprus",
];

const STRATEGIC = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"];

function Marquee({
  items,
  direction = "left",
  duration = 38,
  className = "",
}: {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
}) {
  return (
    <div
      className="marquee-mask relative overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
        WebkitMaskImage:
          "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)",
      }}
    >
      <div
        className="flex w-max items-center gap-16 hover:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {[...items, ...items].map((name, idx) => (
          <span
            key={idx}
            className={`whitespace-nowrap font-display text-2xl text-ink/35 transition-colors duration-300 hover:text-ink md:text-3xl ${className}`}
          >
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Partners() {
  return (
    <section id="partners" className="relative overflow-hidden bg-paper px-5 py-28 sm:px-8 md:py-40">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow text-teal-deep">Trusted partners</p>
          </FadeUp>
          <WordReveal
            text="Backed by institutions that build the future."
            highlight="future"
            start={120}
            className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.6rem)] font-normal leading-[1.12] tracking-tight text-ink"
          />
        </div>
      </div>

      {/* Institutional marquee (full bleed) */}
      <FadeUp delay={120} className="mt-16 md:mt-20">
        <Marquee items={INSTITUTIONAL} direction="left" duration={40} />
      </FadeUp>

      {/* Strategic marquee, opposite direction */}
      <div className="mx-auto mt-20 max-w-7xl text-center">
        <FadeUp>
          <p className="eyebrow text-ink-soft/60">Our strategic partners</p>
        </FadeUp>
      </div>
      <FadeUp delay={80} className="mt-8">
        <Marquee items={STRATEGIC} direction="right" duration={32} className="!text-ink/25" />
      </FadeUp>

      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marquee-mask > div { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
