import Link from "next/link";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

export function Header() {
  return (
    <header className="relative z-20 border-b border-black/10 bg-white/90 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-4 px-6">
        <Link href="/" className="shrink-0">
          <Image
            src="/images/dummy_logo.svg"
            alt="MALVACEAE"
            width={100}
            height={100}
            className="h-8 w-auto"
          />
        </Link>

        <SocialLinks />
      </div>
    </header>
  );
}
