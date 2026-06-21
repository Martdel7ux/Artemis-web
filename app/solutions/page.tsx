import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { FadeUp } from "@/components/anim";

export const metadata: Metadata = {
  title: "Solutions — Artemis Intelligence",
  description:
    "AI agents, enterprise-grade SaaS, and the Artemis Academy. Tailored intelligence engineered to help businesses grow and talent flourish.",
};

const OFFERINGS = [
  {
    no: "01",
    title: "AI Agents",
    tagline: "Engineered for scale. Built to commercialize.",
    body: "Autonomous, multi agent systems that take on real work. They reason over your data, make decisions, and explain their logic in plain terms, so you stay in control while the work gets done.",
    points: [
      "Multi agent workflows tuned to your processes",
      "Transparent reasoning you can audit and trust",
      "Connected to your tools, data, and systems",
      "From proof of concept to production at scale",
    ],
  },
  {
    no: "02",
    title: "Software as a Service",
    tagline: "Enterprise grade. Tailored intelligence.",
    body: "Production ready platforms shaped around your workflow, not the other way around. Secure, compliant, and built around you, from first prototype to scaled deployment.",
    points: [
      "Bespoke platforms designed around your goals",
      "Security and compliance built in from day one",
      "Cloud native, resilient, and ready to grow",
      "Human oversight, aligned with EU GDPR and the AI Act",
    ],
  },
  {
    no: "03",
    title: "Artemis Academy",
    tagline: "Hands on learning. Global collaboration.",
    body: "The Graduate Readiness Accelerator: a fast track to becoming a skilled, mentored, and experienced AI professional, empowering tomorrow's innovation.",
    points: [
      "Real projects, real teams, real impact",
      "Mentorship from seasoned professionals",
      "Global, collaborative, and future ready",
      "A direct path into the industry",
    ],
    href: "/academy",
  },
];

function Feature({
  o,
  index,
}: {
  o: (typeof OFFERINGS)[number];
  index: number;
}) {
  const reverse = index % 2 === 1;
  return (
    <div className="border-t border-line py-16 md:py-24">
      <div className="grid items-start gap-10 md:grid-cols-2 md:gap-16">
        <FadeUp className={reverse ? "md:order-2" : ""}>
          <span className="font-display text-sm text-ink-soft/50">{o.no}</span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4vw,3.2rem)] leading-tight text-ink">
            {o.title}
          </h2>
          <p className="mt-3 text-base font-medium text-teal-deep">{o.tagline}</p>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-ink-soft">{o.body}</p>
          {o.href && (
            <Link
              href={o.href}
              className="group mt-7 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors hover:text-teal-deep"
            >
              Explore the Academy
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
            </Link>
          )}
        </FadeUp>

        <FadeUp delay={150} className={reverse ? "md:order-1" : ""}>
          <ul className="space-y-px overflow-hidden rounded-2xl border border-line">
            {o.points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-4 bg-paper px-6 py-5 text-ink-soft"
              >
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-deep" />
                <span className="text-[0.97rem] leading-relaxed">{p}</span>
              </li>
            ))}
          </ul>
        </FadeUp>
      </div>
    </div>
  );
}

export default function SolutionsPage() {
  return (
    <main>
      <PageHero
        eyebrow="Solutions"
        title="Tailored intelligence, engineered to scale."
        highlight="intelligence,"
        intro="Two ways we create value: solutions that ship, and people who lead. From autonomous AI to enterprise platforms, everything we build is shaped around you."
      />

      <section className="bg-paper px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {OFFERINGS.map((o, i) => (
            <Feature key={o.title} o={o} index={i} />
          ))}
        </div>
      </section>

      <CTABanner
        title="Ready to put AI to work?"
        body="Let's scope what tailored intelligence looks like for your business."
        cta="Start a project"
      />
    </main>
  );
}
