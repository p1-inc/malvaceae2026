"use client";

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
            "text-[clamp(0.75rem,1.6vw,1.375rem)] text-white",
            "transition-colors hover:bg-[#8a181c]",
          )}
        >
          Collections →
        </button>
      </DialogTrigger>

      <DialogContent className="w-[calc(100%-2rem)] p-6 sm:max-w-5xl sm:p-10">
        <DialogTitle className="font-serif text-xl tracking-wide">
          Collections
        </DialogTitle>
        <ul className="mt-6 grid grid-cols-3 gap-4 sm:gap-6">
          {products.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard
                product={product}
                imageSizes="(min-width: 640px) 28vw, 30vw"
              />
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  );
}
