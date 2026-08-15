"use client";

import Image from "next/image";
import type { Product } from "@/types/product";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  const { details } = product;

  const rows = [
    { label: "品番", value: details.code },
    { label: "素材", value: details.materials.join("\n") },
    { label: "宝石", value: details.gem.join("\n") },
    { label: "大きさ", value: details.size },
    details.band ? { label: "腕", value: details.band } : null,
    details.ringSize ? { label: "リングサイズ", value: details.ringSize } : null,
    details.chain?.length
      ? { label: "チェーン", value: details.chain.join("\n") }
      : null,
    details.hardware?.length
      ? { label: "金具", value: details.hardware.join("\n") }
      : null,
  ].filter((row): row is { label: string; value: string } => row !== null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button type="button" className="group block w-full text-left">
          <div className="relative aspect-square overflow-hidden bg-zinc-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-opacity duration-300 group-hover:opacity-80"
              sizes="(min-width: 1024px) 20vw, (min-width: 640px) 45vw, 30vw"
            />
          </div>
          <div className="mt-3 space-y-0.5">
            {product.description ? (
              <p className="inline-flex w-fit items-center rounded-full bg-zinc-400 px-3 py-1 text-[9px] leading-none tracking-wide text-white">
                {product.description}
              </p>
            ) : null}
            <h3 className="mt-1 text-xs tracking-wide">{product.name}</h3>
            <p className="text-xs">
              ¥{product.price.toLocaleString("ja-JP")}
            </p>
          </div>
        </button>
      </DialogTrigger>

      <DialogContent className="max-h-[90vh] overflow-y-auto p-6 sm:max-w-3xl md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start">
          <div className="relative mx-auto aspect-square w-full max-w-sm shrink-0 overflow-hidden bg-zinc-100 md:mx-0">
            <Image
              src={product.image}
              alt={product.name}
              fill
              unoptimized
              className="object-cover"
              sizes="(max-width: 768px) 90vw, 384px"
            />
          </div>
          <div className="min-w-0 flex-1">
            {product.description ? (
              <p className="inline-flex w-fit items-center rounded-full bg-zinc-400 px-3 py-1 text-[9px] leading-none tracking-wide text-white">
                {product.description}
              </p>
            ) : null}
            <DialogTitle className="mt-3 font-serif text-xl tracking-wide md:text-2xl">
              {product.name}
            </DialogTitle>
            <p className="mt-4 text-lg tracking-wide">
              ¥{product.price.toLocaleString("ja-JP")}
              <span className="ml-2 text-sm text-zinc-500">
                (税抜／送料無料)
              </span>
            </p>

            <dl className="mt-6 space-y-3 border-t border-zinc-200 pt-5 text-sm">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid grid-cols-[4.5rem_1fr] gap-3"
                >
                  <dt className="text-zinc-500">{row.label}</dt>
                  <dd className="whitespace-pre-line leading-6 text-zinc-800">
                    {row.value}
                  </dd>
                </div>
              ))}
            </dl>

            <a
              href={product.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-50 items-center justify-center rounded-sm border border-zinc-400 px-5 py-2 text-sm tracking-wide text-zinc-700 transition-colors hover:border-zinc-700 hover:text-zinc-900"
            >
              詳しくは →
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
