"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function QualityModalButton() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className="mt-5 inline-flex w-50 items-center justify-center rounded-sm border border-[#af9436] px-3 py-1 text-sm text-[#af9436] transition-colors hover:bg-[#af9436] hover:text-white"
        >
          詳しくは →
        </button>
      </DialogTrigger>
      <DialogContent className="p-6 sm:max-w-4xl sm:p-12">
        <div className="flex items-start gap-4 h-48">
          <div className="min-w-0 mt-12">
            <h1 className="font-serif text-lg">
              宝石の街・甲府が育てる、本物の品質
            </h1>
            <p className="pt-4 leading-6 text-muted-foreground">
              甲府ならではの伝統技術と、希少な天然石・高純度の地金が出会い、
              <br />
              Malvaceaeのジュエリーは生まれます。
            </p>
          </div>
          <Image
            src="/images/kofu.svg"
            alt="甲府"
            width={83}
            height={182}
            className="h-full w-auto shrink-0"
          />
        </div>

        <div className="flex items-start gap-4 pt-12">
          <div className="relative aspect-square w-52 shrink-0 overflow-hidden bg-zinc-100">
            <Image
              src="/images/wel-2pc.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="208px"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-5">
            <p className="text-lg leading-6 text-muted-foreground">
              天然の宝石や高品位の地金、高品質な素材を使用
            </p>
            <p className="text-xs leading-6 text-muted-foreground">
              鑑別機関で「天然」と認められた宝石のみを使用しています。ひとつひとつ異なる個性と希少価値、ずっと見ていたくなる輝きこそ、本物のジュエリーに相応しいと考えています。
            </p>
            <p className="text-xs leading-6 text-muted-foreground">
              地金はプラチナ950・18金をメインに、一部パーツでもプラチナ850以上を使用。高純度ならではの安心感をお届けします。
            </p>
          </div>
        </div>

        <div className="flex items-start gap-4 pt-12">
          <div className="relative aspect-square w-52 shrink-0 overflow-hidden bg-zinc-100">
            <Image
              src="/images/wel-3pc-1.jpg"
              alt=""
              fill
              unoptimized
              className="object-cover"
              sizes="208px"
            />
          </div>
          <div className="flex min-w-0 flex-col gap-5">
            <p className="text-lg leading-7 text-muted-foreground">
              伝統の職人技術
            </p>
            <p className="text-xs leading-7 text-muted-foreground">
              宝石の街・甲府が誇る伝統の技術で、ひとつひとつ心を込めてお作りしています。本物のジュエリーだけがもつ美しさをご堪能ください。
            </p>
            <p className="text-xs leading-7 text-muted-foreground">
              宝石も地金も相場は日々変動します。プロのバイヤーが直接仕入れ、作成したジュエリーを適正価格でお届けしています。
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
