import Link from "next/link";
import { FadeUp } from "./anim";

/** Closing call-to-action used at the bottom of detail pages. */
export default function CTABanner({
  title = "Let's build what's next.",
  body = "Tell us about your business or your ambitions. We'll take it from there.",
  cta = "Get in touch",
  href = "/contact",
}: {
  title?: string;
  body?: string;
  cta?: string;
  href?: string;
}) {
  return (
    <section className="bg-paper px-5 pb-28 sm:px-8 md:pb-40">
      <FadeUp className="mx-auto max-w-7xl">
        <div className="flex flex-col items-start gap-6 overflow-hidden rounded-3xl bg-ink px-8 py-12 sm:flex-row sm:items-center sm:justify-between md:px-14 md:py-16">
          <div>
            <p className="font-display text-[clamp(1.7rem,3vw,2.6rem)] leading-tight text-paper">
              {title}
            </p>
            <p className="mt-3 max-w-md text-paper/65">{body}</p>
          </div>
          <Link
            href={href}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-teal px-8 py-4 text-base font-semibold text-teal-ink transition-all hover:bg-white"
          >
            {cta}
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
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
