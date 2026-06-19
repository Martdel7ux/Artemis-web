import Reveal from "./Reveal";

const INSTITUTIONAL = [
  "Microsoft",
  "CYENS Centre of Excellence",
  "DigiNN Cyprus",
  "Logicom Distribution",
  "MongoDB",
  "University of Cyprus",
];

export default function Partners() {
  return (
    <section id="partners" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="text-center">
            <p className="eyebrow text-teal-deep">Trusted partners</p>
            <h2 className="display-xl mt-5 text-[clamp(2rem,4vw,3.4rem)] text-ink">
              Backed by institutions that build the future.
            </h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-3">
            {INSTITUTIONAL.map((name) => (
              <div
                key={name}
                className="flex min-h-[7.5rem] items-center justify-center bg-paper px-6 py-8 text-center transition-colors hover:bg-paper-soft"
              >
                <span className="font-display text-lg text-ink/55 transition-colors hover:text-ink md:text-xl">
                  {name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-20 text-center">
            <p className="eyebrow text-ink-soft/70">Our strategic partners</p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
            {[1, 2, 3, 4, 5].map((n) => (
              <span
                key={n}
                className="font-display text-xl text-ink/35 transition-colors hover:text-ink/70"
              >
                Partner {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
