import Link from "next/link";
import Image from "next/image";
import { MobileMenu } from "./MobileMenu";
import { navLinks } from "./navLinks";

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

        <nav className="hidden md:block" aria-label="メインナビゲーション">
          <ul className="flex flex-wrap items-center justify-end gap-x-6 gap-y-1 lg:gap-x-5">
            {navLinks.map((link) => (
              <li key={link.href + link.label}>
                <Link
                  href={link.href}
                  className="text-xs tracking-[0.12em] lg:text-sm"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileMenu />
      </div>
    </header>
  );
}
