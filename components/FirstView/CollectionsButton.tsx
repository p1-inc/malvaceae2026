"use client";

import Image from "next/image";
import { cn } from "@/lib/tailwindUtil";
import type { Product } from "@/types/product";
import { ProductCard } from "@/components/ProductList/ProductCard";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type CollectionsButtonProps = {
  products: Product[];
};

export function CollectionsButton({ products }: CollectionsButtonProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={cn(
            "mt-[clamp(0.75rem,2vw,1.75rem)] inline-flex w-full items-center justify-center",
            "max-w-[clamp(8rem,22vw,20rem)]",
            "rounded-sm bg-[#b01f24] px-[clamp(0.75rem,1.8vw,1.5rem)] py-[clamp(0.375rem,1vw,0.875rem)]",
            "text-[clamp(0.625rem,1.3vw,1.125rem)] tracking-[0.15em] text-white",
            "transition-colors hover:bg-[#8a181c]",
          )}
        >
          Collections →
        </button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-2rem)] p-6 sm:max-w-5xl sm:p-10">
        <DialogTitle className="text-xl tracking-wide text-zinc-600">
          Collections
        </DialogTitle>
        <div className="relative mt-6">
          <ul className="grid grid-cols-3 gap-4 sm:gap-6">
            {products.map((product) => (
              <li key={product.id} className="min-w-0">
                <ProductCard
                  product={product}
                  imageSizes="(min-width: 640px) 28vw, 30vw"
                />
              </li>
            ))}
          </ul>

          <Image
            src="/images/redRibbon.png"
            alt=""
            width={812}
            height={812}
            className="pointer-events-none absolute -right-6 -bottom-6 h-auto w-[40%] max-w-72 sm:-right-10 sm:-bottom-10"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
