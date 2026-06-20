"use client";

import { EASE, useInView, WordReveal, FadeUp } from "./anim";

const VALUES = [
  { k: "Empathy", v: "Technology in service of people: local shops, SMEs, and aspiring talent." },
  { k: "Craft", v: "Cutting edge AI design, architecture, and deployment, done with rigour." },
  { k: "Scale", v: "Tailored AI and cloud that helps businesses grow exponentially." },
];

/** A single value pillar with a draw-in hairline and staggered fade. */
function Pillar({
  index,
  title,
  body,
  delay,
}: {
  index: number;
  title: string;
  body: string;
  delay: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const fade = (d: number) => ({
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(14px)",
    transition: `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`,
    transitionDelay: `${delay + d}ms`,
  });
  return (
    <div ref={ref} className="text-center md:text-left">
      <div className="relative h-px w-full overflow-hidden bg-line/70">
        <span
          className="absolute inset-y-0 left-0 bg-teal-deep"
          style={{
            width: inView ? "100%" : "0%",
            transition: `width 1.1s ${EASE}`,
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
      <p className="mt-6 font-display text-sm text-teal-deep" style={fade(120)}>
        {String(index).padStart(2, "0")}
      </p>
      <h3 className="mt-2 font-display text-2xl text-ink md:text-[1.7rem]" style={fade(180)}>
        {title}
      </h3>
      <p className="mx-auto mt-3 max-w-xs text-[0.97rem] leading-relaxed text-ink-soft md:mx-0" style={fade(240)}>
        {body}
      </p>
    </div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  const { ref, inView } = useInView<HTMLParagraphElement>(0.5);
  return (
    <p
      ref={ref}
      className="eyebrow inline-flex items-center gap-3 text-teal-deep"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(10px)",
        transition: `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`,
      }}
    >
      <span className="h-px w-8 bg-teal-deep/60" />
      {children}
      <span className="h-px w-8 bg-teal-deep/60" />
    </p>
  );
}

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-paper px-5 py-28 sm:px-8 md:py-44">
      {/* Ambient drifting motion */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="about-blob about-blob-a" />
        <div className="about-blob about-blob-b" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Statement */}
        <div className="text-center">
          <Eyebrow>About Artemis Intelligence</Eyebrow>

          <WordReveal
            text="We combine technology with empathy to empower local shops, SMEs, and aspiring AI talent."
            highlight="empathy"
            start={120}
            className="mx-auto mt-9 max-w-4xl font-display text-[clamp(1.9rem,4.6vw,3.8rem)] font-normal leading-[1.12] tracking-tight text-ink"
          />

          <FadeUp delay={250} className="mx-auto mt-10 max-w-2xl">
            <p className="text-base leading-relaxed text-ink-soft sm:text-lg">
              Artemis is powered by a globally distributed team of seasoned,
              international technology professionals and business innovators, pioneers
              in cutting edge AI design, architecture, and deployment. We provide
              groundbreaking solutions that use tailored AI and cloud computing to
              transform businesses, enabling them to grow exponentially.
            </p>
          </FadeUp>
        </div>

        {/* Value pillars */}
        <div className="mt-24 grid gap-12 md:mt-32 md:grid-cols-3 md:gap-10">
          {VALUES.map((item, i) => (
            <Pillar
              key={item.k}
              index={i + 1}
              title={item.k}
              body={item.v}
              delay={i * 140}
            />
          ))}
        </div>

        {/* CEO quote */}
        <FadeUp delay={100} threshold={0.4} className="mx-auto mt-28 max-w-3xl text-center md:mt-40">
          <span aria-hidden className="font-display text-6xl leading-none text-teal/40">
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-display text-[clamp(1.5rem,3vw,2.4rem)] font-normal leading-snug text-ink">
            Technology with empathy is not a slogan; it&rsquo;s how we decide what to
            build, and who we build it for.
          </blockquote>
          <figcaption className="mt-8 flex items-center justify-center gap-4">
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm text-paper">
              MG
            </span>
            <span className="text-left text-sm">
              <span className="block font-semibold text-ink">Michael Glaros</span>
              <span className="block text-ink-soft">CEO, Artemis Intelligence</span>
            </span>
          </figcaption>
        </FadeUp>
      </div>

      <style>{`
        .about-blob {
          position: absolute;
          border-radius: 9999px;
          filter: blur(80px);
          opacity: 0.55;
          will-change: transform;
        }
        .about-blob-a {
          top: -8rem;
          left: -6rem;
          width: 32rem;
          height: 32rem;
          background: radial-gradient(circle, rgba(22,201,195,0.18), transparent 68%);
          animation: aboutDriftA 22s ease-in-out infinite;
        }
        .about-blob-b {
          bottom: -10rem;
          right: -8rem;
          width: 36rem;
          height: 36rem;
          background: radial-gradient(circle, rgba(13,156,151,0.14), transparent 68%);
          animation: aboutDriftB 28s ease-in-out infinite;
        }
        @keyframes aboutDriftA {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4rem, 3rem) scale(1.08); }
        }
        @keyframes aboutDriftB {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-5rem, -2rem) scale(1.1); }
        }
        @media (prefers-reduced-motion: reduce) {
          .about-blob { animation: none; }
        }
      `}</style>
    </section>
  );
}
