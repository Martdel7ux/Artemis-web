import Link from "next/link";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 pb-10 pt-20 sm:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr]">
          {/* Map / location */}
          <div>
            <p className="eyebrow text-teal">Our location</p>
            <p className="mt-4 font-display text-3xl text-paper md:text-4xl">
              Nicosia, Cyprus
            </p>
            <p className="mt-2 text-paper/60">62 Pericleous Street, 2021 Strovolo</p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10">
              <iframe
                title="Artemis Intelligence, Nicosia, Cyprus"
                src="https://www.google.com/maps?q=Nicosia,Cyprus&output=embed"
                width="100%"
                height="240"
                style={{ border: 0, filter: "grayscale(1) invert(0.92) contrast(0.9)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Links / privacy */}
          <div className="flex flex-col justify-between">
            <div>
              <Logo tone="white" />
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-paper/55">
                At Artemis Intelligence, we only collect basic information to make your
                experience better and help improve our AI tools. We keep your data safe,
                use it only for the right reasons, and never sell or share. Everything is
                handled securely, with human oversight, and in line with the EU GDPR and
                the EU Artificial Intelligence Act.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/company/artemisintelligence/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-white/15 px-5 py-2.5 text-sm text-paper/80 transition hover:border-white/40 hover:text-paper"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-paper/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Artemis Intelligence. All rights reserved.</p>
          <nav className="flex flex-wrap gap-x-7 gap-y-2">
            <Link href="/solutions" className="transition hover:text-paper">Solutions</Link>
            <Link href="/academy" className="transition hover:text-paper">Academy</Link>
            <Link href="/work" className="transition hover:text-paper">Work</Link>
            <Link href="/about" className="transition hover:text-paper">About</Link>
            <Link href="/partners" className="transition hover:text-paper">Partners</Link>
            <Link href="/contact" className="transition hover:text-paper">Contact</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
