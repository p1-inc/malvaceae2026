export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10">
      <div className="mx-auto max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-600 flex items-center justify-center">
        <a href="/company" className="text-xs tracking-[0.2em] text-zinc-900">MALVACEAE</a>
        <p className="text-xs text-zinc-900">
          株式会社ミキ 〒400-0851 山梨県甲府市住吉1-4-7
        </p>

        <p className="text-xs text-zinc-900">
          &copy; 2026 malvaceae All rights reserved.</p>
      </div>
    </footer>
  );
}
