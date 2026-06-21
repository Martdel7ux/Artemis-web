import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { FadeUp } from "@/components/anim";

export const metadata: Metadata = {
  title: "About — Artemis Intelligence",
  description:
    "We combine technology with empathy to empower local shops, SMEs, and aspiring AI talent. A globally distributed team of technology professionals and business innovators.",
};

const VALUES = [
  { k: "Empathy", v: "Technology in service of people: local shops, SMEs, and aspiring talent." },
  { k: "Craft", v: "Cutting edge AI design, architecture, and deployment, done with rigour." },
  { k: "Scale", v: "Tailored AI and cloud that helps businesses grow exponentially." },
];

export default function AboutPage() {
  return (
    <main>
      <PageHero
        eyebrow="About Artemis Intelligence"
        title="We combine technology with empathy."
        highlight="empathy."
        intro="To empower local shops, SMEs, and aspiring AI talent. Technology with empathy is not a slogan; it's how we decide what to build, and who we build it for."
      />

      {/* Story */}
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-12 md:grid-cols-[0.4fr_0.6fr] md:gap-16">
            <FadeUp>
              <p className="eyebrow text-teal-deep">Who we are</p>
            </FadeUp>
            <FadeUp delay={120}>
              <p className="text-[clamp(1.3rem,2.6vw,1.9rem)] font-normal leading-snug text-ink font-display">
                Artemis is powered by a globally distributed team of seasoned,
                international technology professionals and business innovators.
              </p>
              <p className="mt-6 text-lg leading-relaxed text-ink-soft">
                Pioneers in cutting edge AI design, architecture, and deployment, we
                provide groundbreaking solutions that use tailored AI and cloud
                computing to transform businesses, enabling them to grow exponentially
                and become more adept.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-t border-line bg-paper-soft px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-7xl">
          <FadeUp>
            <p className="eyebrow text-teal-deep">What we value</p>
          </FadeUp>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {VALUES.map((v, i) => (
              <FadeUp key={v.k} delay={i * 120}>
                <div className="h-full rounded-3xl border border-line bg-paper p-8">
                  <h3 className="font-display text-2xl text-ink">{v.k}</h3>
                  <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">{v.v}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Responsible AI */}
      <section className="bg-paper px-5 py-16 sm:px-8 md:py-24">
        <div className="mx-auto max-w-5xl">
          <FadeUp>
            <p className="eyebrow text-teal-deep">Responsible by design</p>
            <h2 className="mt-5 max-w-3xl font-display text-[clamp(1.7rem,3.4vw,2.6rem)] leading-snug text-ink">
              We keep your data safe, use it only for the right reasons, and never
              sell or share it.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Everything is handled securely, with human oversight, and in line with
              the EU General Data Protection Regulation (GDPR) and the EU Artificial
              Intelligence Act.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* CEO quote */}
      <section className="border-t border-line bg-paper-soft px-5 py-20 sm:px-8 md:py-28">
        <FadeUp className="mx-auto max-w-3xl text-center">
          <span aria-hidden className="font-display text-6xl leading-none text-teal/40">
            &ldquo;
          </span>
          <blockquote className="-mt-4 font-display text-[clamp(1.5rem,3vw,2.4rem)] leading-snug text-ink">
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
      </section>

      <CTABanner />
    </main>
  );
}
