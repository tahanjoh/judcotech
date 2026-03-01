"use client";

import Link from "next/link";
import SiteFooter from "../../components/SiteFooter";

export default function ProductsPage() {
  const STAYOPS_APP_URL =
    process.env.NEXT_PUBLIC_STAYOPS_APP_URL ||
    "https://app.judcotech.com/broker";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-950 flex flex-col">
      <main className="flex-1 px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Product platform
            </h1>
            <p className="mt-4 text-base leading-7 text-zinc-600">
              JudcoTech builds operational platforms that streamline real-world
              workflows. StayOps is our active product for vacation rental brokers.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {/* StayOps */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h2 className="text-lg font-semibold">StayOps</h2>
              <p className="mt-3 text-sm text-zinc-600">
                Automated guest communication, feedback, and operational insight
                for professional vacation rental brokers.
              </p>

              <div className="mt-6 flex gap-3">
                <Link
                  href="/products/stayops"
                  className="rounded-lg bg-zinc-950 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800"
                >
                  View StayOps
                </Link>

                <a
                  href={STAYOPS_APP_URL}
                  className="rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  Broker Login
                </a>
              </div>
            </div>

            {/* ARC */}
            <div className="rounded-2xl border border-zinc-200 bg-white p-8">
              <h2 className="text-lg font-semibold">ARC Intelligence</h2>
              <p className="mt-3 text-sm text-zinc-600">
                The intelligence engine powering StayOps automation and insight.
              </p>

              <div className="mt-6">
                <Link
                  href="/products/arc"
                  className="rounded-lg border border-zinc-200 px-5 py-3 text-sm font-medium hover:bg-zinc-50"
                >
                  View ARC
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}