"use client";

import { Fragment, useEffect, useRef, useState, type ReactNode } from "react";

export const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/** Fires `true` once the element scrolls into view, then disconnects. */
export function useInView<T extends HTMLElement>(threshold = 0.2) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -10% 0px" }
    );
    obs.observe(node);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/** Apple-style word-by-word blur + rise reveal. Renders an <h2>. */
export function WordReveal({
  text,
  highlight,
  className = "",
  step = 55,
  start = 0,
}: {
  text: string;
  highlight?: string;
  className?: string;
  step?: number;
  start?: number;
}) {
  const { ref, inView } = useInView<HTMLHeadingElement>(0.25);
  const words = text.split(" ");
  return (
    <h2 ref={ref} className={className}>
      {words.map((w, i) => {
        const isHi = highlight && w.replace(/[.,:]/g, "") === highlight;
        return (
          <Fragment key={i}>
            <span
              className="inline-block"
              style={{
                opacity: inView ? 1 : 0,
                filter: inView ? "blur(0px)" : "blur(10px)",
                transform: inView ? "translateY(0)" : "translateY(0.5em)",
                transition: `opacity 0.8s ${EASE}, filter 0.8s ${EASE}, transform 0.8s ${EASE}`,
                transitionDelay: `${start + i * step}ms`,
              }}
            >
              <span className={isHi ? "italic text-teal-deep" : undefined}>{w}</span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </Fragment>
        );
      })}
    </h2>
  );
}

/** Simple fade + rise reveal for any block of content. */
export function FadeUp({
  children,
  delay = 0,
  className = "",
  threshold = 0.3,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  threshold?: number;
}) {
  const { ref, inView } = useInView<HTMLDivElement>(threshold);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(20px)",
        transition: `opacity 0.9s ${EASE}, transform 0.9s ${EASE}`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}
