import type { Product } from "@/types/product";
import { ProductCarousel } from "./ProductCarousel";

type ProductListProps = {
  products: Product[];
};

export function ProductList({ products }: ProductListProps) {
  return (
    <section id="products" className="mx-auto max-w-6xl px-6 pt-10">
      <ProductCarousel products={products} />
    </section>
  );
}
