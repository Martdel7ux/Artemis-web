import Reveal from "./Reveal";

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

export default function Work() {
  return (
    <section id="work" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-teal-deep">Selected work</p>
            <h2 className="display-xl mt-5 text-[clamp(2rem,4vw,3.4rem)] text-ink">
              Collaborations shipping in the real world.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft md:pb-2">
              From advertising to climate to knowledge management: tailored AI,
              built with partners, solving problems that matter.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 border-t border-line">
          {PROJECTS.map((p, i) => (
            <Reveal as="article" key={p.name} delay={(i % 2) * 80}>
              <div className="group grid gap-4 border-b border-line py-10 transition-colors hover:bg-paper-soft/60 md:grid-cols-[0.4fr_0.25fr_1fr] md:items-baseline md:gap-8 md:px-4">
                <h3 className="font-display text-3xl text-ink md:text-4xl">
                  {p.name}
                </h3>
                <p className="text-sm font-medium uppercase tracking-wider text-teal-deep">
                  {p.category}
                </p>
                <p className="max-w-xl text-[0.97rem] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
