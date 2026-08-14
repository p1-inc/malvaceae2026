"use client";

import { useEffect, useRef, useState } from "react";

type MaskedSlideUpProps = {
  text: string;
  className?: string;
  /** 1文字あたりの時間（秒）。添付仕様は 0.85s */
  duration?: number;
  /** 文字間の遅延（秒）。添付仕様は 0.05s */
  stagger?: number;
};

export function MaskedSlideUp({
  text,
  className = "",
  duration = 0.85,
  stagger = 0.05,
}: MaskedSlideUpProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <p
      ref={ref}
      className={className}
      aria-label={text}
    >
      {text.split("").map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="inline-block overflow-hidden align-bottom"
          aria-hidden
        >
          <span
            className="inline-block will-change-transform"
            style={{
              transform: active ? "translate3d(0, 0, 0)" : "translate3d(0, 110%, 0)",
              transitionProperty: "transform",
              transitionDuration: `${duration}s`,
              transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
              transitionDelay: active ? `${index * stagger}s` : "0s",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        </span>
      ))}
    </p>
  );
}
