import Image from "next/image";
import { PresentModalButton } from "./PresentModalButton";

export function LimitedPresent() {
  return (
    <section
      id="present"
      className="relative flex aspect-7/3 w-full items-center overflow-hidden px-24"
    >
      <Image
        src="/images/gift_01.jpg"
        alt=""
        fill
        className="object-cover"
        sizes="100vw"
      />

      <div className="relative z-10 w-full max-w-xl text-left text-white">
        <p className="text-xs tracking-[0.35em] text-white/80">
          LIMITED PRESENT
        </p>
        <h2 className="mt-4 font-serif text-2xl font-bold tracking-tight md:text-3xl">
          贈りものに、小さなときめきを。
        </h2>
        <p className="mt-6 font-serif text-sm leading-8 text-white/90 md:text-base">
          期間中、対象ジュエリーをご購入の方に
          <br />
          クリスマス限定のスペシャルギフトをプレゼント。
          <br />
        </p>
        <PresentModalButton />
      </div>
    </section>
  );
}
