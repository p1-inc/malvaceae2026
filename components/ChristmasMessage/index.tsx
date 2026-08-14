import Image from "next/image";
import { KirakiraParallax } from "./KirakiraParallax";
import { MaskedSlideUp } from "./MaskedSlideUp";

export function ChristmasMessage() {
  return (
    <section
      id="concept"
      className="relative mt-24 w-full overflow-hidden px-6 pt-24 pb-24 text-center"
    >
      <Image
        src="/images/bg_001.png"
        alt=""
        fill
        unoptimized
        className="object-cover opacity-80"
        sizes="100vw"
      />
      <KirakiraParallax />
      <div className="relative z-10 mx-auto max-w-3xl">
        <MaskedSlideUp
          text="CHRISTMAS COLLECTION"
          className="text-base tracking-[0.5em] text-[#b01f24]"
        />

        <p className="mt-8 font-serif text-base leading-12 text-zinc-600 md:text-lg">
          街がまばゆい光に包まれる、特別な季節。 <br />
          心躍るクリスマスの足音が聞こえてきます。 <br />
          <br />
          この一年を無事に過ごした <br />
          自分へのご褒美に。 <br />
          そして、幸せを願う大切なあの人へ。 <br />
          時を越えて永遠に輝き続ける、 <br />
          上質なジュエリーを贈りませんか。 <br />
          <br />
        </p>
      </div>
    </section>
  );
}
