import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { FadeUp } from "@/components/anim";

export const metadata: Metadata = {
  title: "Artemis Academy — Graduate Readiness Accelerator",
  description:
    "A fast track to becoming a skilled, mentored, and experienced AI professional. Hands on learning, global collaboration, empowering tomorrow's innovation.",
};

const PILLARS = [
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

const STEPS = [
  { t: "Apply", d: "Tell us about yourself and your ambitions. We look for curiosity and drive, not just credentials." },
  { t: "Learn by building", d: "Join a team and work on real products from day one, supported every step of the way." },
  { t: "Get mentored", d: "Pair with experienced professionals who help you grow technically and personally." },
  { t: "Graduate ready", d: "Leave skilled, mentored, and experienced, with real work behind you and a network around you." },
];

export default function AcademyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Artemis Academy"
        title="The Graduate Readiness Accelerator"
        highlight="Accelerator"
        intro="Be one of the first to join, a fast track to becoming a future ready graduate who is skilled, mentored, and experienced. We invest in talent the way we invest in technology."
      />

      {/* Pillars */}
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <p className="eyebrow text-teal-deep">What you&rsquo;ll gain</p>
          </FadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {PILLARS.map((p, i) => (
              <FadeUp key={p.title} delay={i * 120}>
                <article className="flex h-full flex-col rounded-3xl border border-line bg-paper p-8">
                  <span className="font-display text-3xl text-teal-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ink">{p.title}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </article>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-line bg-paper-soft px-5 py-16 sm:px-8 md:py-28">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <h2 className="font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">
              How it works
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-2">
            {STEPS.map((s, i) => (
              <FadeUp key={s.t} delay={i * 100} className="contents">
                <div className="bg-paper p-8 md:p-10">
                  <span className="font-display text-sm text-ink-soft/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 font-display text-2xl text-ink">{s.t}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">
                    {s.d}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Ready to accelerate your career?"
        body="Applications for the first cohort are open now."
        cta="Join now"
      />
    </main>
  );
}
