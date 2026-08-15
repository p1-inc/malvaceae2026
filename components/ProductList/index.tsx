import type { Product } from "@/types/product";
import { ProductCard } from "./ProductCard";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <section id="products" className="mx-auto max-w-7xl px-6 pt-10">
      <ul className="columns-2 gap-5 sm:columns-3 sm:gap-3 lg:grid lg:grid-cols-5 lg:gap-4">
        {products.map((product) => (
          <li key={product.id} className="mb-5 break-inside-avoid sm:mb-3 lg:mb-0">
            <ProductCard product={product} />
          </li>
        ))}
      </ul>
    </section>
  );
}
