"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const presentImages = [
  { src: "/images/900_T7A8121.jpg", alt: "木製オーナメント" },
  { src: "/images/900_T7A8105.jpg", alt: "選べるメッセージカード" },
] as const;

export function PresentModalButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mt-8 inline-flex items-center justify-center rounded-sm border border-white px-8 py-2 text-sm text-white transition-colors hover:bg-white hover:text-zinc-900"
        >
          詳しくは →
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-4xl p-12">
        <DialogHeader>
          <DialogTitle className="font-serif text-lg">
            クリスマス限定プレゼント
          </DialogTitle>
          <DialogDescription className="pt-2 leading-7">
            12/25までの期間限定特典、ジュエリーをご購入いただいた方に、
            クリスマス限定のスペシャルギフトをプレゼントいたします。
          </DialogDescription>
          <p className="pt-2 text-xs leading-6 text-muted-foreground">
            ※オーナメントのデザインはランダムになります。<br />
            ※数量限定の為、なくなり次第終了となります。<br />
            ※1注文につき1個お届けします。<br />
            ※サイズゲージやパーツ類など、一部商品は対象外となります（商品ページに記載がございます）。<br />
          </p>
        </DialogHeader>
        <div className="grid grid-cols-2 gap-3 pt-2">
          {presentImages.map((image) => (
            <div key={image.src}>
              <div className="relative aspect-square overflow-hidden bg-zinc-100">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  unoptimized
                  className="object-cover"
                  sizes="(max-width: 640px) 45vw, 280px"
                />
              </div>
              <p className="mt-2 text-center text-sm text-muted-foreground">
                {image.alt}
              </p>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}
