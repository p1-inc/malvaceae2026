import { ChristmasMessage } from "@/components/ChristmasMessage";
import { FirstView } from "@/components/FirstView";
import { LimitedPresent } from "@/components/LimitedPresent";
import { ProductList } from "@/components/ProductList";
import { QualityBanner } from "@/components/QualityBanner";
import { products } from "@/lib/products";

export default function Home() {
  return (
    <>
      <FirstView />
      <ProductList products={products} />
      <ChristmasMessage />
      <QualityBanner />
      <LimitedPresent />
    </>
  );
}
