import Link from "next/link";

type SiteFooterProps = {
  variant?: "home" | "product";
};

export default function SiteFooter({ variant = "home" }: SiteFooterProps) {
  const isHome = variant === "home";

  return (
    <footer className="border-t border-zinc-200 bg-white px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold">JudcoTech</p>
          <p className="mt-1 text-sm text-zinc-600">
            Software for operational clarity.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 text-sm text-zinc-600">
          {isHome ? (
            <>
              {/* In-page anchors are fine as <a> */}
              <a href="#products" className="hover:text-zinc-950">
                Products
              </a>
              <a href="#platform" className="hover:text-zinc-950">
                Platform
              </a>
              <a href="#approach" className="hover:text-zinc-950">
                Approach
              </a>
              <a href="#contact" className="hover:text-zinc-950">
                Contact
              </a>
            </>
          ) : (
            <>
              {/* Page navigation must use Link */}
              <Link href="/" className="hover:text-zinc-950">
                Home
              </Link>
              <Link href="/products/arc" className="hover:text-zinc-950">
                ARC
              </Link>
              <a
                href="mailto:hello@judcotech.com"
                className="hover:text-zinc-950"
              >
                Contact
              </a>
            </>
          )}
        </div>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} JudcoTech
        </p>
      </div>
    </footer>
  );
}