"use client";

import { useRef } from "react";
import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type ProductCarouselProps = {
  products: Product[];
};

export function ProductCarousel({ products }: ProductCarouselProps) {
  const scrollerRef = useRef<HTMLUListElement>(null);

  const scrollByCard = (direction: -1 | 1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("li");
    const amount = card?.clientWidth ?? 160;
    el.scrollBy({ left: direction * (amount + 16), behavior: "smooth" });
  };

  return (
    <div className="relative">
      <button
        type="button"
        aria-label="前へ"
        onClick={() => scrollByCard(-1)}
        className="absolute top-1/3 left-0 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-zinc-400 opacity-40 transition-opacity hover:opacity-100"
      >
        ←
      </button>

      <ul
        ref={scrollerRef}
        className="flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-10 pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {products.map((product) => (
          <li key={product.id} className="w-48 shrink-0 snap-start">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>

      <button
        type="button"
        aria-label="次へ"
        onClick={() => scrollByCard(1)}
        className="absolute top-1/3 right-0 z-10 flex h-8 w-8 -translate-y-1/2 items-center justify-center text-zinc-400 opacity-40 transition-opacity hover:opacity-100"
      >
        →
      </button>
    </div>
  );
}
