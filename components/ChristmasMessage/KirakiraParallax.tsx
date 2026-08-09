"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

const LAYERS = [
  { src: "/images/kirakira_01.png", speed: 0.35, className: "z-[1]" },
  { src: "/images/kirakira_02.png", speed: 0.85, className: "z-[2]" },
  // { src: "/images/kirakira_03.png", speed: 0.55, className: "z-[3]" },
] as const;

export function KirakiraParallax() {
  const containerRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const base = window.innerHeight / 2 - (rect.top + rect.height / 2);

      LAYERS.forEach((layer, index) => {
        const el = layerRefs.current[index];
        if (!el) return;
        el.style.transform = `translate3d(0, ${base * layer.speed}px, 0)`;
      });
    };

    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {LAYERS.map((layer, index) => (
        <div
          key={layer.src}
          ref={(el) => {
            layerRefs.current[index] = el;
          }}
          className={`absolute top-[-20%] left-0 h-[140%] w-full will-change-transform ${layer.className}`}
        >
          <Image
            src={layer.src}
            alt=""
            fill
            unoptimized
            className="object-cover object-center"
            sizes="100vw"
          />
        </div>
      ))}
    </div>
  );
}
