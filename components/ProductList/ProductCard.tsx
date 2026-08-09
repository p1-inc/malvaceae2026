import Image from "next/image";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <a href={product.href} className="group block w-full">
      <div className="relative aspect-square overflow-hidden bg-zinc-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-opacity duration-300 group-hover:opacity-80"
          sizes="160px"
        />
      </div>
      <div className="mt-3 space-y-0.5">
        {product.description ? (
          <p className="w-fit rounded-sm bg-zinc-400 px-3 py-0.5 text-[9px] tracking-wide text-white">
            {product.description}
          </p>
        ) : null}
        <h3 className="mt-1 text-xs tracking-wide">{product.name}</h3>
        <p className="text-xs">¥{product.price.toLocaleString("ja-JP")}</p>
      </div>
    </a>
  );
}
