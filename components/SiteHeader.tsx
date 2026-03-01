import Link from "next/link";

type SiteHeaderProps = {
  variant?: "home" | "product";
};

export default function SiteHeader({ variant = "home" }: SiteHeaderProps) {
  const isHome = variant === "home";
  const isProduct = variant === "product";

  return (
    <header className="sticky top-0 z-20 border-b border-zinc-200 bg-white/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <Link href="/" className="inline-flex items-center gap-3">
          <span className="relative inline-flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-950 text-white shadow-sm ring-1 ring-black/10">
            <span className="text-sm font-semibold tracking-tight">J</span>
          </span>
          <span className="text-sm font-semibold tracking-tight text-zinc-950">
            JudcoTech
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 text-sm md:flex">
          <Link
            href="/"
            className={`transition-colors ${
              isHome
                ? "font-semibold text-zinc-950"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products/arc"
            className={`transition-colors ${
              isProduct
                ? "font-semibold text-zinc-950"
                : "text-zinc-600 hover:text-zinc-950"
            }`}
          >
            ARC
          </Link>
        </nav>

        {/* CTA */}
        <div className="flex items-center gap-3">
          {isHome ? (
            <Link
              href="/products/arc"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Explore ARC
            </Link>
          ) : (
            <a
              href="mailto:hello@judcotech.com?subject=ARC%20Demo%20Request"
              className="inline-flex items-center justify-center rounded-lg bg-zinc-950 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
            >
              Request Demo
            </a>
          )}
        </div>
      </div>
    </header>
  );
}