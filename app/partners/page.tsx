import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { FadeUp } from "@/components/anim";

export const metadata: Metadata = {
  title: "Partners — Artemis Intelligence",
  description:
    "Backed by institutions that build the future. Our institutional and strategic partners help us deliver tailored AI and grow the next generation of talent.",
};

const INSTITUTIONAL = [
  "Microsoft",
  "CYENS Centre of Excellence",
  "DigiNN Cyprus",
  "Logicom Distribution",
  "MongoDB",
  "University of Cyprus",
];

const STRATEGIC = ["Partner 1", "Partner 2", "Partner 3", "Partner 4", "Partner 5"];

const WHY = [
  { t: "Build together", d: "We co-create tailored AI and SaaS, bringing engineering depth and a bias for shipping." },
  { t: "Grow talent", d: "Through the Academy, partners help shape and access a pipeline of future ready AI professionals." },
  { t: "Scale responsibly", d: "Everything we build is secure, human-overseen, and aligned with EU GDPR and the AI Act." },
];

export default function PartnersPage() {
  return (
    <main>
      <PageHero
        eyebrow="Trusted partners"
        title="Backed by institutions that build the future."
        highlight="future."
        intro="We collaborate with leading institutions and strategic partners to deliver tailored AI and grow the next generation of talent."
      />

      {/* Institutional */}
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <p className="eyebrow text-teal-deep">Institutional partners</p>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-line bg-line sm:grid-cols-3">
              {INSTITUTIONAL.map((name) => (
                <div
                  key={name}
                  className="flex min-h-[8rem] items-center justify-center bg-paper px-6 py-8 text-center transition-colors hover:bg-paper-soft"
                >
                  <span className="font-display text-lg text-ink/55 transition-colors hover:text-ink md:text-xl">
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </FadeUp>

          <FadeUp delay={80}>
            <p className="eyebrow mt-16 text-ink-soft/60">Strategic partners</p>
          </FadeUp>
          <FadeUp delay={120}>
            <div className="mt-8 flex flex-wrap items-center gap-x-12 gap-y-6">
              {STRATEGIC.map((n) => (
                <span
                  key={n}
                  className="font-display text-xl text-ink/35 transition-colors hover:text-ink/70"
                >
                  {n}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Why partner */}
      <section className="border-t border-line bg-paper-soft px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <h2 className="max-w-2xl font-display text-[clamp(1.9rem,4vw,3rem)] leading-tight text-ink">
              Why teams partner with Artemis
            </h2>
          </FadeUp>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {WHY.map((w, i) => (
              <FadeUp key={w.t} delay={i * 120}>
                <div className="h-full rounded-3xl border border-line bg-paper p-8">
                  <span className="font-display text-3xl text-teal-deep">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-ink">{w.t}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{w.d}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        title="Let's build something together."
        body="Interested in partnering with Artemis Intelligence? We'd love to talk."
        cta="Become a partner"
      />
    </main>
  );
}
