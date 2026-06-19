import Reveal from "./Reveal";

const VALUES = [
  { k: "Empathy", v: "Technology in service of people: local shops, SMEs, and aspiring talent." },
  { k: "Craft", v: "Cutting edge AI design, architecture, and deployment, done with rigour." },
  { k: "Scale", v: "Tailored AI and cloud that helps businesses grow exponentially." },
];

export default function About() {
  return (
    <section id="about" className="px-5 py-24 sm:px-8 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="eyebrow text-teal-deep">About Artemis</p>
        </Reveal>

        <Reveal delay={80}>
          <h2 className="display-xl mt-6 max-w-4xl text-[clamp(2rem,4.5vw,3.6rem)] text-ink">
            We combine technology with{" "}
            <span className="italic text-teal-deep">empathy</span> to empower local
            shops, SMEs, and aspiring AI talent.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-12 md:grid-cols-[1.2fr_0.8fr]">
          <Reveal delay={120}>
            <p className="text-lg leading-relaxed text-ink-soft">
              Artemis is powered by a globally distributed team of seasoned,
              international technology professionals and business innovators,
              pioneers in cutting edge technologies, AI design, architecture, and
              deployment. With our exceptional skill set, we provide groundbreaking
              solutions that use tailored AI and cloud computing to transform
              businesses, enabling them to grow exponentially and become more adept.
            </p>

            <figure className="mt-10 border-l-2 border-teal pl-6">
              <blockquote className="font-display text-2xl leading-snug text-ink md:text-3xl">
                &ldquo;Technology with empathy is not a slogan; it&rsquo;s how we
                decide what to build, and who we build it for.&rdquo;
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-ink font-display text-sm text-paper">
                  MG
                </span>
                <span className="text-sm">
                  <span className="block font-semibold text-ink">Michael Glaros</span>
                  <span className="block text-ink-soft">CEO, Artemis Intelligence</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={200}>
            <ul className="divide-y divide-line border-y border-line">
              {VALUES.map((item) => (
                <li key={item.k} className="py-6">
                  <p className="font-display text-xl text-ink">{item.k}</p>
                  <p className="mt-1.5 text-[0.97rem] leading-relaxed text-ink-soft">
                    {item.v}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
