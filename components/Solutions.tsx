import Reveal from "./Reveal";

const SOLUTIONS = [
  {
    no: "01",
    title: "AI Agents",
    tagline: "Engineered for scale. Built to commercialize.",
    body: "Autonomous, multi agent systems that take on real work, reasoning over your data, making decisions, and explaining the logic in plain terms. Your launchpad to impact.",
    icon: (
      <path
        d="M16 4v6m0 12v6M4 16h6m12 0h6M7.5 7.5l4 4m9 9 4 4m0-17-4 4m-9 9-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    ),
  },
  {
    no: "02",
    title: "Software as a Service",
    tagline: "Enterprise grade. Tailored intelligence.",
    body: "Production ready platforms shaped around your workflow, not the other way around. Secure, compliant, and built around you, from first prototype to scaled deployment.",
    icon: (
      <>
        <rect x="5" y="6" width="22" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M5 11h22M9 26h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    no: "03",
    title: "Artemis Academy",
    tagline: "Hands on learning. Global collaboration.",
    body: "The Graduate Readiness Accelerator, a fast track to becoming a skilled, mentored, and experienced AI professional. Empowering tomorrow's innovation.",
    href: "#academy",
    icon: (
      <path
        d="M16 5 4 11l12 6 12-6-12-6Zm-8 9v6c0 1.7 3.6 4 8 4s8-2.3 8-4v-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
];

export default function Solutions() {
  return (
    <section id="solutions" className="border-t border-line px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-teal-deep">What we do</p>
            <h2 className="display-xl mt-5 text-[clamp(2rem,4vw,3.4rem)] text-ink">
              Two ways we create value: solutions that ship, and people who lead.
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-md text-lg leading-relaxed text-ink-soft md:pb-2">
              Comprehensive solutions designed to help businesses grow and talent
              flourish. We combine technology with empathy to empower local shops,
              SMEs, and aspiring AI talent.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
          {SOLUTIONS.map((s, i) => {
            const Wrapper = s.href ? "a" : "div";
            return (
              <Reveal key={s.title} delay={i * 100} className="contents">
                <Wrapper
                  href={s.href}
                  className={`group flex flex-col bg-paper p-8 transition-colors duration-300 hover:bg-paper-soft md:p-10 ${
                    s.href ? "cursor-pointer" : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm text-ink-soft/60">{s.no}</span>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="text-teal-deep">
                      {s.icon}
                    </svg>
                  </div>

                  <h3 className="mt-10 font-display text-2xl text-ink md:text-[1.7rem]">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-teal-deep">{s.tagline}</p>
                  <p className="mt-4 flex-1 text-[0.97rem] leading-relaxed text-ink-soft">
                    {s.body}
                  </p>

                  {s.href && (
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-ink transition-colors group-hover:text-teal-deep">
                      Discover the Academy
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
                    </span>
                  )}
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
