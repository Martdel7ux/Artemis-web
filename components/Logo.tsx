type Props = {
  className?: string;
  /** color of the wordmark text */
  tone?: "ink" | "white";
};

/**
 * Artemis Intelligence wordmark.
 * Mark: a crescent (Artemis, goddess of the moon) paired with a refined wordmark.
 */
export default function Logo({ className = "", tone = "ink" }: Props) {
  const text = tone === "white" ? "#ffffff" : "var(--color-ink)";
  const sub = tone === "white" ? "rgba(255,255,255,0.7)" : "var(--color-ink-soft)";
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        width="26"
        height="26"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden="true"
        className="shrink-0"
      >
        <path
          d="M16 2a14 14 0 1 0 9.9 23.9A11 11 0 0 1 16 6c.6 0 1.2.05 1.8.14A13.94 13.94 0 0 0 16 2Z"
          fill="var(--color-teal)"
        />
        <circle cx="22.5" cy="9.5" r="2" fill="var(--color-teal-deep)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span
          className="font-display text-[1.05rem] font-medium tracking-tight"
          style={{ color: text }}
        >
          Artemis
        </span>
        <span
          className="text-[0.58rem] font-semibold uppercase tracking-[0.28em]"
          style={{ color: sub }}
        >
          Intelligence
        </span>
      </span>
    </span>
  );
}
