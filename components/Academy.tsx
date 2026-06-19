import Reveal from "./Reveal";

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

export default function Academy() {
  return (
    <section
      id="academy"
      className="relative overflow-hidden border-y border-line bg-paper-soft px-5 py-24 sm:px-8 md:py-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[34rem] w-[34rem] rounded-full opacity-50 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(22,201,195,0.18), rgba(22,201,195,0) 65%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1fr_1fr] md:items-end">
          <Reveal>
            <p className="eyebrow text-teal-deep">Artemis Academy</p>
            <h2 className="display-xl mt-5 text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
              The Graduate Readiness Accelerator
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Be one of the first to join, a fast track to becoming a future ready
              graduate who is skilled, mentored, and experienced. We invest in talent
              the way we invest in technology: with intention, and with empathy.
            </p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 100}>
              <article className="flex h-full flex-col rounded-2xl border border-line bg-paper p-8">
                <span className="font-display text-3xl text-teal-deep">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-2xl text-ink">{p.title}</h3>
                <p className="mt-3 text-[0.97rem] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex flex-col items-start gap-5 rounded-2xl bg-ink px-8 py-10 sm:flex-row sm:items-center sm:justify-between md:px-12">
            <div>
              <p className="font-display text-2xl text-paper md:text-3xl">
                Ready to accelerate your career?
              </p>
              <p className="mt-2 text-paper/70">
                Applications for the first cohort are open now.
              </p>
            </div>
            <a
              href="#contact"
              className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-teal-ink transition-all hover:bg-white"
            >
              Join now
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </svg>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
