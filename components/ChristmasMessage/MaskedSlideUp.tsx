"use client";

import { useEffect, useState } from "react";

type MaskedSlideUpProps = {
  text: string;
  className?: string;
  /** 1文字あたりの時間（秒） */
  duration?: number;
  /** 文字間の遅延（秒） */
  stagger?: number;
  /** 表示しきったあとの待機（秒） */
  hold?: number;
  /** 消えてから次のループまでの間隔（秒） */
  interval?: number;
};

export function MaskedSlideUp({
  text,
  className = "",
  duration = 0.85,
  stagger = 0.05,
  hold = 1.4,
  interval = 1.2,
}: MaskedSlideUpProps) {
  const [active, setActive] = useState(false);
  const chars = text.length;
  const enterMs = (duration + Math.max(chars - 1, 0) * stagger) * 1000;
  const exitMs = enterMs;

  useEffect(() => {
    let cancelled = false;
    let timer: ReturnType<typeof setTimeout>;

    const wait = (ms: number) =>
      new Promise<void>((resolve) => {
        timer = setTimeout(resolve, ms);
      });

    const loop = async () => {
      while (!cancelled) {
        setActive(true);
        await wait(enterMs + hold * 1000);
        if (cancelled) break;

        setActive(false);
        await wait(exitMs + interval * 1000);
      }
    };

    void loop();

    return () => {
      cancelled = true;
      clearTimeout(timer);
    };
  }, [enterMs, exitMs, hold, interval]);

  return (
    <p className={className} aria-label={text}>
      {text.split("").map((char, index) => {
        const delay = active
          ? index * stagger
          : (chars - 1 - index) * stagger;

        return (
          <span
            key={`${char}-${index}`}
            className="inline-block overflow-hidden align-bottom"
            aria-hidden
          >
            <span
              className="inline-block will-change-transform"
              style={{
                transform: active
                  ? "translate3d(0, 0, 0)"
                  : "translate3d(0, 110%, 0)",
                transitionProperty: "transform",
                transitionDuration: `${duration}s`,
                transitionTimingFunction: "cubic-bezier(0.23, 1, 0.32, 1)",
                transitionDelay: `${delay}s`,
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          </span>
        );
      })}
    </p>
  );
}
