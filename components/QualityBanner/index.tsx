import Image from "next/image";
import { QualityModalButton } from "./QualityModalButton";

export function QualityBanner() {
  return (
    <section className="flex w-full items-center justify-center p-20 text-zinc-600">
      <div>
        <h2 className="font-serif text-xl font-bold tracking-tight">
          Malvaceaeのこだわり
        </h2>

        <p className="mt-4 font-serif text-xs tracking-[0.2em]">
          希少な天然宝石と高純度の地金を使用
          <br />
        </p>
        <p className="mt-1 font-serif text-xs tracking-[0.2em]">
          宝石の街・甲府の伝統技術で丁寧に製作
        </p>

        <QualityModalButton />
      </div>

      <div className="ml-10 flex gap-3">
        <Image
          src="/images/kofu.svg"
          alt="甲府"
          width={83}
          height={182}
          className="h-[240px] w-auto"
        />
      </div>

      <div className="ml-10 flex gap-3">
        <Image
          src="/images/wel-3pc-1.jpg"
          alt="Quality Banner"
          width={150}
          height={150}
        />
        <Image
          src="/images/wel-2pc.jpg"
          alt="Quality Banner"
          width={150}
          height={150}
        />
      </div>
    </section>
  );
}
