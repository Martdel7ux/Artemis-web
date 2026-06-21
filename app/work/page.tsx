import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import { FadeUp } from "@/components/anim";

export const metadata: Metadata = {
  title: "Work — Artemis Intelligence",
  description:
    "Collaborations shipping in the real world: PromoGoat, TideMRV, OPICA, and MVM Strategies. Tailored AI, built with partners, solving problems that matter.",
};

const PROJECTS = [
  {
    name: "PromoGoat",
    category: "AdTech · Multi agent",
    body: "A practical advertising tool for small and medium businesses. Under the hood, PromoGoat runs on a multi agent workflow and custom allocation engine that weighs reach, cost, intent, and fit, then explains the logic in simple terms.",
    highlight: "Advertising that explains itself, built for teams without an agency.",
  },
  {
    name: "TideMRV",
    category: "Climate · SaaS",
    body: "An AI powered SaaS platform designed to take the pain out of carbon project certification: less stress, lower costs, and more confidence for project developers who want their work in the field to translate into real, market ready carbon credits.",
    highlight: "Turning hard work in the field into market ready carbon credits.",
  },
  {
    name: "OPICA",
    category: "Knowledge · Automation",
    body: "An AI powered platform that redefines how organizations manage their documentation and knowledge lifecycle, bringing automation, intelligence, and intuitive, user centered support to every layer of procedural execution and document management.",
    highlight: "Documentation and knowledge, finally working for the people who use it.",
  },
  {
    name: "MVM Strategies",
    category: "Advisory · Enablement",
    body: "Helps small to midsize businesses leverage AI to enhance productivity. A curated program is designed specifically for teams, with services recommended and customized to the business and its goals.",
    highlight: "A curated path to AI productivity, customized to your team.",
  },
];

export default function WorkPage() {
  return (
    <main>
      <PageHero
        eyebrow="Selected work"
        title="Collaborations shipping in the real world."
        highlight="real"
        intro="From advertising to climate to knowledge management: tailored AI, built with partners, solving problems that matter."
      />

      <section className="bg-paper px-5 sm:px-8">
        <div className="mx-auto max-w-7xl">
          {PROJECTS.map((p, i) => (
            <FadeUp key={p.name}>
              <article className="grid gap-8 border-t border-line py-14 last:border-b md:grid-cols-[0.8fr_1.2fr] md:gap-16 md:py-20">
                <div>
                  <span className="text-sm font-medium uppercase tracking-wider text-teal-deep">
                    {p.category}
                  </span>
                  <h2 className="mt-3 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-none text-ink">
                    {p.name}
                  </h2>
                </div>
                <div>
                  <p className="font-display text-xl leading-snug text-ink md:text-2xl">
                    {p.highlight}
                  </p>
                  <p className="mt-5 max-w-xl text-[0.97rem] leading-relaxed text-ink-soft">
                    {p.body}
                  </p>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </section>

      <CTABanner
        title="Have a problem worth solving?"
        body="We partner with ambitious teams to build AI that ships."
        cta="Start a conversation"
      />
    </main>
  );
}
