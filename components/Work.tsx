"use client";

import { EASE, useInView, WordReveal, FadeUp } from "./anim";

const PROJECTS = [
  {
    name: "PromoGoat",
    category: "AdTech · Multi agent",
    body: "A practical advertising tool for small and medium businesses. Under the hood, PromoGoat runs on a multi agent workflow and custom allocation engine that weighs reach, cost, intent, and fit, then explains the logic in simple terms.",
  },
  {
    name: "TideMRV",
    category: "Climate · SaaS",
    body: "An AI powered SaaS platform designed to take the pain out of carbon project certification: less stress, lower costs, and more confidence for project developers who want their work in the field to translate into real, market ready carbon credits.",
  },
  {
    name: "OPICA",
    category: "Knowledge · Automation",
    body: "An AI powered platform that redefines how organizations manage their documentation and knowledge lifecycle, bringing automation, intelligence, and intuitive, user centered support to every layer of procedural execution and document management.",
  },
  {
    name: "MVM Strategies",
    category: "Advisory · Enablement",
    body: "Helps small to midsize businesses leverage AI to enhance productivity. A curated program is designed specifically for teams, with services recommended and customized to the business and its goals.",
  },
];

function Row({ project, index }: { project: (typeof PROJECTS)[number]; index: number }) {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <div
      ref={ref}
      className="group border-t border-line last:border-b"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transition: `opacity 0.7s ${EASE}, transform 0.7s ${EASE}`,
        transitionDelay: `${index * 110}ms`,
      }}
    >
      <div className="flex items-baseline gap-4 py-8 transition-colors duration-500 md:gap-8 md:py-10">
        <span className="font-display text-sm text-ink-soft/50 transition-colors duration-300 group-hover:text-teal-deep">
          {String(index + 1).padStart(2, "0")}
        </span>

        <h3 className="flex-1 font-display text-3xl text-ink transition-all duration-500 group-hover:translate-x-2 group-hover:text-teal-deep md:text-5xl">
          {project.name}
        </h3>

        <span className="hidden text-sm font-medium uppercase tracking-wider text-teal-deep sm:block">
          {project.category}
        </span>

        <svg
          width="22"
          height="22"
          viewBox="0 0 16 16"
          fill="none"
          className="shrink-0 -translate-x-2 text-ink opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100"
        >
          <path
            d="M3 8h10M9 4l4 4-4 4"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Description: always visible on mobile, hover-reveal on desktop */}
      <div className="overflow-hidden pb-2 transition-all duration-500 ease-out md:max-h-0 md:pb-0 md:opacity-0 md:group-hover:max-h-48 md:group-hover:pb-10 md:group-hover:opacity-100">
        <p className="max-w-2xl pl-8 text-[0.97rem] leading-relaxed text-ink-soft md:pl-[3.25rem]">
          {project.category && (
            <span className="mb-2 block text-xs font-medium uppercase tracking-wider text-teal-deep sm:hidden">
              {project.category}
            </span>
          )}
          {project.body}
        </p>
      </div>
    </div>
  );
}

export default function Work() {
  return (
    <section id="work" className="relative bg-paper px-5 py-28 sm:px-8 md:py-44">
      <div className="mx-auto max-w-7xl">
        {/* Intro (centered) */}
        <div className="mx-auto max-w-3xl text-center">
          <FadeUp>
            <p className="eyebrow text-teal-deep">Selected work</p>
          </FadeUp>
          <WordReveal
            text="Collaborations shipping in the real world."
            highlight="real"
            start={120}
            className="mx-auto mt-6 max-w-2xl font-display text-[clamp(2rem,4.4vw,3.6rem)] font-normal leading-[1.12] tracking-tight text-ink"
          />
          <FadeUp delay={220}>
            <p className="mx-auto mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
              From advertising to climate to knowledge management: tailored AI, built
              with partners, solving problems that matter.
            </p>
          </FadeUp>
        </div>

        {/* Index list */}
        <div className="mt-16 md:mt-20">
          {PROJECTS.map((p, i) => (
            <Row key={p.name} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
