import Image from "next/image";
import { TitleMark } from "./TitleMark";

export function FirstView() {
  return (
    <section className="relative aspect-[5/2] w-full overflow-hidden text-white">
      <Image
        src="/images/mainVisualpict.jpg"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      {/*
        画像コンテナ基準の % 配置。
        left / top / width を調整してデザイン位置に合わせてください。
      */}
      <div className="absolute top-[18%] left-[8%] z-10 w-[28%]">
        <TitleMark className="h-auto w-full text-[#b01f24]" />

        <p className="mt-[4%] ml-[3%] font-serif text-[clamp(1rem,2vw,1.5rem)] font-bold leading-relaxed text-[#b01f24]">
          クリスマスに選びたい、
          <br />
          一生ものの輝き。
        </p>

        <a
          href="#products"
          className="mt-5 inline-flex items-center justify-center rounded-sm bg-[#b01f24] px-4 py-2 w-60 text-white transition-colors hover:bg-[#8a181c]"
        >
          Collections →
        </a>

      </div>
    </section>
  );
}
